import SegmentGenerator from "../components/ai/SegmentGenerator";

import MessageGenerator from "../components/ai/MessageGenerator";

import InsightsGenerator from "../components/ai/InsightsGenerator";

export default function AIAssistant() {
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
                AI Assistant
            </h1>

            <SegmentGenerator />

            <MessageGenerator />

            <InsightsGenerator />
        </div>
    );
}
