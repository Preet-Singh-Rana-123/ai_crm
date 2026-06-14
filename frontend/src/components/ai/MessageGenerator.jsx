import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { generateMessage } from "../../redux/aiSlice";

export default function MessageGenerator() {
    const dispatch = useDispatch();

    const [goal, setGoal] = useState("");

    const result = useSelector((state) => state.ai.messageResult);

    return (
        <div
            className="
        bg-white
        border
        rounded-xl
        p-6"
        >
            <h2
                className="
            text-xl
            font-semibold
            mb-4"
            >
                AI Message Generator
            </h2>

            <textarea
                rows="3"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="
                w-full
                border
                rounded-lg
                p-3"
                placeholder="
Re-engage inactive coffee buyers"
            />

            <button
                onClick={() => dispatch(generateMessage(goal))}
                className="
                mt-4
                bg-green-600
                text-white
                px-4
                py-2
                rounded-lg"
            >
                Generate
            </button>

            {result && (
                <div
                    className="
                    mt-4
                    p-4
                    bg-gray-100
                    rounded-lg"
                >
                    {result}
                </div>
            )}
        </div>
    );
}
