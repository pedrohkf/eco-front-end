import React, { useEffect } from "react";
import { LoginGoogle } from "../components/LoginGoogle";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }

    console.log(user);
  }, [user, navigate]);

  return (
    <div>
      <h2>Login com Google</h2>
      <LoginGoogle />
      <p>teste</p>
    </div>
  );
};
