import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../api/axios";

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",

    async () => {
        const response = await api.get("/orders");

        return response.data.data;
    },
);

const orderSlice = createSlice({
    name: "orders",

    initialState: {
        orders: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;

                state.orders = action.payload;
            })

            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;

                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;
