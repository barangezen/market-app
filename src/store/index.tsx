import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productsReducer from '../features/ProductSlice/ProductSlice';
import brandsReducer from '../features/BrandsSlice/BrandSlice';
import tagsReducer from '../features/TagsSlice/TagsSlice';
export const store = configureStore({
    reducer: {
        products: productsReducer,
        brands: brandsReducer,
        tags: tagsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;