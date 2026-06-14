import { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchOrders } from "../redux/orderSlice";

import OrderStats from "../components/orders/OrderStats";

import OrderSearch from "../components/orders/OrderSearch";

import OrderTable from "../components/orders/OrderTable";

export default function Orders() {
    const dispatch = useDispatch();

    const { orders, loading } = useSelector((state) => state.orders);

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    const filteredOrders = useMemo(() => {
        return orders.filter((order) =>
            order.customerId?.name.toLowerCase().includes(search.toLowerCase()),
        );
    }, [orders, search]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div
            className="
        space-y-6"
        >
            <h1
                className="
            text-3xl
            font-bold"
            >
                Orders
            </h1>

            <OrderStats orders={filteredOrders} />

            <OrderSearch value={search} onChange={setSearch} />

            <OrderTable orders={filteredOrders} />
        </div>
    );
}
