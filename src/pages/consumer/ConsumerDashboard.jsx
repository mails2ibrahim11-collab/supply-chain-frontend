import { useState } from "react";
import { FaSearch, FaSeedling, FaBoxOpen, FaTruck, FaStoreAlt } from "react-icons/fa";

function ConsumerDashboard() {
  const [batchId, setBatchId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleTrace = () => {
    if (!batchId) {
      setError("Please enter a Batch ID.");
      setResult(null);
      return;
    }

    const mockBatch = {
      batchId: batchId,
      cropType: "Tomato",
      quantity: "500 kg",
      farmer: "John Farm",
      status: "In Transit",
      timestamp: "2026-04-01 08:30 AM",
      journey: [
        { step: "Harvested", location: "Farm A", date: "2026-04-01", icon: "seed", done: true },
        { step: "Packed", location: "Warehouse B", date: "2026-04-02", icon: "box", done: true },
        { step: "Shipped", location: "Distribution Center", date: "2026-04-03", icon: "truck", done: true },
        { step: "At Retailer", location: "Pending", date: "—", icon: "store", done: false },
      ],
    };

    setError("");
    setResult(mockBatch);
  };

  const iconMap = {
    seed: <FaSeedling />,
    box: <FaBoxOpen />,
    truck: <FaTruck />,
    store: <FaStoreAlt />,
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f1f0f 0%, #1a3a2a 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "40px 20px",
      color: "#fff"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", color: "#7ec850", margin: 0 }}>🔍 Trace Your Produce</h1>
        <p style={{ color: "#a0b890", marginTop: "8px" }}>
          Enter a Batch ID to see the full journey of your food
        </p>
      </div>

      {/* Search Box */}
      <div style={{
        maxWidth: "500px",
        margin: "0 auto 40px",
        display: "flex",
        gap: "10px"
      }}>
        <div style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.07)",
          borderRadius: "12px",
          padding: "12px 16px",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <FaSearch style={{ color: "#7ec850", marginRight: "10px" }} />
          <input
            type="text"
            placeholder="e.g. BATCH001"
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              width: "100%",
              fontSize: "15px"
            }}
          />
        </div>
        <button
          onClick={handleTrace}
          style={{
            padding: "12px 24px",
            background: "linear-gradient(135deg, #5a9e2f, #7ec850)",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer"
          }}
        >
          Trace
        </button>
      </div>

      {error && (
        <p style={{ color: "#ff6b6b", textAlign: "center" }}>{error}</p>
      )}

      {/* Results */}
      {result && (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>

          {/* Batch Info Card */}
          <div style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: "16px",