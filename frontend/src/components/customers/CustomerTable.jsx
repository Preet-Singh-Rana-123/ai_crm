import CustomerRow from "./CustomerRow";

export default function CustomerTable({ customers }) {
    return (
        <div
            className="
            bg-white
            rounded-xl
            shadow-sm
            border
            overflow-hidden
            "
        >
            <table className="w-full">
                <thead>
                    <tr
                        className="
                        bg-gray-100
                        text-left
                        "
                    >
                        <th className="p-4">Name</th>

                        <th className="p-4">Email</th>

                        <th className="p-4">City</th>

                        <th className="p-4">Orders</th>

                        <th className="p-4">Total Spent</th>

                        <th className="p-4">Tags</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((customer) => (
                        <CustomerRow key={customer._id} customer={customer} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
