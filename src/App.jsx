import "./App.css";
import { LoginGoogle } from "./components/LoginGoogle";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginGoogle />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
