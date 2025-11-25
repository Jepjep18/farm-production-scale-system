// src/pages/Dashboard.tsx
import React from "react";
import StatCard from "../components/dashboard/StatCard";
// import RecentActivity from "../components/dashboard/RecentActivity";
// import QuickActions from "../components/dashboard/QuickActions";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import { Sprout, Tractor, Users, DollarSign } from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Total Farms",
      value: "24",
      change: "+2 this month",
      icon: Tractor,
      color: "text-green-500",
    },
    {
      title: "Active Crops",
      value: "156",
      change: "+12 this week",
      icon: Sprout,
      color: "text-blue-500",
    },
    {
      title: "Farm Workers",
      value: "48",
      change: "+3 this month",
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "Revenue",
      value: "₱2.4M",
      change: "+15% from last month",
      icon: DollarSign,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="w-full h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your farms today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Takes 2/3 width */}
        {/* <div className="lg:col-span-2 space-y-6">
          <RecentActivity />
        </div> */}

        {/* Right Column - Takes 1/3 width */}
        {/* <div className="space-y-6">
          <WeatherWidget />
          <QuickActions />
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;