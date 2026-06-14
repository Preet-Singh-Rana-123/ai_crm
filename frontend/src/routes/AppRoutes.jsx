import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Orders from "../pages/Orders";
import Segments from "../pages/Segments";
import Campaigns from "../pages/Campaigns";
import Analytics from "../pages/Analytics";
import AIAssistant from "../pages/AIAssistant";
import AIAgent from "../pages/AIAgent";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />

                <Route path="/customers" element={<Customers />} />

                <Route path="/orders" element={<Orders />} />

                <Route path="/segments" element={<Segments />} />

                <Route path="/campaigns" element={<Campaigns />} />

                <Route path="/analytics" element={<Analytics />} />

                <Route path="/ai-assistant" element={<AIAssistant />} />

                <Route path="/ai-agent" element={<AIAgent />} />
            </Route>
        </Routes>
    );
}
