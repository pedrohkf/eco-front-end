import "./App.css";
import { LoginGoogle } from "./components/LoginGoogle";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { LoginEnterprise } from "./pages/LoginEnterprise.jsx";
import { LoginUser } from "./pages/LoginUser.jsx";
import Maps from "./pages/Maps.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginGoogle />} />
        <Route path="/loginEnterprise" element={<LoginEnterprise />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/maps"
          element={
            <PrivateRoute>
              <Maps />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
