import { useState } from "react";

export default function SegmentForm({ onSubmit }) {
    const [name, setName] = useState("");

    const [field, setField] = useState("totalSpent");

    const [operator, setOperator] = useState(">");

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            name,

            rules: {
                conditions: [
                    {
                        field,
                        operator,
                        value: Number(value),
                    },
                ],
            },
        });

        setName("");
        setValue("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
            bg-white
            p-6
            rounded-xl
            border
            "
        >
            <h2
                className="
                text-xl
                font-semibold
                mb-4
                "
            >
                Create Segment
            </h2>

            <input
                placeholder="Segment Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                w-full
                border
                p-3
                rounded-lg
                mb-3
                "
            />

            <select
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="
                w-full
                border
                p-3
                rounded-lg
                mb-3
                "
            >
                <option value="totalSpent">Total Spent</option>

                <option value="orderCount">Order Count</option>
            </select>

            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Value"
                className="
                w-full
                border
                p-3
                rounded-lg
                mb-3
                "
            />

            <button
                className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                "
            >
                Create
            </button>
        </form>
    );
}
