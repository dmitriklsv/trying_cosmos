package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dixitaniket/gitmony/x/helloworld/types"
	"strconv"
)

// GetSendPostCount get the total number of TypeName.LowerCamel
func (k Keeper) GetSendPostCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostCountKey))
	byteKey := types.KeyPrefix(types.SendPostCountKey)
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

// SetSendPostCount set the total number of sendPost
func (k Keeper) SetSendPostCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostCountKey))
	byteKey := types.KeyPrefix(types.SendPostCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSendPost appends a sendPost in the store with a new id and update the count
func (k Keeper) AppendSendPost(
	ctx sdk.Context,
	sendPost types.SendPost,
) uint64 {
	// Create the sendPost
	count := k.GetSendPostCount(ctx)

	// Set the ID of the appended value
	sendPost.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&sendPost)
	store.Set(GetSendPostIDBytes(sendPost.Id), appendedValue)

	// Update sendPost count
	k.SetSendPostCount(ctx, count+1)

	return count
}

// SetSendPost set a specific sendPost in the store
func (k Keeper) SetSendPost(ctx sdk.Context, sendPost types.SendPost) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostKey))
	b := k.cdc.MustMarshalBinaryBare(&sendPost)
	store.Set(GetSendPostIDBytes(sendPost.Id), b)
}

// GetSendPost returns a sendPost from its id
func (k Keeper) GetSendPost(ctx sdk.Context, id uint64) types.SendPost {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostKey))
	var sendPost types.SendPost
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSendPostIDBytes(id)), &sendPost)
	return sendPost
}

// HasSendPost checks if the sendPost exists in the store
func (k Keeper) HasSendPost(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostKey))
	return store.Has(GetSendPostIDBytes(id))
}

// GetSendPostOwner returns the creator of the
func (k Keeper) GetSendPostOwner(ctx sdk.Context, id uint64) string {
	return k.GetSendPost(ctx, id).Creator
}

// RemoveSendPost removes a sendPost from the store
func (k Keeper) RemoveSendPost(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostKey))
	store.Delete(GetSendPostIDBytes(id))
}

// GetAllSendPost returns all sendPost
func (k Keeper) GetAllSendPost(ctx sdk.Context) (list []types.SendPost) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendPostKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SendPost
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSendPostIDBytes returns the byte representation of the ID
func GetSendPostIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSendPostIDFromBytes returns ID in uint64 format from a byte array
func GetSendPostIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
