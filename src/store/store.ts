import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice} from "./features/personSlice";
import { FavoriteSlice} from "./features/favoriteSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store=configureStore({
    reducer:{
        person:PersonSlice.reducer,
        favorite:FavoriteSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelctor:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;