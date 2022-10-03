import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../globals/enums/models";

interface ITagsState {
    data: string[] | null;
    loading: boolean;
    error: string
}
const initialState: ITagsState = {
    data: null,
    loading: false,
    error: ''
}

export const fetchTags = createAsyncThunk("fetchTags", async () => {
    const response = await axios.get("http://localhost:3000/items");
    let data: IProduct[] = response.data;
    let tags: string[] = [];

    data.forEach((obj) => {
        obj.tags.forEach((tag) => {
            if(!tags.find((currTag) => currTag === tag)) {
                tags.push(tag);
            }
        })
    });
    return tags
})

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchTags.fulfilled, (state, action: PayloadAction<string[]>) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchTags.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching products"
        })
    }
})

export default tagsSlice.reducer;