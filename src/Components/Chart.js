import React from "react";
import { Line, Bar, Doughnut, PolarArea } from "react-chartjs-2";
import "chart.js/auto";

// ==== Shared Styles ====
const chartBox = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  height: 280,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const statBox = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const miniOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, title: { display: false } },
  scales: { x: { display: false }, y: { display: false } },
};

// ==== Sample Data ====
const createTrend = (color) => ({
  labels: Array(7).fill(""),
  datasets: [
    {
      data: [100, 150, 130, 170, 160, 190, 200],
      borderColor: color,
      backgroundColor: `${color}33`,
      fill: true,
      tension: 0.3,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
  ],
});

const donutData = {
  labels: ["Active Users", "Inactive Users"],
  datasets: [{ data: [78, 22], backgroundColor: ["#3B82F6", "#E5E7EB"] }],
};

const trafficPieData = {
  labels: ["Organic", "Referral", "Other"],
  datasets: [
    {
      data: [64.45, 23.5, 12.05],
      backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
    },
  ],
};

const polarData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      data: [11, 16, 7, 14, 9],
      backgroundColor: ["#F87171", "#60A5FA", "#FBBF24", "#34D399", "#A78BFA"],
    },
  ],
};

const barData = {
  labels: ["Electronics", "Clothing", "Home", "Beauty", "Toys"],
  datasets: [
    {
      data: [1200, 900, 750, 600, 450],
      backgroundColor: ["#6366F1", "#60A5FA", "#34D399", "#FBBF24", "#F472B6"],
      borderRadius: 8,
    },
  ],
};

const stats = [
  { label: "Views", value: "0", color: "#EF4444" },
  { label: "Bounce Rate", value: "0%", color: "#FACC15" },
  { label: "Awareness", value: "0", color: "#22C55E" },
  { label: "Growth Rate", value: "0", color: "#3B82F6" },
];

// ==== UI Components ====
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

// ==== Main Component ====
export default function DashboardCharts() {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
        {stats.map((s, idx) => (
          <div key={idx} style={{ ...statBox, borderTop: `5px solid ${s.color}` }}>
            <h2 style={{ margin: 0, fontSize: 20, color: "#111827" }}>{s.value}</h2>
            <p style={{ margin: 0, fontSize: 14, color: "#6B7280" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1.5rem", marginTop: "2rem" }}>
        <div style={chartBox}>
          <Title>Sales Trend</Title>
          <Description>Weekly sales performance over the last 7 days.</Description>
          <div style={{ flexGrow: 1 }}>
            <Line data={createTrend("#6366F1")} options={miniOptions} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Customer Growth</Title>
          <Description>New customers joining your platform each week.</Description>
          <div style={{ flexGrow: 1 }}>
            <Line data={createTrend("#10B981")} options={miniOptions} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Sales by Category</Title>
          <Description>Sales distribution across product categories.</Description>
          <div style={{ flexGrow: 1 }}>
            <Bar data={barData} options={miniOptions} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Active Users</Title>
          <Description>Percentage of active vs inactive users.</Description>
          <div style={{ flexGrow: 1 }}>
            <Doughnut data={donutData} options={{ cutout: "70%", plugins: { legend: { display: false } } }} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Revenue Trend</Title>
          <Description>Weekly revenue generated over the last 7 days.</Description>
          <div style={{ flexGrow: 1 }}>
            <Line data={createTrend("#F59E0B")} options={miniOptions} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Orders Trend</Title>
          <Description>Number of orders placed weekly.</Description>
          <div style={{ flexGrow: 1 }}>
            <Line data={createTrend("#EF4444")} options={miniOptions} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Conversion Rate</Title>
          <Description>Conversion percentage across channels.</Description>
          <div style={{ flexGrow: 1 }}>
            <PolarArea data={polarData} options={miniOptions} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Returns & Refunds</Title>
          <Description>Weekly trend of product returns and refunds.</Description>
          <div style={{ flexGrow: 1 }}>
            <Line data={createTrend("#8B5CF6")} options={miniOptions} />
          </div>
        </div>

        <div style={chartBox}>
          <Title>Visit by Traffic Types</Title>
          <Description>Breakdown of site traffic sources.</Description>
          <div style={{ flexGrow: 1 }}>
            <Doughnut data={trafficPieData} options={{ plugins: { legend: { display: true, position: "bottom" } } }} />
          </div>
        </div>

        <div style={{ ...chartBox, gridColumn: "span 2" }}>
          <Title>Customer Satisfaction</Title>
          <Description>Real-time customer feedback scores.</Description>
          <div style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, fontWeight: "bold", color: "#10B981" }}>
            93.13%
          </div>
        </div>
      </div>
    </div>
  );
}
