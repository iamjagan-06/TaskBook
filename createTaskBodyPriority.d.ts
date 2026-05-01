openapi: 3.1.0
info:
  # Do not change the title, if the title changes, the import paths will be broken
  title: Api
  version: 0.1.0
  description: Todo App API specification
servers:
  - url: /api
    description: Base API path
tags:
  - name: health
    description: Health operations
  - name: tasks
    description: Task operations
paths:
  /healthz:
    get:
      operationId: healthCheck
      tags: [health]
      summary: Health check
      description: Returns server health status
      responses:
        "200":
          description: Healthy
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/HealthStatus"

  /tasks:
    get:
      operationId: listTasks
      tags: [tasks]
      summary: List all tasks for the authenticated user
      security:
        - bearerAuth: []
      parameters:
        - name: priority
          in: query
          required: false
          schema:
            type: string
            enum: [low, medium, high]
        - name: completed
          in: query
          required: false
          schema:
            type: boolean
        - name: sortBy
          in: query
          required: false
          schema:
            type: string
            enum: [priority, createdAt, dueDate, title]
        - name: sortOrder
          in: query
          required: false
          schema:
            type: string
            enum: [asc, desc]
      responses:
        "200":
          description: List of tasks
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Task"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
    post:
      operationId: createTask
      tags: [tasks]
      summary: Create a new task
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateTaskBody"
      responses:
        "201":
          description: Task created
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Task"
        "400":
          description: Validation error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /tasks/{id}:
    get:
      operationId: getTask
      tags: [tasks]
      summary: Get a task by ID
      security:
        - bearerAuth: []
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Task found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Task"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Task not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
    patch:
      operationId: updateTask
      tags: [tasks]
      summary: Update a task
      security:
        - bearerAuth: []
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/UpdateTaskBody"
      responses:
        "200":
          description: Task updated
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Task"
        "400":
          description: Validation error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Task not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
    delete:
      operationId: deleteTask
      tags: [tasks]
      summary: Delete a task
      security:
        - bearerAuth: []
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "204":
          description: Task deleted
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Task not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /tasks/{id}/complete:
    patch:
      operationId: toggleTaskComplete
      tags: [tasks]
      summary: Toggle task completion status
      security:
        - bearerAuth: []
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: Task completion toggled
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Task"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
        "404":
          description: Task not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

  /tasks/stats:
    get:
      operationId: getTaskStats
      tags: [tasks]
      summary: Get task statistics for dashboard
      security:
        - bearerAuth: []
      responses:
        "200":
          description: Task statistics
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/TaskStats"
        "401":
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
  schemas:
    HealthStatus:
      type: object
      properties:
        status:
          type: string
      required:
        - status

    Task:
      type: object
      properties:
        id:
          type: integer
        userId:
          type: string
        title:
          type: string
        description:
          type: string
          nullable: true
        priority:
          type: string
          enum: [low, medium, high]
        completed:
          type: boolean
        dueDate:
          type: string
          format: date-time
          nullable: true
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
      required:
        - id
        - userId
        - title
        - priority
        - completed
        - createdAt
        - updatedAt

    CreateTaskBody:
      type: object
      properties:
        title:
          type: string
          minLength: 1
          maxLength: 255
        description:
          type: string
          nullable: true
        priority:
          type: string
          enum: [low, medium, high]
          default: medium
        dueDate:
          type: string
          format: date-time
          nullable: true
      required:
        - title

    UpdateTaskBody:
      type: object
      properties:
        title:
          type: string
          minLength: 1
          maxLength: 255
        description:
          type: string
          nullable: true
        priority:
          type: string
          enum: [low, medium, high]
        completed:
          type: boolean
        dueDate:
          type: string
          format: date-time
          nullable: true

    TaskStats:
      type: object
      properties:
        total:
          type: integer
        completed:
          type: integer
        pending:
          type: integer
        byPriority:
          type: object
          properties:
            low:
              type: integer
            medium:
              type: integer
            high:
              type: integer
          required:
            - low
            - medium
            - high
        overdue:
          type: integer
      required:
        - total
        - completed
        - pending
        - byPriority
        - overdue

    ErrorResponse:
      type: object
      properties:
        error:
          type: string
      required:
        - error
