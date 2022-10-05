import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IBrand } from "../../globals/enums/models";

interface IBrandsState {
  data: string[] | null;
  loading: boolean;
  error: string;
}

const initialState: IBrandsState = {
  data: null,
  loading: false,
  error: "",
};

export const fetchBrands = createAsyncThunk("fetchBrands", async () => {
  const response = await axios.get<IBrand[]>("https://baran-market-app-backend.herokuapp.com/companies");
  return response.data.map((brand) => {
    return brand.slug;
  });
});

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchBrands.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching products";
    });
  },
});

export default brandsSlice.reducer;
