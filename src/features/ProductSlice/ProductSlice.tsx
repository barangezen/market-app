import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilterTypes, IProduct } from "../../globals/enums/models";
import { filterData } from "../../helpers/helpers";
interface IProductsState {
    data: IProduct[] | null;
    count: number;
    itemTypes: string[] | null;
    loading: boolean;
    error: string
}
const initialState: IProductsState = {
    data: null,
    loading: false,
    count: 0,
    itemTypes: null,
    error: ''
}

export const fetchProducts  = createAsyncThunk("fetchProducts", async (filterValue: IFilterTypes) => {
  const response = await axios.get<IProduct[]>("http://localhost:3000/items");
  let data: IProduct[] = response.data;
  const productTypes = data.map((product) => product.itemType).filter((value, index, self) => self.indexOf(value) === index);
  const filteredData: IProduct[] = (filterData(filterValue, data));
  const filteredProducts: IProductsState = {
    data: filteredData.slice((filterValue.index -1) * filterValue.pageSize, (filterValue.index -1) * filterValue.pageSize + filterValue.pageSize),
    count: filterData.length,
    itemTypes: productTypes,
    loading: false,
    error: ''
  }
  return filteredProducts;
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
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProductsState>) => {
            state.data = action.payload.data;
            state.loading = false;
            state.count = action.payload.count;
            state.itemTypes = action.payload.itemTypes;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching products"
        })
    }
})


export default productsSlice.reducer;
