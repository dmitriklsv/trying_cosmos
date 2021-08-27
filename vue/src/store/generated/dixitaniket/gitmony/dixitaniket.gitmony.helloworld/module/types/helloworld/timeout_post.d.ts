import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "dixitaniket.gitmony.helloworld";
export interface TimeoutPost {
    creator: string;
    id: number;
    title: string;
    chain: string;
}
export declare const TimeoutPost: {
    encode(message: TimeoutPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TimeoutPost;
    fromJSON(object: any): TimeoutPost;
    toJSON(message: TimeoutPost): unknown;
    fromPartial(object: DeepPartial<TimeoutPost>): TimeoutPost;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
