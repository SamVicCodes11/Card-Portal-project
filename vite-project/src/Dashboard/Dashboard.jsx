import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barData = [
  { name: "May", Personalized: 40, Instant: 20 },
  { name: "Jun", Personalized: 20, Instant: 10 },
  { name: "Jul", Personalized: 50, Instant: 25 },
  { name: "Aug", Personalized: 30, Instant: 15 },
  { name: "Sep", Personalized: 40, Instant: 20 },
  { name: "Oct", Personalized: 80, Instant: 40 },
  { name: "Nov", Personalized: 60, Instant: 30 },
];

const lineData = [
  { name: "Mon", income: 20 },
  { name: "Tue", income: 40 },
  { name: "Wed", income: 60 },
  { name: "Thu", income: 30 },
  { name: "Fri", income: 50 },
  { name: "Sat", income: 20 },
  { name: "Sun", income: 80 },
];

const pieData = [
  { name: "Active", value: 1500, color: "#00C49F" },
  { name: "Expired", value: 400, color: "#FFBB28" },
  { name: "Inactive", value: 300, color: "#8884d8" },
  { name: "Lost", value: 250, color: "#FF8042" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Hi Nazeer, what would you like to do today?</h1>

      <div className="quick-access">
        {[
          "Manage a Card",
          "Issue Instant Card",
          "Issue Personalized Card",
          "Review Card Requests",
        ].map((item) => (
          <button key={item} className="quick-btn">
            {item}
          </button>
        ))}
      </div>

      <div className="analytics">
        {[
          { title: "Total Active Cards", value: "26,478", growth: "+9%" },
          {
            title: "Total Personalized Cards",
            value: "15,703",
            growth: "+8.5%",
          },
          { title: "Today's Revenue", value: "₦9.3M", growth: "+4.6%" },
          { title: "Pending Requests", value: "38", attention: true },
        ].map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.value}</p>
            {card.growth && (
              <span className="growth">{card.growth} this month</span>
            )}
            {card.attention && (
              <span className="attention">Requires attention</span>
            )}
          </div>
        ))}
      </div>

      <div className="charts">
        <div className="chart-card">
          <h3>Monthly Issuance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Personalized" fill="#8884d8" />
              <Bar dataKey="Instant" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>This Week's Income</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#00C49F"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Card Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
