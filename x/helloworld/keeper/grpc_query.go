package keeper

import (
	"github.com/dixitaniket/gitmony/x/helloworld/types"
)

var _ types.QueryServer = Keeper{}
