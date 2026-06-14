import { useEffect, useState, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchCustomers } from "../redux/customerSlice";

import CustomerSearch from "../components/customers/CustomerSearch";

import CustomerFilters from "../components/customers/CustomerFilters";

import CustomerTable from "../components/customers/CustomerTable";

export default function Customers() {
    const dispatch = useDispatch();

    const { customers, loading } = useSelector((state) => state.customers);

    const [search, setSearch] = useState("");

    const [city, setCity] = useState("");

    useEffect(() => {
        dispatch(fetchCustomers());
    }, []);

    const filteredCustomers = useMemo(() => {
        return customers.filter((customer) => {
            const searchMatch = customer.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const cityMatch = city ? customer.city === city : true;

            return searchMatch && cityMatch;
        });
    }, [customers, search, city]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div
            className="
        space-y-5"
        >
            <h1
                className="
            text-3xl
            font-bold"
            >
                Customers
            </h1>

            <CustomerSearch value={search} onChange={setSearch} />

            <CustomerFilters city={city} setCity={setCity} />

            <p className="text-gray-500">
                Showing {filteredCustomers.length} customers
            </p>

            <CustomerTable customers={filteredCustomers} />
        </div>
    );
}
