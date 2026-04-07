import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ConsumerDashboard from "./pages/consumer/ConsumerDashboard";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/consumer" element={<ConsumerDashboard />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;