import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: 'movies',
    initialState: [
        { name: "dad" },
        { name: "mom" },
    ],
    reducers: {},
});

export default moviesListSlice.reducer;