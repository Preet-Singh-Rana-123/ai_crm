import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchDashboardStats } from "../redux/dashboardSlice";

import { fetchOverviewAnalytics } from "../redux/analyticsSlice";

import OverviewCards from "../components/dashboard/OverviewCards";

import CampaignFunnel from "../components/dashboard/CampaignFunnel";

export default function Dashboard() {
    const dispatch = useDispatch();

    const { stats } = useSelector((state) => state.dashboard);

    const { analytics } = useSelector((state) => state.analytics);

    useEffect(() => {
        dispatch(fetchDashboardStats());

        dispatch(fetchOverviewAnalytics());
    }, []);

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
                Dashboard
            </h1>

            <OverviewCards stats={stats} />

            <CampaignFunnel analytics={analytics} />
        </div>
    );
}
