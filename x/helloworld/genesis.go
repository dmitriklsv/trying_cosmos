package helloworld

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dixitaniket/gitmony/x/helloworld/keeper"
	"github.com/dixitaniket/gitmony/x/helloworld/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the timeoutPost
	for _, elem := range genState.TimeoutPostList {
		k.SetTimeoutPost(ctx, *elem)
	}

	// Set timeoutPost count
	k.SetTimeoutPostCount(ctx, genState.TimeoutPostCount)

	// Set all the sendPost
	for _, elem := range genState.SendPostList {
		k.SetSendPost(ctx, *elem)
	}

	// Set sendPost count
	k.SetSendPostCount(ctx, genState.SendPostCount)

	// Set all the post
	for _, elem := range genState.PostList {
		k.SetPost(ctx, *elem)
	}

	// Set post count
	k.SetPostCount(ctx, genState.PostCount)

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all timeoutPost
	timeoutPostList := k.GetAllTimeoutPost(ctx)
	for _, elem := range timeoutPostList {
		elem := elem
		genesis.TimeoutPostList = append(genesis.TimeoutPostList, &elem)
	}

	// Set the current count
	genesis.TimeoutPostCount = k.GetTimeoutPostCount(ctx)

	// Get all sendPost
	sendPostList := k.GetAllSendPost(ctx)
	for _, elem := range sendPostList {
		elem := elem
		genesis.SendPostList = append(genesis.SendPostList, &elem)
	}

	// Set the current count
	genesis.SendPostCount = k.GetSendPostCount(ctx)

	// Get all post
	postList := k.GetAllPost(ctx)
	for _, elem := range postList {
		elem := elem
		genesis.PostList = append(genesis.PostList, &elem)
	}

	// Set the current count
	genesis.PostCount = k.GetPostCount(ctx)

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
