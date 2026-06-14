export default function CustomerRow({ customer }) {
    return (
        <tr
            className="
            border-b
            hover:bg-gray-50
            "
        >
            <td className="p-4">{customer.name}</td>

            <td className="p-4">{customer.email}</td>

            <td className="p-4">{customer.city}</td>

            <td className="p-4">{customer.orderCount}</td>

            <td className="p-4">₹{customer.totalSpent.toLocaleString()}</td>

            <td className="p-4">
                <div className="flex gap-2">
                    {customer.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="
                                px-2
                                py-1
                                text-xs
                                rounded-full
                                bg-blue-100
                                "
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </td>
        </tr>
    );
}
