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

func (k Keeper) TimeoutPostAll(c context.Context, req *types.QueryAllTimeoutPostRequest) (*types.QueryAllTimeoutPostResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timeoutPosts []*types.TimeoutPost
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	timeoutPostStore := prefix.NewStore(store, types.KeyPrefix(types.TimeoutPostKey))

	pageRes, err := query.Paginate(timeoutPostStore, req.Pagination, func(key []byte, value []byte) error {
		var timeoutPost types.TimeoutPost
		if err := k.cdc.UnmarshalBinaryBare(value, &timeoutPost); err != nil {
			return err
		}

		timeoutPosts = append(timeoutPosts, &timeoutPost)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimeoutPostResponse{TimeoutPost: timeoutPosts, Pagination: pageRes}, nil
}

func (k Keeper) TimeoutPost(c context.Context, req *types.QueryGetTimeoutPostRequest) (*types.QueryGetTimeoutPostResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timeoutPost types.TimeoutPost
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasTimeoutPost(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTimeoutPostIDBytes(req.Id)), &timeoutPost)

	return &types.QueryGetTimeoutPostResponse{TimeoutPost: &timeoutPost}, nil
}
