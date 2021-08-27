import { Writer, Reader } from 'protobufjs/minimal';
import { TimeoutPost } from '../helloworld/timeout_post';
import { SendPost } from '../helloworld/send_post';
import { Post } from '../helloworld/post';
export declare const protobufPackage = "dixitaniket.gitmony.helloworld";
/** GenesisState defines the helloworld module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    timeoutPostList: TimeoutPost[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    timeoutPostCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    sendPostList: SendPost[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    sendPostCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    postList: Post[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    postCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    portId: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
