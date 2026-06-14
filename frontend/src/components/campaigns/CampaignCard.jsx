export default function CampaignCard({ campaign, onLaunch }) {
    return (
        <div
            className="
        bg-white
        p-5
        rounded-xl
        border
        shadow-sm"
        >
            <h3
                className="
            text-lg
            font-semibold"
            >
                {campaign.name}
            </h3>

            <p>Audience: {campaign.audienceSize}</p>

            <p>Channel: {campaign.channel}</p>

            <p>Status: {campaign.status}</p>

            <button
                onClick={() => onLaunch(campaign._id)}
                className="
                mt-3
                bg-green-600
                text-white
                px-4
                py-2
                rounded-lg"
            >
                Launch
            </button>
        </div>
    );
}
