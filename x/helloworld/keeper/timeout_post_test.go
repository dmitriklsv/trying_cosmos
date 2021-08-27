package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dixitaniket/gitmony/x/helloworld/types"
	"github.com/stretchr/testify/assert"
)

func createNTimeoutPost(keeper *Keeper, ctx sdk.Context, n int) []types.TimeoutPost {
	items := make([]types.TimeoutPost, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendTimeoutPost(ctx, items[i])
	}
	return items
}

func TestTimeoutPostGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimeoutPost(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetTimeoutPost(ctx, item.Id))
	}
}

func TestTimeoutPostExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimeoutPost(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasTimeoutPost(ctx, item.Id))
	}
}

func TestTimeoutPostRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimeoutPost(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTimeoutPost(ctx, item.Id)
		assert.False(t, keeper.HasTimeoutPost(ctx, item.Id))
	}
}

func TestTimeoutPostGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimeoutPost(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllTimeoutPost(ctx))
}

func TestTimeoutPostCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTimeoutPost(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetTimeoutPostCount(ctx))
}
