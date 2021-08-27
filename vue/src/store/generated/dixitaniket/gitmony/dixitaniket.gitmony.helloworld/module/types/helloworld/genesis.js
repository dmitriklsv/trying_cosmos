/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { TimeoutPost } from '../helloworld/timeout_post';
import { SendPost } from '../helloworld/send_post';
import { Post } from '../helloworld/post';
export const protobufPackage = 'dixitaniket.gitmony.helloworld';
const baseGenesisState = { timeoutPostCount: 0, sendPostCount: 0, postCount: 0, portId: '' };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.timeoutPostList) {
            TimeoutPost.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutPostCount !== 0) {
            writer.uint32(56).uint64(message.timeoutPostCount);
        }
        for (const v of message.sendPostList) {
            SendPost.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.sendPostCount !== 0) {
            writer.uint32(40).uint64(message.sendPostCount);
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.postCount !== 0) {
            writer.uint32(24).uint64(message.postCount);
        }
        if (message.portId !== '') {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.timeoutPostList = [];
        message.sendPostList = [];
        message.postList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.timeoutPostList.push(TimeoutPost.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.timeoutPostCount = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.sendPostList.push(SendPost.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendPostCount = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.postList.push(Post.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.postCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.timeoutPostList = [];
        message.sendPostList = [];
        message.postList = [];
        if (object.timeoutPostList !== undefined && object.timeoutPostList !== null) {
            for (const e of object.timeoutPostList) {
                message.timeoutPostList.push(TimeoutPost.fromJSON(e));
            }
        }
        if (object.timeoutPostCount !== undefined && object.timeoutPostCount !== null) {
            message.timeoutPostCount = Number(object.timeoutPostCount);
        }
        else {
            message.timeoutPostCount = 0;
        }
        if (object.sendPostList !== undefined && object.sendPostList !== null) {
            for (const e of object.sendPostList) {
                message.sendPostList.push(SendPost.fromJSON(e));
            }
        }
        if (object.sendPostCount !== undefined && object.sendPostCount !== null) {
            message.sendPostCount = Number(object.sendPostCount);
        }
        else {
            message.sendPostCount = 0;
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromJSON(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = Number(object.postCount);
        }
        else {
            message.postCount = 0;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.timeoutPostList) {
            obj.timeoutPostList = message.timeoutPostList.map((e) => (e ? TimeoutPost.toJSON(e) : undefined));
        }
        else {
            obj.timeoutPostList = [];
        }
        message.timeoutPostCount !== undefined && (obj.timeoutPostCount = message.timeoutPostCount);
        if (message.sendPostList) {
            obj.sendPostList = message.sendPostList.map((e) => (e ? SendPost.toJSON(e) : undefined));
        }
        else {
            obj.sendPostList = [];
        }
        message.sendPostCount !== undefined && (obj.sendPostCount = message.sendPostCount);
        if (message.postList) {
            obj.postList = message.postList.map((e) => (e ? Post.toJSON(e) : undefined));
        }
        else {
            obj.postList = [];
        }
        message.postCount !== undefined && (obj.postCount = message.postCount);
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.timeoutPostList = [];
        message.sendPostList = [];
        message.postList = [];
        if (object.timeoutPostList !== undefined && object.timeoutPostList !== null) {
            for (const e of object.timeoutPostList) {
                message.timeoutPostList.push(TimeoutPost.fromPartial(e));
            }
        }
        if (object.timeoutPostCount !== undefined && object.timeoutPostCount !== null) {
            message.timeoutPostCount = object.timeoutPostCount;
        }
        else {
            message.timeoutPostCount = 0;
        }
        if (object.sendPostList !== undefined && object.sendPostList !== null) {
            for (const e of object.sendPostList) {
                message.sendPostList.push(SendPost.fromPartial(e));
            }
        }
        if (object.sendPostCount !== undefined && object.sendPostCount !== null) {
            message.sendPostCount = object.sendPostCount;
        }
        else {
            message.sendPostCount = 0;
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromPartial(e));
            }
        }
        if (object.postCount !== undefined && object.postCount !== null) {
            message.postCount = object.postCount;
        }
        else {
            message.postCount = 0;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = '';
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
