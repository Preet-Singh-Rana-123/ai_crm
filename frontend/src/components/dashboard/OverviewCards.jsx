import StatCard from "./StatCard";

export default function OverviewCards({ stats }) {
    return (
        <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-5
            "
        >
            <StatCard title="Customers" value={stats.totalCustomers || 0} />

            <StatCard title="Orders" value={stats.totalOrders || 0} />

            <StatCard
                title="Revenue"
                value={`₹${(stats.totalRevenue || 0).toLocaleString()}`}
            />

            <StatCard title="Campaigns" value={stats.totalCampaigns || 0} />
        </div>
    );
}
