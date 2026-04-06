import { useState } from "react";

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

    // Mock data — will be replaced with real API call later
    const mockBatch = {
      batchId: batchId,
      cropType: "Tomato",
      quantity: "500 kg",
      farmer: "John Farm",
      status: "In Transit",
      timestamp: "2026-04-01 08:30 AM",
      journey: [
        { step: "Harvested", location: "Farm A", date: "2026-04-01" },
        { step: "Packed", location: "Warehouse B", date: "2026-04-02" },
        { step: "Shipped", location: "Distribution Center", date: "2026-04-03" },
      ],
    };

    setError("");
    setResult(mockBatch);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Trace a Batch</h1>
      <p>Enter a Batch ID to see the product journey</p>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter Batch ID"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleTrace} style={{ padding: "10px 30px" }}>
        Trace Batch
      </button>

      {result && (
        <div style={{ marginTop: "40px", textAlign: "left", display: "inline-block" }}>
          <h2>Batch Details</h2>
          <p><strong>Batch ID:</strong> {result.batchId}</p>
          <p><strong>Crop Type:</strong> {result.cropType}</p>
          <p><strong>Quantity:</strong> {result.quantity}</p>
          <p><strong>Farmer:</strong> {result.farmer}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Timestamp:</strong> {result.timestamp}</p>

          <h2>Journey</h2>
          {result.journey.map((step, index) => (
            <div key={index} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" }}>
              <p><strong>Step {index + 1}:</strong> {step.step}</p>
              <p><strong>Location:</strong> {step.location}</p>
              <p><strong>Date:</strong> {step.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ConsumerDashboard;