import { useNavigate } from "react-router-dom";
import { FaLeaf, FaSignOutAlt } from "react-icons/fa";

function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #1a2e1a, #2d4a1e)",
        padding: "14px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Left Side */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FaLeaf style={{ color: "#7ec850", fontSize: "20px" }} />

        <span
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "18px",
            letterSpacing: "0.5px",
          }}
        >
          AgriChain
        </span>

        <span
          style={{
            color: "#a0b890",
            fontSize: "14px",
            marginLeft: "10px",
          }}
        >
          | {role} Dashboard
        </span>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          background: "#7ec850",
          border: "none",
          borderRadius: "6px",
          color: "#1a2e1a",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}

export default Navbar;