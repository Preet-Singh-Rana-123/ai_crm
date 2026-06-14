export default function AnalyticsCards({ analytics }) {
    const deliveryRate = analytics.sent
        ? ((analytics.delivered / analytics.sent) * 100).toFixed(1)
        : 0;

    const openRate = analytics.delivered
        ? ((analytics.opened / analytics.delivered) * 100).toFixed(1)
        : 0;

    const ctr = analytics.opened
        ? ((analytics.clicked / analytics.opened) * 100).toFixed(1)
        : 0;

    const cards = [
        {
            title: "Sent",
            value: analytics.sent || 0,
        },

        {
            title: "Delivered",
            value: analytics.delivered || 0,
        },

        {
            title: "Opened",
            value: analytics.opened || 0,
        },

        {
            title: "Clicked",
            value: analytics.clicked || 0,
        },

        {
            title: "Delivery Rate",

            value: deliveryRate + "%",
        },

        {
            title: "Open Rate",

            value: openRate + "%",
        },

        {
            title: "CTR",

            value: ctr + "%",
        },
    ];

    return (
        <div
            className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            "
        >
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="
                        bg-white
                        border
                        rounded-xl
                        p-5
                        "
                >
                    <h3
                        className="
                            text-gray-500
                            "
                    >
                        {card.title}
                    </h3>

                    <p
                        className="
                            text-2xl
                            font-bold
                            mt-2
                            "
                    >
                        {card.value}
                    </p>
                </div>
            ))}
        </div>
    );
}
