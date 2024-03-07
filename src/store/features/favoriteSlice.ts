import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface FavoriteState {
    favorites: number[]; 
}

const initialState: FavoriteState = {
    favorites: [],
};

export const FavoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<number>) => {
          
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorites: (state, action: PayloadAction<number>) => {
          
            state.favorites = state.favorites.filter(id => id !== action.payload);
        },
    },
});

export default FavoriteSlice.reducer;
export const { addToFavorites, removeFromFavorites } = FavoriteSlice.actions;
