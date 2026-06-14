import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    Layers,
    Megaphone,
    BarChart3,
    Bot,
    Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Customers",
        path: "/customers",
        icon: Users,
    },
    {
        name: "Orders",
        path: "/orders",
        icon: ShoppingCart,
    },
    {
        name: "Segments",
        path: "/segments",
        icon: Layers,
    },
    {
        name: "Campaigns",
        path: "/campaigns",
        icon: Megaphone,
    },
    {
        name: "Analytics",
        path: "/analytics",
        icon: BarChart3,
    },
    {
        name: "AI Assistant",
        path: "/ai-assistant",
        icon: Bot,
    },
    {
        name: "AI Agent",
        path: "/ai-agent",
        icon: Sparkles,
    },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r h-screen p-4">
            <h1 className="text-2xl font-bold mb-8">SmartReach</h1>

            <nav className="space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;

                    return (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-lg transition ${
                                    isActive
                                        ? "bg-blue-500 text-white"
                                        : "hover:bg-gray-100"
                                }`
                            }
                        >
                            <Icon size={18} />

                            {link.name}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}
