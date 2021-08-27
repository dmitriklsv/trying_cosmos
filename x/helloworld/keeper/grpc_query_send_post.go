package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/dixitaniket/gitmony/x/helloworld/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SendPostAll(c context.Context, req *types.QueryAllSendPostRequest) (*types.QueryAllSendPostResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sendPosts []*types.SendPost
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sendPostStore := prefix.NewStore(store, types.KeyPrefix(types.SendPostKey))

	pageRes, err := query.Paginate(sendPostStore, req.Pagination, func(key []byte, value []byte) error {
		var sendPost types.SendPost
		if err := k.cdc.UnmarshalBinaryBare(value, &sendPost); err != nil {
			return err
		}

		sendPosts = append(sendPosts, &sendPost)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSendPostResponse{SendPost: sendPosts, Pagination: pageRes}, nil
}

func (k Keeper) SendPost(c context.Context, req *types.QueryGetSendPostRequest) (*types.QueryGetSendPostResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sendPost types.SendPost
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSendPost(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSendPostIDBytes(req.Id)), &sendPost)

	return &types.QueryGetSendPostResponse{SendPost: &sendPost}, nil
}
