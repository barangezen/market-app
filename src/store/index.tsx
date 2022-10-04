import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productsReducer from "../features/ProductSlice/ProductSlice";
import brandsReducer from "../features/BrandsSlice/BrandSlice";
import tagsReducer from "../features/TagsSlice/TagsSlice";
import filtersReducer from "../features/FilterSlice/FilterSlice";
import cartReducer from "../features/CartSlice/CartSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    brands: brandsReducer,
    tags: tagsReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
