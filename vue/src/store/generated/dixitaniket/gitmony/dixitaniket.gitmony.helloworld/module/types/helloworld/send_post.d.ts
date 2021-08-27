import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "dixitaniket.gitmony.helloworld";
export interface SendPost {
    creator: string;
    id: number;
    postId: string;
    title: string;
    chain: string;
}
export declare const SendPost: {
    encode(message: SendPost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SendPost;
    fromJSON(object: any): SendPost;
    toJSON(message: SendPost): unknown;
    fromPartial(object: DeepPartial<SendPost>): SendPost;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
