import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function CampaignFunnelChart({ analytics }) {
    const data = [
        {
            name: "Sent",
            value: analytics.sent || 0,
        },

        {
            name: "Delivered",
            value: analytics.delivered || 0,
        },

        {
            name: "Opened",
            value: analytics.opened || 0,
        },

        {
            name: "Clicked",
            value: analytics.clicked || 0,
        },
    ];

    return (
        <div
            className="
            bg-white
            border
            rounded-xl
            p-6
            "
        >
            <h2
                className="
                text-xl
                font-semibold
                mb-4
                "
            >
                Campaign Funnel
            </h2>

            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar dataKey="value" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
