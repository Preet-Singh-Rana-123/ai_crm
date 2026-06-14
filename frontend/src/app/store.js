import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "../redux/dashboardSlice";

import customerReducer from "../redux/customerSlice";

import analyticsReducer from "../redux/analyticsSlice";

import campaignReducer from "../redux/campaignSlice";

import segmentReducer from "../redux/segmentSlice";

import orderReducer from "../redux/orderSlice";

import aiReducer from "../redux/aiSlice";

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,

        customers: customerReducer,

        analytics: analyticsReducer,

        campaigns: campaignReducer,

        segments: segmentReducer,

        orders: orderReducer,

        ai: aiReducer,
    },
});
