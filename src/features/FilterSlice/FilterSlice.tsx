import { createSlice } from "@reduxjs/toolkit";

interface IFilterState {
  brands: string[];
  tags: string[];
  itemType?: string | null;
  sortType?: number | null;
}

const initialState: IFilterState = {
  brands: [],
  tags: [],
  itemType: null,
  sortType: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setItemType: (state, action) => {
      state.itemType = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { setTags, setBrands, setItemType, setSortType } =
  filterSlice.actions;
export default filterSlice.reducer;
