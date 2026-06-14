import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../api/axios";

export const generateAgentPlan = createAsyncThunk(
    "ai/generateAgentPlan",
    async (goal) => {
        const response = await api.post("/ai/agent-plan", { goal });

        return {
            ...response.data.plan,
            audienceSize: response.data.audienceSize,
        };
    },
);

export const generateSegment = createAsyncThunk(
    "ai/generateSegment",

    async (prompt) => {
        const response = await api.post("/ai/segment", { prompt });

        return response.data.data;
    },
);

export const generateMessage = createAsyncThunk(
    "ai/generateMessage",

    async (campaignGoal) => {
        const response = await api.post("/ai/message", { campaignGoal });

        return response.data.message;
    },
);

export const generateInsights = createAsyncThunk(
    "ai/generateInsights",

    async (stats) => {
        const response = await api.post("/ai/insights", stats);

        return response.data.insights;
    },
);

const aiSlice = createSlice({
    name: "ai",

    initialState: {
        segmentResult: "",

        messageResult: "",

        insightsResult: "",

        agentPlan: null,

        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(generateSegment.pending, (state) => {
                state.loading = true;
            })

            .addCase(generateSegment.fulfilled, (state, action) => {
                state.loading = false;

                state.segmentResult = action.payload;
            })

            .addCase(generateMessage.fulfilled, (state, action) => {
                state.messageResult = action.payload;
            })

            .addCase(generateInsights.fulfilled, (state, action) => {
                state.insightsResult = action.payload;
            })
            .addCase(generateAgentPlan.fulfilled, (state, action) => {
                state.agentPlan = action.payload;
            });
    },
});

export default aiSlice.reducer;
