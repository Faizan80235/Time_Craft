import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

const chartBox = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const Title = ({ children }) => (
  <h3 style={{ margin: "0 0 8px 0", color: "#1e293b", fontWeight: "700", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
    {children}
  </h3>
);

const Description = ({ children }) => (
  <p style={{ margin: 0, fontSize: 12, color: "#4b5563", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
    {children}
  </p>
);

// Traffic sources pie chart data
const trafficData = {
  labels: ["Direct", "Organic Search", "Referral", "Social Media", "Email"],
  datasets: [
    {
      data: [35, 40, 15, 7, 3],
      backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"],
      hoverOffset: 30,
    },
  ],
};

// Conversion funnel bar chart data
const funnelData = {
  labels: ["Visitors", "Add to Cart", "Checkout", "Payment", "Purchase"],
  datasets: [
    {
      label: "Users",
      data: [1500, 900, 600, 450, 300],
      backgroundColor: "#6366F1",
      borderRadius: 6,
    },
  ],
};

const funnelOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Conversion Funnel",
      color: "#1e293b",
      font: { size: 16, weight: "700" },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: "#4b5563", font: { size: 12, weight: "600" } },
      grid: { color: "#e5e7eb" },
    },
    x: {
      ticks: { color: "#4b5563", font: { size: 12, weight: "600" } },
      grid: { display: false },
    },
  },
};

export default function AnalyticsCharts() {
  return (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
      <div style={{ ...chartBox, flex: 1, minWidth: 320 }}>
        <Title>Traffic Sources</Title>
        <Description>Where your visitors are coming from.</Description>
        <div style={{ flexGrow: 1 }}>
          <Pie data={trafficData} />
        </div>
      </div>

      <div style={{ ...chartBox, flex: 1, minWidth: 320 }}>
        <Bar data={funnelData} options={funnelOptions} />
      </div>
    </div>
  );
}
