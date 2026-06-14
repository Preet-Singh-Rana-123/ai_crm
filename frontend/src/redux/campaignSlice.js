import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../api/axios";

export const fetchCampaigns = createAsyncThunk(
    "campaigns/fetchAll",

    async () => {
        const response = await api.get("/campaigns");

        return response.data.data;
    },
);

export const createCampaign = createAsyncThunk(
    "campaigns/create",

    async (campaignData) => {
        const response = await api.post("/campaigns", campaignData);

        return response.data.data;
    },
);

const campaignSlice = createSlice({
    name: "campaigns",

    initialState: {
        campaigns: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchCampaigns.fulfilled, (state, action) => {
                state.campaigns = action.payload;
            })

            .addCase(createCampaign.fulfilled, (state, action) => {
                state.campaigns.unshift(action.payload);
            });
    },
});

export default campaignSlice.reducer;
