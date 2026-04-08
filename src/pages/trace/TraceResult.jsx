import { useLocation, useNavigate } from "react-router-dom";
import { FaSeedling, FaBoxOpen, FaTruck, FaStoreAlt, FaSignOutAlt } from "react-icons/fa";

function TraceResult() {

  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  if (!data) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f1f0f",
        color: "#fff"
      }}>
        No batch data found.
      </div>
    );
  }

  const journeyIcons = {
    harvested: <FaSeedling />,
    packed: <FaBoxOpen />,
    shipped: <FaTruck />,
    retailer: <FaStoreAlt />
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f1f0f,#1a3a2a)",
      fontFamily: "Segoe UI",
      color: "#fff"
    }}>

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
          🔍 Trace Result
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

      <div style={{ padding: "40px" }}>

        <h1 style={{ color: "#7ec850", textAlign: "center" }}>
          Product Trace Result
        </h1>

        <div style={{
          maxWidth: "600px",
          margin: "40px auto",
          background: "rgba(255,255,255,0.07)",
          padding: "30px",
          borderRadius: "16px"
        }}>

          <h2 style={{ color: "#7ec850" }}>Batch Details</h2>

          <p><b>Batch ID:</b> {data.batchId}</p>
          <p><b>Farmer:</b> {data.farmer}</p>
          <p><b>Product:</b> {data.product}</p>
          <p><b>Weight:</b> {data.weight}</p>

          <h2 style={{ marginTop: "30px", color: "#7ec850" }}>
            Product Journey
          </h2>

          {data.journey && data.journey.map((step, index) => (

            <div key={index} style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px"
            }}>

              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#7ec850",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px"
              }}>
                {journeyIcons[step.icon]}
              </div>

              <div>
                <b>{step.step}</b>

                <div style={{
                  fontSize: "13px",
                  color: "#a0b890"
                }}>
                  {step.location}
                </div>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default TraceResult;