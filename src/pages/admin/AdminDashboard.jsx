import { useState } from "react";
import { FaShieldAlt, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const mockBatches = [
  { batchId: "BATCH001", description: "Fresh Tomatoes", owner: "0xABC123", status: "Delivered", timestamp: "2026-04-01" },
  { batchId: "BATCH002", description: "Cherry Tomatoes", owner: "0xDEF456", status: "In Transit", timestamp: "2026-04-02" },
  { batchId: "BATCH003", description: "Roma Tomatoes", owner: "0xGHI789", status: "At Warehouse", timestamp: "2026-04-03" },
  { batchId: "BATCH004", description: "Heirloom Tomatoes", owner: "0xJKL012", status: "Delivered", timestamp: "2026-04-04" },
  { batchId: "BATCH005", description: "Vine Tomatoes", owner: "0xMNO345", status: "At Retailer", timestamp: "2026-04-05" },
];

const statusColors = {
  "Delivered": "#7ec850",
  "In Transit": "#f59e0b",
  "At Warehouse": "#60a5fa",
  "At Retailer": "#a78bfa",
};

const statusIcons = {
  "Delivered": <FaCheckCircle />,
  "In Transit": <FaClock />,
  "At Warehouse": <FaClock />,
  "At Retailer": <FaTimesCircle />,
};

function AdminDashboard() {
  const [search, setSearch] = useState("");

  const filtered = mockBatches.filter(
    (b) =>
      b.batchId.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase()) ||
      b.status.toLowerCase().includes(search.toLowerCase())
  );

  const total = mockBatches.length;
  const delivered = mockBatches.filter((b) => b.status === "Delivered").length;
  const inTransit = mockBatches.filter((b) => b.status === "In Transit").length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "40px 20px",
      color: "#fff"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <FaShieldAlt style={{ fontSize: "40px", color: "#60a5fa" }} />
        <h1 style={{ fontSize: "30px", color: "#60a5fa", margin: "10px 0 4px" }}>
          Admin Dashboard
        </h1>
        <p style={{ color: "#94a3b8", margin: 0 }}>
          Monitor and oversee all supply chain operations
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        maxWidth: "700px",
        margin: "0 auto 40px"
      }}>
        {[
          { label: "Total Batches", value: total, color: "#60a5fa" },
          { label: "Delivered", value: delivered, color: "#7ec850" },
          { label: "In Transit", value: inTransit, color: "#f59e0b" },
        ].map((stat, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "14px",
            padding: "20px",
            textAlign: "center",
            border: `1px solid ${stat.color}33`
          }}>
            <p style={{ fontSize: "32px", fontWeight: "bold", color: stat.color, margin: 0 }}>
              {stat.value}
            </p>
            <p style={{ color: "#94a3b8", fontSize: "13px", margin: "4px 0 0" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ maxWidth: "700px", margin: "0 auto 24px" }}>
        <input
          type="text"
          placeholder="Search by Batch ID, description or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box"
          }}
        />
      </div>

      {/* Batch Table */}
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {filtered.map((batch, index) => (
          <div key={index} style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "18px 20px",
            marginBottom: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            <div>
              <p style={{ margin: "0 0 4px", fontWeight: "bold", color: "#fff" }}>
                {batch.batchId}
              </p>
              <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#94a3b8" }}>
                {batch.description}
              </p>
              <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
                Owner: {batch.owner} · {batch.timestamp}
              </p>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: statusColors[batch.status] || "#fff",
              fontWeight: "bold",
              fontSize: "13px"
            }}>
              {statusIcons[batch.status]}
              {batch.status}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#64748b" }}>No batches found.</p>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;