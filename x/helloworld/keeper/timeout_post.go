package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dixitaniket/gitmony/x/helloworld/types"
	"strconv"
)

// GetTimeoutPostCount get the total number of TypeName.LowerCamel
func (k Keeper) GetTimeoutPostCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostCountKey))
	byteKey := types.KeyPrefix(types.TimeoutPostCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetTimeoutPostCount set the total number of timeoutPost
func (k Keeper) SetTimeoutPostCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostCountKey))
	byteKey := types.KeyPrefix(types.TimeoutPostCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendTimeoutPost appends a timeoutPost in the store with a new id and update the count
func (k Keeper) AppendTimeoutPost(
	ctx sdk.Context,
	timeoutPost types.TimeoutPost,
) uint64 {
	// Create the timeoutPost
	count := k.GetTimeoutPostCount(ctx)

	// Set the ID of the appended value
	timeoutPost.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&timeoutPost)
	store.Set(GetTimeoutPostIDBytes(timeoutPost.Id), appendedValue)

	// Update timeoutPost count
	k.SetTimeoutPostCount(ctx, count+1)

	return count
}

// SetTimeoutPost set a specific timeoutPost in the store
func (k Keeper) SetTimeoutPost(ctx sdk.Context, timeoutPost types.TimeoutPost) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostKey))
	b := k.cdc.MustMarshalBinaryBare(&timeoutPost)
	store.Set(GetTimeoutPostIDBytes(timeoutPost.Id), b)
}

// GetTimeoutPost returns a timeoutPost from its id
func (k Keeper) GetTimeoutPost(ctx sdk.Context, id uint64) types.TimeoutPost {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostKey))
	var timeoutPost types.TimeoutPost
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTimeoutPostIDBytes(id)), &timeoutPost)
	return timeoutPost
}

// HasTimeoutPost checks if the timeoutPost exists in the store
func (k Keeper) HasTimeoutPost(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostKey))
	return store.Has(GetTimeoutPostIDBytes(id))
}

// GetTimeoutPostOwner returns the creator of the
func (k Keeper) GetTimeoutPostOwner(ctx sdk.Context, id uint64) string {
	return k.GetTimeoutPost(ctx, id).Creator
}

// RemoveTimeoutPost removes a timeoutPost from the store
func (k Keeper) RemoveTimeoutPost(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostKey))
	store.Delete(GetTimeoutPostIDBytes(id))
}

// GetAllTimeoutPost returns all timeoutPost
func (k Keeper) GetAllTimeoutPost(ctx sdk.Context) (list []types.TimeoutPost) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimeoutPostKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TimeoutPost
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTimeoutPostIDBytes returns the byte representation of the ID
func GetTimeoutPostIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTimeoutPostIDFromBytes returns ID in uint64 format from a byte array
func GetTimeoutPostIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
