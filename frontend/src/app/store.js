import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "../redux/dashboardSlice";

import customerReducer from "../redux/customerSlice";

import analyticsReducer from "../redux/analyticsSlice";

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,

        customers: customerReducer,

        analytics: analyticsReducer,
    },
});
