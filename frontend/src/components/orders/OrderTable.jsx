export default function OrderTable({ orders }) {
    return (
        <div
            className="
            bg-white
            border
            rounded-xl
            overflow-hidden
            "
        >
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-4">Customer</th>

                        <th className="p-4">City</th>

                        <th className="p-4">Amount</th>

                        <th className="p-4">Products</th>

                        <th className="p-4">Date</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr
                            key={order._id}
                            className="
                                border-b
                                hover:bg-gray-50
                                "
                        >
                            <td className="p-4">{order.customerId?.name}</td>

                            <td className="p-4">{order.customerId?.city}</td>

                            <td className="p-4">
                                ₹{order.amount.toLocaleString()}
                            </td>

                            <td className="p-4">{order.products.join(", ")}</td>

                            <td className="p-4">
                                {new Date(order.orderDate).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
