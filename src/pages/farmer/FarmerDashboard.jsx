import { useState } from "react";
import { FaSeedling, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function FarmerDashboard() {

  const [batchId, setBatchId] = useState("");
  const [productName, setProductName] = useState("");
  const [weight, setWeight] = useState("");

  const [qrData, setQrData] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const farmerName = "Farmer"; // can later be dynamic

  const handleRegister = () => {

    if (!batchId || !productName || !weight) {
      setMessage("⚠️ Please fill all fields.");
      return;
    }

    /* STRUCTURED QR DATA */

    const qrPayload = {
      app: "AgriChain",
      batchId: batchId,
      product: productName,
      farmer: farmerName,
      weight: weight
    };

    const formattedQR = JSON.stringify(qrPayload);

    setQrData(formattedQR);

    setMessage("✅ Batch registered successfully!");

    setBatchId("");
    setProductName("");
    setWeight("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  const downloadQR = () => {

    const canvas = document.getElementById("batchQR");

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");

    downloadLink.href = pngUrl;
    downloadLink.download = `AgriChain_${Date.now()}_QR.png`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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

        <span style={{ color: "#a0b890", fontSize: "14px" }}>
          🌾 Farmer Portal
        </span>

        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#a0b890",
            padding: "6px 14px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Main */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px"
      }}>

        <div style={{
          background: "rgba(255,255,255,0.07)",
          borderRadius: "20px",
          padding: "40px",
          maxWidth: "500px",
          width: "100%"
        }}>

          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <FaClipboardList style={{ fontSize: "40px", color: "#7ec850" }} />

            <h1 style={{ margin: "12px 0 6px", fontSize: "24px" }}>
              Register a New Batch
            </h1>

            <p style={{ color: "#a0b890", fontSize: "14px", margin: 0 }}>
              Record your harvested crop batch
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Batch Number"
              value={batchId}
              onChange={(e) => setBatchId(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "14px",
                borderRadius: "10px",
                border: "none"
              }}
            />

            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "14px",
                borderRadius: "10px",
                border: "none"
              }}
            />

            <input
              type="text"
              placeholder="Product Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "16px",
                borderRadius: "10px",
                border: "none"
              }}
            />

            {message && (
              <p style={{ marginBottom: "16px", color: "#7ec850" }}>
                {message}
              </p>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #5a9e2f, #7ec850)",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Register Batch
            </button>

          </form>

          {qrData && (
            <div style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px"
            }}>

              <h3>Batch QR Code</h3>

              <div style={{
                background: "#fff",
                padding: "12px",
                borderRadius: "12px"
              }}>
                <QRCodeCanvas
                  id="batchQR"
                  value={qrData}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </div>

              <button
                onClick={downloadQR}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#7ec850",
                  color: "#1a2e1a",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Download QR
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;