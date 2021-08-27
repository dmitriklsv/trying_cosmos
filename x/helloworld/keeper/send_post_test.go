package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dixitaniket/gitmony/x/helloworld/types"
	"github.com/stretchr/testify/assert"
)

func createNSendPost(keeper *Keeper, ctx sdk.Context, n int) []types.SendPost {
	items := make([]types.SendPost, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendSendPost(ctx, items[i])
	}
	return items
}

func TestSendPostGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendPost(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetSendPost(ctx, item.Id))
	}
}

func TestSendPostExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendPost(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasSendPost(ctx, item.Id))
	}
}

func TestSendPostRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendPost(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSendPost(ctx, item.Id)
		assert.False(t, keeper.HasSendPost(ctx, item.Id))
	}
}

func TestSendPostGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendPost(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllSendPost(ctx))
}

func TestSendPostCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNSendPost(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetSendPostCount(ctx))
}
