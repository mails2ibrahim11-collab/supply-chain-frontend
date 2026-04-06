import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ConsumerDashboard from "./pages/consumer/ConsumerDashboard";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/consumer" element={<ConsumerDashboard />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/seller" element={<h1>Seller Dashboard (coming soon)</h1>} />
        <Route path="/admin" element={<h1>Admin Dashboard (coming soon)</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;