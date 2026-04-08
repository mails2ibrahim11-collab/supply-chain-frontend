import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import ConsumerDashboard from "./pages/consumer/ConsumerDashboard";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TraceResult from "./pages/trace/TraceResult";


function ProtectedRoute({ children, role }) {

  const userRole = localStorage.getItem("role");

  if (!userRole) {
    return <Navigate to="/" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/consumer"
          element={
            <ProtectedRoute role="consumer">
              <ConsumerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/farmer"
          element={
            <ProtectedRoute role="farmer">
              <FarmerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/seller"
          element={
            <ProtectedRoute role="seller">
              <SellerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trace"
          element={
            <ProtectedRoute>
              <TraceResult />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;