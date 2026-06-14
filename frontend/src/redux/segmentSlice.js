import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../api/axios";

export const fetchSegments = createAsyncThunk("segments/fetchAll", async () => {
    const response = await api.get("/segments");

    return response.data.data;
});

export const createSegment = createAsyncThunk(
    "segments/create",
    async (segmentData) => {
        const response = await api.post("/segments", segmentData);

        return response.data.data;
    },
);

const segmentSlice = createSlice({
    name: "segments",

    initialState: {
        segments: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchSegments.fulfilled, (state, action) => {
                state.segments = action.payload;
            })

            .addCase(createSegment.fulfilled, (state, action) => {
                state.segments.unshift(action.payload);
            });
    },
});

export default segmentSlice.reducer;
