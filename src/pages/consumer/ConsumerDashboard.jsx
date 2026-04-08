import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";
import { FaSearch, FaSeedling, FaBoxOpen, FaTruck, FaStoreAlt, FaSignOutAlt, FaQrcode } from "react-icons/fa";

function ConsumerDashboard() {

  const [batchId, setBatchId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [scanning, setScanning] = useState(false);

  const navigate = useNavigate();

  const handleTrace = (data = null) => {

    const id = data?.batchId || batchId;

    if (!id) {
      setError("Please enter a Batch ID.");
      setResult(null);
      return;
    }

    const mockBatch = {
      batchId: id,
      product: data?.product || "Organic Tomatoes",
      weight: data?.weight || "500 kg",
      farmer: data?.farmer || "John Farm",
      status: "In Transit",
      timestamp: "2026-04-01 08:30 AM",

      journey: [
        {
          step: "Harvested",
          location: "Farm A",
          date: "2026-04-01",
          icon: "seed",
          done: true
        },
        {
          step: "Packed",
          location: "Warehouse B",
          date: "2026-04-02",
          icon: "box",
          done: true
        },
        {
          step: "Shipped",
          location: "Distribution Center",
          date: "2026-04-03",
          icon: "truck",
          done: true
        },
        {
          step: "At Retailer",
          location: "Pending",
          date: "—",
          icon: "store",
          done: false
        }
      ]
    };

    setError("");
    setBatchId(id);
    setResult(mockBatch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrace();
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  const iconMap = {
    seed: <FaSeedling />,
    box: <FaBoxOpen />,
    truck: <FaTruck />,
    store: <FaStoreAlt />
  };

  /* QR SCANNER */

  useEffect(() => {

    if (!scanning) return;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {

        try {

          const parsed = JSON.parse(decodedText);

          if (parsed.app === "AgriChain") {

            handleTrace({
              batchId: parsed.batchId,
              product: parsed.product,
              farmer: parsed.farmer,
              weight: parsed.weight
            });

          } else {
            handleTrace({ batchId: decodedText });
          }

        } catch {

          handleTrace({ batchId: decodedText });

        }

        scanner.clear();
        setScanning(false);

      },
      () => {}
    );

  }, [scanning]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f1f0f 0%, #1a3a2a 100%)",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#fff"
      }}
    >

      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          background: "rgba(0,0,0,0.3)",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaSeedling style={{ color: "#7ec850", fontSize: "24px" }} />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            AgriChain
          </span>
        </div>

        <span style={{ color: "#a0b890", fontSize: "14px" }}>
          🛒 Consumer Portal
        </span>

        <button
          onClick={handleLogout}
          style={{
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
          }}
        >
          <FaSignOutAlt /> Logout
        </button>

      </div>

      {/* Page Content */}

      <div style={{ padding: "40px 20px" }}>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>

          <h1 style={{ fontSize: "32px", color: "#7ec850", margin: 0 }}>
            🔍 Trace Your Produce
          </h1>

          <p style={{ color: "#a0b890", marginTop: "8px" }}>
            Enter a Batch ID or scan QR code
          </p>

        </div>

        {/* Trace Form */}

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "500px",
            margin: "0 auto 20px",
            display: "flex",
            gap: "10px"
          }}
        >

          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              background: "rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "12px 16px",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >

            <FaSearch style={{ color: "#7ec850", marginRight: "10px" }} />

            <input
              type="text"
              placeholder="Enter Batch ID"
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
            type="submit"
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

        </form>

        {/* Scan QR Button */}

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <button
            onClick={() => setScanning(true)}
            style={{
              padding: "10px 18px",
              background: "#60a5fa",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            <FaQrcode /> Scan QR Code
          </button>
        </div>

        {scanning && (
          <div
            id="qr-reader"
            style={{
              maxWidth: "320px",
              margin: "0 auto 40px"
            }}
          />
        )}

        {error && (
          <p style={{ color: "#ff6b6b", textAlign: "center" }}>
            {error}
          </p>
        )}

        {/* Result */}

        {result && (

          <div style={{ maxWidth: "600px", margin: "0 auto" }}>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "30px",
                border: "1px solid rgba(126,200,80,0.2)"
              }}
            >

              <h2 style={{ color: "#7ec850", marginTop: 0 }}>
                Batch Details
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px"
                }}
              >

                {[
                  { label: "Batch ID", value: result.batchId },
                  { label: "Product", value: result.product },
                  { label: "Weight", value: result.weight },
                  { label: "Farmer", value: result.farmer },
                  { label: "Status", value: result.status },
                  { label: "Timestamp", value: result.timestamp }
                ].map((item, i) => (

                  <div key={i}>
                    <p style={{ color: "#a0b890", fontSize: "12px", margin: "0 0 2px" }}>
                      {item.label}
                    </p>

                    <p style={{ color: "#fff", fontWeight: "bold", margin: 0 }}>
                      {item.value}
                    </p>
                  </div>

                ))}

              </div>

            </div>

            <h2 style={{ color: "#7ec850", marginBottom: "20px" }}>
              Product Journey
            </h2>

            <div>

              {result.journey.map((step, index) => (

                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "24px",
                    gap: "16px"
                  }}
                >

                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: step.done
                        ? "linear-gradient(135deg, #5a9e2f, #7ec850)"
                        : "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px"
                    }}
                  >

                    {iconMap[step.icon]}

                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      padding: "14px 18px",
                      flex: 1
                    }}
                  >

                    <p
                      style={{
                        margin: "0 0 4px",
                        fontWeight: "bold",
                        color: step.done ? "#7ec850" : "#888"
                      }}
                    >
                      {step.step}
                    </p>

                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#a0b890"
                      }}
                    >
                      📍 {step.location} | 📅 {step.date}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default ConsumerDashboard;