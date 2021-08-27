/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { TimeoutPost } from '../helloworld/timeout_post'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { SendPost } from '../helloworld/send_post'
import { Post } from '../helloworld/post'

export const protobufPackage = 'dixitaniket.gitmony.helloworld'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetTimeoutPostRequest {
  id: number
}

export interface QueryGetTimeoutPostResponse {
  TimeoutPost: TimeoutPost | undefined
}

export interface QueryAllTimeoutPostRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllTimeoutPostResponse {
  TimeoutPost: TimeoutPost[]
  pagination: PageResponse | undefined
}

export interface QueryGetSendPostRequest {
  id: number
}

export interface QueryGetSendPostResponse {
  SendPost: SendPost | undefined
}

export interface QueryAllSendPostRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSendPostResponse {
  SendPost: SendPost[]
  pagination: PageResponse | undefined
}

export interface QueryGetPostRequest {
  id: number
}

export interface QueryGetPostResponse {
  Post: Post | undefined
}

export interface QueryAllPostRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPostResponse {
  Post: Post[]
  pagination: PageResponse | undefined
}

const baseQueryGetTimeoutPostRequest: object = { id: 0 }

export const QueryGetTimeoutPostRequest = {
  encode(message: QueryGetTimeoutPostRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTimeoutPostRequest } as QueryGetTimeoutPostRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTimeoutPostRequest {
    const message = { ...baseQueryGetTimeoutPostRequest } as QueryGetTimeoutPostRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetTimeoutPostRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTimeoutPostRequest>): QueryGetTimeoutPostRequest {
    const message = { ...baseQueryGetTimeoutPostRequest } as QueryGetTimeoutPostRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetTimeoutPostResponse: object = {}

export const QueryGetTimeoutPostResponse = {
  encode(message: QueryGetTimeoutPostResponse, writer: Writer = Writer.create()): Writer {
    if (message.TimeoutPost !== undefined) {
      TimeoutPost.encode(message.TimeoutPost, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTimeoutPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetTimeoutPostResponse } as QueryGetTimeoutPostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.TimeoutPost = TimeoutPost.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetTimeoutPostResponse {
    const message = { ...baseQueryGetTimeoutPostResponse } as QueryGetTimeoutPostResponse
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      message.TimeoutPost = TimeoutPost.fromJSON(object.TimeoutPost)
    } else {
      message.TimeoutPost = undefined
    }
    return message
  },

  toJSON(message: QueryGetTimeoutPostResponse): unknown {
    const obj: any = {}
    message.TimeoutPost !== undefined && (obj.TimeoutPost = message.TimeoutPost ? TimeoutPost.toJSON(message.TimeoutPost) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetTimeoutPostResponse>): QueryGetTimeoutPostResponse {
    const message = { ...baseQueryGetTimeoutPostResponse } as QueryGetTimeoutPostResponse
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      message.TimeoutPost = TimeoutPost.fromPartial(object.TimeoutPost)
    } else {
      message.TimeoutPost = undefined
    }
    return message
  }
}

const baseQueryAllTimeoutPostRequest: object = {}

export const QueryAllTimeoutPostRequest = {
  encode(message: QueryAllTimeoutPostRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTimeoutPostRequest } as QueryAllTimeoutPostRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTimeoutPostRequest {
    const message = { ...baseQueryAllTimeoutPostRequest } as QueryAllTimeoutPostRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTimeoutPostRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTimeoutPostRequest>): QueryAllTimeoutPostRequest {
    const message = { ...baseQueryAllTimeoutPostRequest } as QueryAllTimeoutPostRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllTimeoutPostResponse: object = {}

export const QueryAllTimeoutPostResponse = {
  encode(message: QueryAllTimeoutPostResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.TimeoutPost) {
      TimeoutPost.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTimeoutPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllTimeoutPostResponse } as QueryAllTimeoutPostResponse
    message.TimeoutPost = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.TimeoutPost.push(TimeoutPost.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllTimeoutPostResponse {
    const message = { ...baseQueryAllTimeoutPostResponse } as QueryAllTimeoutPostResponse
    message.TimeoutPost = []
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      for (const e of object.TimeoutPost) {
        message.TimeoutPost.push(TimeoutPost.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllTimeoutPostResponse): unknown {
    const obj: any = {}
    if (message.TimeoutPost) {
      obj.TimeoutPost = message.TimeoutPost.map((e) => (e ? TimeoutPost.toJSON(e) : undefined))
    } else {
      obj.TimeoutPost = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllTimeoutPostResponse>): QueryAllTimeoutPostResponse {
    const message = { ...baseQueryAllTimeoutPostResponse } as QueryAllTimeoutPostResponse
    message.TimeoutPost = []
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      for (const e of object.TimeoutPost) {
        message.TimeoutPost.push(TimeoutPost.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetSendPostRequest: object = { id: 0 }

export const QueryGetSendPostRequest = {
  encode(message: QueryGetSendPostRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSendPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSendPostRequest } as QueryGetSendPostRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSendPostRequest {
    const message = { ...baseQueryGetSendPostRequest } as QueryGetSendPostRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetSendPostRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSendPostRequest>): QueryGetSendPostRequest {
    const message = { ...baseQueryGetSendPostRequest } as QueryGetSendPostRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetSendPostResponse: object = {}

export const QueryGetSendPostResponse = {
  encode(message: QueryGetSendPostResponse, writer: Writer = Writer.create()): Writer {
    if (message.SendPost !== undefined) {
      SendPost.encode(message.SendPost, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSendPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSendPostResponse } as QueryGetSendPostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SendPost = SendPost.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSendPostResponse {
    const message = { ...baseQueryGetSendPostResponse } as QueryGetSendPostResponse
    if (object.SendPost !== undefined && object.SendPost !== null) {
      message.SendPost = SendPost.fromJSON(object.SendPost)
    } else {
      message.SendPost = undefined
    }
    return message
  },

  toJSON(message: QueryGetSendPostResponse): unknown {
    const obj: any = {}
    message.SendPost !== undefined && (obj.SendPost = message.SendPost ? SendPost.toJSON(message.SendPost) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSendPostResponse>): QueryGetSendPostResponse {
    const message = { ...baseQueryGetSendPostResponse } as QueryGetSendPostResponse
    if (object.SendPost !== undefined && object.SendPost !== null) {
      message.SendPost = SendPost.fromPartial(object.SendPost)
    } else {
      message.SendPost = undefined
    }
    return message
  }
}

const baseQueryAllSendPostRequest: object = {}

export const QueryAllSendPostRequest = {
  encode(message: QueryAllSendPostRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSendPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSendPostRequest } as QueryAllSendPostRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSendPostRequest {
    const message = { ...baseQueryAllSendPostRequest } as QueryAllSendPostRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSendPostRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSendPostRequest>): QueryAllSendPostRequest {
    const message = { ...baseQueryAllSendPostRequest } as QueryAllSendPostRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSendPostResponse: object = {}

export const QueryAllSendPostResponse = {
  encode(message: QueryAllSendPostResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.SendPost) {
      SendPost.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSendPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSendPostResponse } as QueryAllSendPostResponse
    message.SendPost = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SendPost.push(SendPost.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllSendPostResponse {
    const message = { ...baseQueryAllSendPostResponse } as QueryAllSendPostResponse
    message.SendPost = []
    if (object.SendPost !== undefined && object.SendPost !== null) {
      for (const e of object.SendPost) {
        message.SendPost.push(SendPost.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSendPostResponse): unknown {
    const obj: any = {}
    if (message.SendPost) {
      obj.SendPost = message.SendPost.map((e) => (e ? SendPost.toJSON(e) : undefined))
    } else {
      obj.SendPost = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSendPostResponse>): QueryAllSendPostResponse {
    const message = { ...baseQueryAllSendPostResponse } as QueryAllSendPostResponse
    message.SendPost = []
    if (object.SendPost !== undefined && object.SendPost !== null) {
      for (const e of object.SendPost) {
        message.SendPost.push(SendPost.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetPostRequest: object = { id: 0 }

export const QueryGetPostRequest = {
  encode(message: QueryGetPostRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetPostRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetPostResponse: object = {}

export const QueryGetPostResponse = {
  encode(message: QueryGetPostResponse, writer: Writer = Writer.create()): Writer {
    if (message.Post !== undefined) {
      Post.encode(message.Post, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Post = Post.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromJSON(object.Post)
    } else {
      message.Post = undefined
    }
    return message
  },

  toJSON(message: QueryGetPostResponse): unknown {
    const obj: any = {}
    message.Post !== undefined && (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromPartial(object.Post)
    } else {
      message.Post = undefined
    }
    return message
  }
}

const baseQueryAllPostRequest: object = {}

export const QueryAllPostRequest = {
  encode(message: QueryAllPostRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPostRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPostResponse: object = {}

export const QueryAllPostResponse = {
  encode(message: QueryAllPostResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse
    message.Post = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse
    message.Post = []
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPostResponse): unknown {
    const obj: any = {}
    if (message.Post) {
      obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined))
    } else {
      obj.Post = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse
    message.Post = []
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a timeoutPost by id. */
  TimeoutPost(request: QueryGetTimeoutPostRequest): Promise<QueryGetTimeoutPostResponse>
  /** Queries a list of timeoutPost items. */
  TimeoutPostAll(request: QueryAllTimeoutPostRequest): Promise<QueryAllTimeoutPostResponse>
  /** Queries a sendPost by id. */
  SendPost(request: QueryGetSendPostRequest): Promise<QueryGetSendPostResponse>
  /** Queries a list of sendPost items. */
  SendPostAll(request: QueryAllSendPostRequest): Promise<QueryAllSendPostResponse>
  /** Queries a post by id. */
  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>
  /** Queries a list of post items. */
  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  TimeoutPost(request: QueryGetTimeoutPostRequest): Promise<QueryGetTimeoutPostResponse> {
    const data = QueryGetTimeoutPostRequest.encode(request).finish()
    const promise = this.rpc.request('dixitaniket.gitmony.helloworld.Query', 'TimeoutPost', data)
    return promise.then((data) => QueryGetTimeoutPostResponse.decode(new Reader(data)))
  }

  TimeoutPostAll(request: QueryAllTimeoutPostRequest): Promise<QueryAllTimeoutPostResponse> {
    const data = QueryAllTimeoutPostRequest.encode(request).finish()
    const promise = this.rpc.request('dixitaniket.gitmony.helloworld.Query', 'TimeoutPostAll', data)
    return promise.then((data) => QueryAllTimeoutPostResponse.decode(new Reader(data)))
  }

  SendPost(request: QueryGetSendPostRequest): Promise<QueryGetSendPostResponse> {
    const data = QueryGetSendPostRequest.encode(request).finish()
    const promise = this.rpc.request('dixitaniket.gitmony.helloworld.Query', 'SendPost', data)
    return promise.then((data) => QueryGetSendPostResponse.decode(new Reader(data)))
  }

  SendPostAll(request: QueryAllSendPostRequest): Promise<QueryAllSendPostResponse> {
    const data = QueryAllSendPostRequest.encode(request).finish()
    const promise = this.rpc.request('dixitaniket.gitmony.helloworld.Query', 'SendPostAll', data)
    return promise.then((data) => QueryAllSendPostResponse.decode(new Reader(data)))
  }

  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
    const data = QueryGetPostRequest.encode(request).finish()
    const promise = this.rpc.request('dixitaniket.gitmony.helloworld.Query', 'Post', data)
    return promise.then((data) => QueryGetPostResponse.decode(new Reader(data)))
  }

  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse> {
    const data = QueryAllPostRequest.encode(request).finish()
    const promise = this.rpc.request('dixitaniket.gitmony.helloworld.Query', 'PostAll', data)
    return promise.then((data) => QueryAllPostResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
