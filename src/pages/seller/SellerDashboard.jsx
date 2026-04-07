import { useState } from "react";
import { FaExchangeAlt, FaBoxOpen, FaUserAlt, FaTags } from "react-icons/fa";

function SellerDashboard() {
  const [batchId, setBatchId] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const [status, setStatus] = useState("In Transit");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleTransfer = () => {
    if (!batchId || !newOwner) {
      setError("Please fill in all fields.");
      setMessage("");
      return;
    }
    // Will be replaced with real API call later
    console.log("Transfer:", { batchId, newOwner, status });
    setError("");
    setMessage(`Batch ${batchId} successfully transferred to ${newOwner}!`);
    setBatchId("");
    setNewOwner("");
    setStatus("In Transit");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #2d2b3d 50%, #1a2e1a 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "40px 20px",
      color: "#fff"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <FaExchangeAlt style={{ fontSize: "40px", color: "#a78bfa" }} />
        <h1 style={{ fontSize: "30px", color: "#a78bfa", margin: "10px 0 4px" }}>
          Seller Dashboard
        </h1>
        <p style={{ color: "#9a9ab0", margin: 0 }}>
          Record and manage batch transfers
        </p>
      </div>

      {/* Transfer Form */}
      <div style={{
        maxWidth: "480px",
        margin: "0 auto",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "20px",
        padding: "36px",
        border: "1px solid rgba(167,139,250,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
      }}>
        <h2 style={{ color: "#a78bfa", marginTop: 0, marginBottom: "24px" }}>
          Transfer a Batch
        </h2>

        {/* Batch ID */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ color: "#9a9ab0", fontSize: "13px", display: "block", marginBottom: "6px" }}>
            Tracking ID (Batch ID)
          </label>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.07)",
            borderRadius: "10px",
            padding: "10px 14px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <FaBoxOpen style={{ color: "#a78bfa", marginRight: "10px" }} />
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
                fontSize: "14px"
              }}
            />
          </div>
        </div>

        {/* New Owner */}
        <div style={{ marginBottom: "18px" }}>
          <label style={{ color: "#9a9ab0", fontSize: "13px", display: "block", marginBottom: "6px" }}>
            Current Custodian (New Owner)
          </label>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.07)",
            borderRadius: "10px",
            padding: "10px 14px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <FaUserAlt style={{ color: "#a78bfa", marginRight: "10px" }} />
            <input
              type="text"
              placeholder="e.g. Retailer address or name"
              value={newOwner}
              onChange={(e) => setNewOwner(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                width: "100%",
                fontSize: "14px"
              }}
            />
          </div>
        </div>

        {/* Status */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{ color: "#9a9ab0", fontSize: "13px", display: "block", marginBottom: "6px" }}>
            Live Status
          </label>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.07)",
            borderRadius: "10px",
            padding: "10px 14px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <FaTags style={{ color: "#a78bfa", marginRight: "10px" }} />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                width: "100%",
                fontSize: "14px"
              }}
            >
              <option value="In Transit" style={{ background: "#2d2b3d" }}>In Transit</option>
              <option value="Delivered" style={{ background: "#2d2b3d" }}>Delivered</option>
              <option value="At Warehouse" style={{ background: "#2d2b3d" }}>At Warehouse</option>
              <option value="At Retailer" style={{ background: "#2d2b3d" }}>At Retailer</option>
            </select>
          </div>
        </div>

        {error && <p style={{ color: "#ff6b6b", fontSize: "13px", marginBottom: "16px" }}>{error}</p>}
        {message && <p style={{ color: "#7ec850", fontSize: "13px", marginBottom: "16px" }}>{message}</p>}

        <button
          onClick={handleTransfer}
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
            border: "none",
            borderRadius: "10px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Record Transfer
        </button>
      </div>
    </div>
  );
}

export default SellerDashboard;