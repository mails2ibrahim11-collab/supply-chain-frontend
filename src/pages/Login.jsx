import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaEnvelope, FaLock } from "react-icons/fa";
import mockUsers from "../mockUsers";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("role", user.role);
      navigate("/" + user.role);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a1e 50%, #3d2b1f 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "50px 40px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.1)"
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <FaLeaf style={{ fontSize: "48px", color: "#7ec850" }} />
          <h1 style={{ color: "#fff", margin: "10px 0 4px", fontSize: "26px" }}>
            AgriChain
          </h1>
          <p style={{ color: "#a0b890", margin: 0, fontSize: "14px" }}>
            AI-Powered Supply Chain Traceability
          </p>
        </div>

        {/* Email */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ color: "#a0b890", fontSize: "13px", display: "block", marginBottom: "6px" }}>
            Email Address
          </label>
          <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "10px 14px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <FaEnvelope style={{ color: "#7ec850", marginRight: "10px" }} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: "#fff", width: "100%", fontSize: "14px" }}
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#a0b890", fontSize: "13px", display: "block", marginBottom: "6px" }}>
            Password
          </label>
          <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "10px 14px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <FaLock style={{ color: "#7ec850", marginRight: "10px" }} />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: "#fff", width: "100%", fontSize: "14px" }}
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <p style={{ color: "#ff6b6b", fontSize: "13px", marginBottom: "16px", textAlign: "center" }}>
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
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
          Login
        </button>

        <p style={{ color: "#6a8060", fontSize: "12px", textAlign: "center", marginTop: "24px" }}>
          AgriChain © 2026 — Blockchain + AI Agriculture
        </p>
      </div>
    </div>
  );
}

export default Login;