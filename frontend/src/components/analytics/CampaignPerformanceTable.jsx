export default function CampaignPerformanceTable({ campaigns }) {
    return (
        <div
            className="
            bg-white
            border
            rounded-xl
            overflow-hidden
            "
        >
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-4">Campaign</th>

                        <th className="p-4">Sent</th>

                        <th className="p-4">Delivered</th>

                        <th className="p-4">Opened</th>

                        <th className="p-4">Clicked</th>
                    </tr>
                </thead>

                <tbody>
                    {campaigns.map((campaign) => (
                        <tr
                            key={campaign._id}
                            className="
                                border-b
                                "
                        >
                            <td className="p-4">{campaign.name}</td>

                            <td className="p-4">{campaign.stats?.sent}</td>

                            <td className="p-4">{campaign.stats?.delivered}</td>

                            <td className="p-4">{campaign.stats?.opened}</td>

                            <td className="p-4">{campaign.stats?.clicked}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
