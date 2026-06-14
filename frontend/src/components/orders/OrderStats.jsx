export default function OrderStats({ orders }) {
    const totalOrders = orders.length;

    const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

    const averageOrderValue = totalOrders
        ? (totalRevenue / totalOrders).toFixed(0)
        : 0;

    return (
        <div
            className="
            grid
            md:grid-cols-3
            gap-4
            "
        >
            <div className="bg-white p-5 rounded-xl border">
                <h3>Total Orders</h3>

                <p className="text-2xl font-bold">{totalOrders}</p>
            </div>

            <div className="bg-white p-5 rounded-xl border">
                <h3>Revenue</h3>

                <p className="text-2xl font-bold">
                    ₹{totalRevenue.toLocaleString()}
                </p>
            </div>

            <div className="bg-white p-5 rounded-xl border">
                <h3>Avg Order Value</h3>

                <p className="text-2xl font-bold">₹{averageOrderValue}</p>
            </div>
        </div>
    );
}
