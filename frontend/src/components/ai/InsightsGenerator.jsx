import { useDispatch, useSelector } from "react-redux";

import { generateInsights } from "../../redux/aiSlice";

export default function InsightsGenerator() {
    const dispatch = useDispatch();

    const analytics = useSelector((state) => state.analytics.analytics);

    const result = useSelector((state) => state.ai.insightsResult);

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
                AI Insights
            </h2>

            <button
                onClick={() => dispatch(generateInsights(analytics))}
                className="
                bg-purple-600
                text-white
                px-4
                py-2
                rounded-lg"
            >
                Generate Insights
            </button>

            {result && (
                <div
                    className="
                    mt-4
                    bg-gray-100
                    p-4
                    rounded-lg"
                >
                    {result}
                </div>
            )}
        </div>
    );
}
