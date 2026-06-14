import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { generateAgentPlan } from "../../redux/aiSlice";

export default function AgentPlanner() {
    const dispatch = useDispatch();

    const [goal, setGoal] = useState("");

    const plan = useSelector((state) => state.ai.agentPlan);

    const handleGenerate = () => {
        dispatch(generateAgentPlan(goal));
    };

    return (
        <div
            className="
        bg-white
        rounded-xl
        border
        p-6"
        >
            <h2
                className="
            text-xl
            font-semibold
            mb-4"
            >
                AI Campaign Agent
            </h2>

            <textarea
                rows="5"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="
Bring back inactive users with a discount campaign"
                className="
                w-full
                border
                rounded-lg
                p-3"
            />

            <button
                onClick={handleGenerate}
                className="
                mt-4
                bg-blue-600
                text-white
                px-5
                py-2
                rounded-lg"
            >
                Generate Plan
            </button>

            {plan && (
                <div
                    className="
                    mt-6
                    space-y-4"
                >
                    <div
                        className="
                        bg-gray-50
                        p-4
                        rounded-lg"
                    >
                        <h3
                            className="
                            font-semibold"
                        >
                            Campaign Name
                        </h3>

                        <p>{plan.campaignName}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold">Audience Size</h3>

                        <p>{plan.audienceSize}</p>
                    </div>

                    <div
                        className="
                        bg-gray-50
                        p-4
                        rounded-lg"
                    >
                        <h3
                            className="
                            font-semibold"
                        >
                            Channel
                        </h3>

                        <p>{plan.channel}</p>
                    </div>

                    <div
                        className="
                        bg-gray-50
                        p-4
                        rounded-lg"
                    >
                        <h3
                            className="
                            font-semibold"
                        >
                            Message
                        </h3>

                        <p>{plan.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
