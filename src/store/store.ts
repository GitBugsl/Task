import { configureStore } from "@reduxjs/toolkit";
import { FavoriteSlice } from "./features/personSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store=configureStore({
    reducer:{
        favorite:FavoriteSlice.reducer,
    }
})

export const useAppDispatch:() => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<
  ReturnType<typeof store.getState>
>=useSelector;