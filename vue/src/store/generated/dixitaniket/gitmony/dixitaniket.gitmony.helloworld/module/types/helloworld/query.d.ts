import { Reader, Writer } from 'protobufjs/minimal';
import { TimeoutPost } from '../helloworld/timeout_post';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { SendPost } from '../helloworld/send_post';
import { Post } from '../helloworld/post';
export declare const protobufPackage = "dixitaniket.gitmony.helloworld";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetTimeoutPostRequest {
    id: number;
}
export interface QueryGetTimeoutPostResponse {
    TimeoutPost: TimeoutPost | undefined;
}
export interface QueryAllTimeoutPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimeoutPostResponse {
    TimeoutPost: TimeoutPost[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSendPostRequest {
    id: number;
}
export interface QueryGetSendPostResponse {
    SendPost: SendPost | undefined;
}
export interface QueryAllSendPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSendPostResponse {
    SendPost: SendPost[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPostRequest {
    id: number;
}
export interface QueryGetPostResponse {
    Post: Post | undefined;
}
export interface QueryAllPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPostResponse {
    Post: Post[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetTimeoutPostRequest: {
    encode(message: QueryGetTimeoutPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutPostRequest;
    fromJSON(object: any): QueryGetTimeoutPostRequest;
    toJSON(message: QueryGetTimeoutPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimeoutPostRequest>): QueryGetTimeoutPostRequest;
};
export declare const QueryGetTimeoutPostResponse: {
    encode(message: QueryGetTimeoutPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutPostResponse;
    fromJSON(object: any): QueryGetTimeoutPostResponse;
    toJSON(message: QueryGetTimeoutPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimeoutPostResponse>): QueryGetTimeoutPostResponse;
};
export declare const QueryAllTimeoutPostRequest: {
    encode(message: QueryAllTimeoutPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutPostRequest;
    fromJSON(object: any): QueryAllTimeoutPostRequest;
    toJSON(message: QueryAllTimeoutPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimeoutPostRequest>): QueryAllTimeoutPostRequest;
};
export declare const QueryAllTimeoutPostResponse: {
    encode(message: QueryAllTimeoutPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutPostResponse;
    fromJSON(object: any): QueryAllTimeoutPostResponse;
    toJSON(message: QueryAllTimeoutPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimeoutPostResponse>): QueryAllTimeoutPostResponse;
};
export declare const QueryGetSendPostRequest: {
    encode(message: QueryGetSendPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendPostRequest;
    fromJSON(object: any): QueryGetSendPostRequest;
    toJSON(message: QueryGetSendPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSendPostRequest>): QueryGetSendPostRequest;
};
export declare const QueryGetSendPostResponse: {
    encode(message: QueryGetSendPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendPostResponse;
    fromJSON(object: any): QueryGetSendPostResponse;
    toJSON(message: QueryGetSendPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSendPostResponse>): QueryGetSendPostResponse;
};
export declare const QueryAllSendPostRequest: {
    encode(message: QueryAllSendPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendPostRequest;
    fromJSON(object: any): QueryAllSendPostRequest;
    toJSON(message: QueryAllSendPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSendPostRequest>): QueryAllSendPostRequest;
};
export declare const QueryAllSendPostResponse: {
    encode(message: QueryAllSendPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendPostResponse;
    fromJSON(object: any): QueryAllSendPostResponse;
    toJSON(message: QueryAllSendPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSendPostResponse>): QueryAllSendPostResponse;
};
export declare const QueryGetPostRequest: {
    encode(message: QueryGetPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest;
    fromJSON(object: any): QueryGetPostRequest;
    toJSON(message: QueryGetPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest;
};
export declare const QueryGetPostResponse: {
    encode(message: QueryGetPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse;
    fromJSON(object: any): QueryGetPostResponse;
    toJSON(message: QueryGetPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse;
};
export declare const QueryAllPostRequest: {
    encode(message: QueryAllPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest;
    fromJSON(object: any): QueryAllPostRequest;
    toJSON(message: QueryAllPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest;
};
export declare const QueryAllPostResponse: {
    encode(message: QueryAllPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse;
    fromJSON(object: any): QueryAllPostResponse;
    toJSON(message: QueryAllPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a timeoutPost by id. */
    TimeoutPost(request: QueryGetTimeoutPostRequest): Promise<QueryGetTimeoutPostResponse>;
    /** Queries a list of timeoutPost items. */
    TimeoutPostAll(request: QueryAllTimeoutPostRequest): Promise<QueryAllTimeoutPostResponse>;
    /** Queries a sendPost by id. */
    SendPost(request: QueryGetSendPostRequest): Promise<QueryGetSendPostResponse>;
    /** Queries a list of sendPost items. */
    SendPostAll(request: QueryAllSendPostRequest): Promise<QueryAllSendPostResponse>;
    /** Queries a post by id. */
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    /** Queries a list of post items. */
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    TimeoutPost(request: QueryGetTimeoutPostRequest): Promise<QueryGetTimeoutPostResponse>;
    TimeoutPostAll(request: QueryAllTimeoutPostRequest): Promise<QueryAllTimeoutPostResponse>;
    SendPost(request: QueryGetSendPostRequest): Promise<QueryGetSendPostResponse>;
    SendPostAll(request: QueryAllSendPostRequest): Promise<QueryAllSendPostResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
