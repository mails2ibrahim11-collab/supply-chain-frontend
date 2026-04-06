import { useState } from "react";
import { FaSeedling, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FarmerDashboard() {
  const [batchId, setBatchId] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!batchId || !description) {
      setMessage("⚠️ Please fill in both fields.");
      return;
    }
    console.log("Registering batch:", { batchId, description });
    setMessage("✅ Batch registered successfully! (mock)");
    setBatchId("");
    setDescription("");
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a1e 50%, #3d2b1f 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#fff"
    }}>
      {/* Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        background: "rgba(0,0,0,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaSeedling style={{ color: "#7ec850", fontSize: "24px" }} />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>AgriChain</span>
        </div>
        <span style={{ color: "#a0b890", fontSize: "14px" }}>🌾 Farmer Portal</span>
        <button onClick={handleLogout} style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#a0b890",
          padding: "6px 14px",
          borderRadius: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px"
        }}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 70px)",
        padding: "40px 20px"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "50px 40px",
          width: "100%",
          maxWidth: "480px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <FaClipboardList style={{ fontSize: "40px", color: "#7ec850" }} />
            <h1 style={{ margin: "12px 0 6px", fontSize: "24px" }}>Register a New Batch</h1>
            <p style={{ color: "#a0b890", fontSize: "14px", margin: 0 }}>
              Record your harvested crop batch on the blockchain
            </p>
          </div>

          {/* Batch ID */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ color: "#a0b890", fontSize: "13px", display: "block", marginBottom: "6px" }}>
              Batch ID
            </label>
            <input
              type="text"
              placeholder="e.g. BATCH001"
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box"
              }}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ color: "#a0b890", fontSize: "13px", display: "block", marginBottom: "6px" }}>
              Description
            </label>
            <textarea
              placeholder="e.g. 500kg of fresh tomatoes from Farm A"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
                resize: "none",
                boxSizing: "border-box"
              }}
            />
          </div>

          {/* Message */}
          {message && (
            <p style={{
              textAlign: "center",
              fontSize: "14px",
              marginBottom: "16px",
              color: message.startsWith("✅") ? "#7ec850" : "#ff6b6b"
            }}>
              {message}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleRegister}
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(135deg, #5a9e2f, #7ec850)",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: "0.5px"
            }}
          >
            🌱 Register Batch
          </button>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;