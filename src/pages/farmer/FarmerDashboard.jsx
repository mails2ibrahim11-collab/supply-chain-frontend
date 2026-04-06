import { useState } from "react";

function FarmerDashboard() {
  const [batchId, setBatchId] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (!batchId || !description) {
      setMessage("Please fill in both fields.");
      return;
    }

    // Later we'll replace this with a real API call to Soaif's backend
    console.log("Registering batch:", { batchId, description });
    setMessage("Batch registered successfully! (mock)");
    setBatchId("");
    setDescription("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Farmer Dashboard</h1>
      <h2>Register a New Batch</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Batch ID"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
      </div>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <button onClick={handleRegister} style={{ padding: "10px 30px" }}>
        Register Batch
      </button>
    </div>
  );
}

export default FarmerDashboard;