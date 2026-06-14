import { useState } from "react";

export default function CampaignForm({ onSubmit, segments }) {
    const [name, setName] = useState("");

    const [segmentId, setSegmentId] = useState("");

    const [channel, setChannel] = useState("EMAIL");

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            name,
            segmentId,
            channel,
            message,
        });

        setName("");
        setMessage("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
        bg-white
        p-6
        rounded-xl
        border
        shadow-sm
        space-y-4"
        >
            <h2
                className="
            text-xl
            font-semibold"
            >
                Create Campaign
            </h2>

            <input
                type="text"
                placeholder="Campaign Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                w-full
                p-3
                border
                rounded-lg"
            />

            <select
                value={segmentId}
                onChange={(e) => setSegmentId(e.target.value)}
                className="
                w-full
                p-3
                border
                rounded-lg"
            >
                <option value="">Select Segment</option>

                {segments.map((segment) => (
                    <option key={segment._id} value={segment._id}>
                        {segment.name}
                    </option>
                ))}
            </select>

            <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="
                w-full
                p-3
                border
                rounded-lg"
            >
                <option>EMAIL</option>

                <option>SMS</option>

                <option>WHATSAPP</option>

                <option>RCS</option>
            </select>

            <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Campaign Message"
                className="
                w-full
                p-3
                border
                rounded-lg"
            />

            <button
                className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg"
            >
                Create Campaign
            </button>
        </form>
    );
}
