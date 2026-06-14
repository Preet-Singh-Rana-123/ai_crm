import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../api/axios";

export const fetchOverviewAnalytics = createAsyncThunk(
    "analytics/fetchOverview",

    async () => {
        const response = await api.get("/analytics/overview");

        return response.data;
    },
);

const analyticsSlice = createSlice({
    name: "analytics",

    initialState: {
        analytics: {},
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchOverviewAnalytics.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchOverviewAnalytics.fulfilled, (state, action) => {
                state.loading = false;

                state.analytics = action.payload;
            });
    },
});

export default analyticsSlice.reducer;
