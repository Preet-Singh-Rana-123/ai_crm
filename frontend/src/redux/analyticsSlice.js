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
        error: null,
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
            })

            .addCase(fetchOverviewAnalytics.rejected, (state, action) => {
                state.loading = false;

                state.error = action.error.message;
            });
    },
});

export default analyticsSlice.reducer;
