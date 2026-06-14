import AgentPlanner from "../components/ai/AgentPlanner";

export default function AIAgent() {
    return (
        <div
            className="
        space-y-6"
        >
            <h1
                className="
            text-3xl
            font-bold"
            >
                AI Agent
            </h1>

            <AgentPlanner />
        </div>
    );
}
