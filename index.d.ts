import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { CreateTaskBody, ErrorResponse, HealthStatus, ListTasksParams, Task, TaskStats, UpdateTaskBody } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all tasks for the authenticated user
 */
export declare const getListTasksUrl: (params?: ListTasksParams) => string;
export declare const listTasks: (params?: ListTasksParams, options?: RequestInit) => Promise<Task[]>;
export declare const getListTasksQueryKey: (params?: ListTasksParams) => readonly ["/api/tasks", ...ListTasksParams[]];
export declare const getListTasksQueryOptions: <TData = Awaited<ReturnType<typeof listTasks>>, TError = ErrorType<ErrorResponse>>(params?: ListTasksParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTasks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTasks>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTasksQueryResult = NonNullable<Awaited<ReturnType<typeof listTasks>>>;
export type ListTasksQueryError = ErrorType<ErrorResponse>;
/**
 * @summary List all tasks for the authenticated user
 */
export declare function useListTasks<TData = Awaited<ReturnType<typeof listTasks>>, TError = ErrorType<ErrorResponse>>(params?: ListTasksParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTasks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new task
 */
export declare const getCreateTaskUrl: () => string;
export declare const createTask: (createTaskBody: CreateTaskBody, options?: RequestInit) => Promise<Task>;
export declare const getCreateTaskMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTask>>, TError, {
        data: BodyType<CreateTaskBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTask>>, TError, {
    data: BodyType<CreateTaskBody>;
}, TContext>;
export type CreateTaskMutationResult = NonNullable<Awaited<ReturnType<typeof createTask>>>;
export type CreateTaskMutationBody = BodyType<CreateTaskBody>;
export type CreateTaskMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create a new task
 */
export declare const useCreateTask: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTask>>, TError, {
        data: BodyType<CreateTaskBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTask>>, TError, {
    data: BodyType<CreateTaskBody>;
}, TContext>;
/**
 * @summary Get a task by ID
 */
export declare const getGetTaskUrl: (id: number) => string;
export declare const getTask: (id: number, options?: RequestInit) => Promise<Task>;
export declare const getGetTaskQueryKey: (id: number) => readonly [`/api/tasks/${number}`];
export declare const getGetTaskQueryOptions: <TData = Awaited<ReturnType<typeof getTask>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTaskQueryResult = NonNullable<Awaited<ReturnType<typeof getTask>>>;
export type GetTaskQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a task by ID
 */
export declare function useGetTask<TData = Awaited<ReturnType<typeof getTask>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTask>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a task
 */
export declare const getUpdateTaskUrl: (id: number) => string;
export declare const updateTask: (id: number, updateTaskBody: UpdateTaskBody, options?: RequestInit) => Promise<Task>;
export declare const getUpdateTaskMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTask>>, TError, {
        id: number;
        data: BodyType<UpdateTaskBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTask>>, TError, {
    id: number;
    data: BodyType<UpdateTaskBody>;
}, TContext>;
export type UpdateTaskMutationResult = NonNullable<Awaited<ReturnType<typeof updateTask>>>;
export type UpdateTaskMutationBody = BodyType<UpdateTaskBody>;
export type UpdateTaskMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Update a task
 */
export declare const useUpdateTask: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTask>>, TError, {
        id: number;
        data: BodyType<UpdateTaskBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTask>>, TError, {
    id: number;
    data: BodyType<UpdateTaskBody>;
}, TContext>;
/**
 * @summary Delete a task
 */
export declare const getDeleteTaskUrl: (id: number) => string;
export declare const deleteTask: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteTaskMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTask>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTask>>, TError, {
    id: number;
}, TContext>;
export type DeleteTaskMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTask>>>;
export type DeleteTaskMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Delete a task
 */
export declare const useDeleteTask: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTask>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTask>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Toggle task completion status
 */
export declare const getToggleTaskCompleteUrl: (id: number) => string;
export declare const toggleTaskComplete: (id: number, options?: RequestInit) => Promise<Task>;
export declare const getToggleTaskCompleteMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleTaskComplete>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof toggleTaskComplete>>, TError, {
    id: number;
}, TContext>;
export type ToggleTaskCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof toggleTaskComplete>>>;
export type ToggleTaskCompleteMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Toggle task completion status
 */
export declare const useToggleTaskComplete: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleTaskComplete>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof toggleTaskComplete>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get task statistics for dashboard
 */
export declare const getGetTaskStatsUrl: () => string;
export declare const getTaskStats: (options?: RequestInit) => Promise<TaskStats>;
export declare const getGetTaskStatsQueryKey: () => readonly ["/api/tasks/stats"];
export declare const getGetTaskStatsQueryOptions: <TData = Awaited<ReturnType<typeof getTaskStats>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTaskStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTaskStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTaskStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getTaskStats>>>;
export type GetTaskStatsQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get task statistics for dashboard
 */
export declare function useGetTaskStats<TData = Awaited<ReturnType<typeof getTaskStats>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTaskStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map