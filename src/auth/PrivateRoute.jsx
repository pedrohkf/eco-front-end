import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>loading...</p>;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
