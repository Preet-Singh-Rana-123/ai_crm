import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchCampaigns, createCampaign } from "../redux/campaignSlice";

import CampaignForm from "../components/campaigns/CampaignForm";

import CampaignCard from "../components/campaigns/CampaignCard";

export default function Campaigns() {
    const dispatch = useDispatch();

    const campaigns = useSelector((state) => state.campaigns.campaigns);

    const segments = useSelector((state) => state.segments?.segments || []);

    useEffect(() => {
        dispatch(fetchCampaigns());
    }, []);

    const handleCreate = (data) => {
        dispatch(createCampaign(data));
    };

    const launchCampaign = async (id) => {
        await fetch(
            `http://localhost:5000/api/campaigns/${id}/send`,

            {
                method: "POST",
            },
        );

        dispatch(fetchCampaigns());
    };

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
                Campaigns
            </h1>

            <CampaignForm segments={segments} onSubmit={handleCreate} />

            <div
                className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-4"
            >
                {campaigns.map((campaign) => (
                    <CampaignCard
                        key={campaign._id}
                        campaign={campaign}
                        onLaunch={launchCampaign}
                    />
                ))}
            </div>
        </div>
    );
}
