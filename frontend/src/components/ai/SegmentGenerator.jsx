import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { generateSegment } from "../../redux/aiSlice";

export default function SegmentGenerator() {
    const dispatch = useDispatch();

    const [prompt, setPrompt] = useState("");

    const result = useSelector((state) => state.ai.segmentResult);

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
                AI Segment Generator
            </h2>

            <textarea
                rows="4"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="
                w-full
                border
                rounded-lg
                p-3"
                placeholder="
Find customers who spent more than ₹5000"
            />

            <button
                onClick={() => dispatch(generateSegment(prompt))}
                className="
                mt-4
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg"
            >
                Generate
            </button>

            {result && (
                <pre
                    className="
                    mt-4
                    bg-gray-100
                    p-4
                    rounded-lg
                    overflow-auto"
                >
                    {result}
                </pre>
            )}
        </div>
    );
}
