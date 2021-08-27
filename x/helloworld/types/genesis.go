package types

import (
	"fmt"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId: PortID,
		// this line is used by starport scaffolding # genesis/types/default
		TimeoutPostList: []*TimeoutPost{},
		SendPostList:    []*SendPost{},
		PostList:        []*Post{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in timeoutPost
	timeoutPostIdMap := make(map[uint64]bool)

	for _, elem := range gs.TimeoutPostList {
		if _, ok := timeoutPostIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for timeoutPost")
		}
		timeoutPostIdMap[elem.Id] = true
	}
	// Check for duplicated ID in sendPost
	sendPostIdMap := make(map[uint64]bool)

	for _, elem := range gs.SendPostList {
		if _, ok := sendPostIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for sendPost")
		}
		sendPostIdMap[elem.Id] = true
	}
	// Check for duplicated ID in post
	postIdMap := make(map[uint64]bool)

	for _, elem := range gs.PostList {
		if _, ok := postIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for post")
		}
		postIdMap[elem.Id] = true
	}

	return nil
}
