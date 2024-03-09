import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Favorite {
    id: string;
}

interface FavoriteState {
    favorites: Favorite[];
}

const initialState: FavoriteState = {
    favorites: [],
};

export const FavoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;
            // Eğer favoriler içinde bu id zaten varsa, ekleme işlemini gerçekleştirme
            if (!state.favorites.some(favorite => favorite.id === id)) {
                state.favorites.push({
                    id,
                });
            }
        },
        removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
            const { id } = action.payload;
            // Eğer favoriler içinde bu id varsa, çıkarma işlemini gerçekleştir
            const index = state.favorites.findIndex(favorite => favorite.id === id);
            if (index !== -1) {
                state.favorites.splice(index, 1);
            }
        },
    },
});

export default FavoriteSlice.reducer;
export const { addFavorite, removeFavorite } = FavoriteSlice.actions;