import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../globals/enums/models";
interface IProductsState {
    data: IProduct[] | null;
    loading: boolean;
    error: string
}
const initialState: IProductsState = {
    data: null,
    loading: false,
    error: ''
}

export const fetchProducts  = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get<IProduct[]>("http://localhost:3000/items");
  return response.data;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching products"
        })
    }
})


export default productsSlice.reducer;
