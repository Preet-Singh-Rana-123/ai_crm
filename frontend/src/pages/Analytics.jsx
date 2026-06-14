import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchOverviewAnalytics } from "../redux/analyticsSlice";

import { fetchCampaigns } from "../redux/campaignSlice";

import AnalyticsCards from "../components/analytics/AnalyticsCards";

import CampaignFunnelChart from "../components/analytics/CampaignFunnelChart";

import CampaignPerformanceTable from "../components/analytics/CampaignPerformanceTable";

export default function Analytics() {
    const dispatch = useDispatch();

    const { analytics, loading } = useSelector((state) => state.analytics);

    const campaigns = useSelector((state) => state.campaigns.campaigns);

    useEffect(() => {
        dispatch(fetchOverviewAnalytics());

        dispatch(fetchCampaigns());
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

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
                Analytics
            </h1>

            <AnalyticsCards analytics={analytics} />

            <CampaignFunnelChart analytics={analytics} />

            <CampaignPerformanceTable campaigns={campaigns} />
        </div>
    );
}
