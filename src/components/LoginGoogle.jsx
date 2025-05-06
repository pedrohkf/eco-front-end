import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

import photoGoogle from "../assets/google.png";
import axios from "axios";
import styles from "./LoginGoogle.module.css";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginGoogle = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      console.log("ID Firebase:", token);
      localStorage.setItem("token", token);

      const response = await axios.post("http://localhost:3000/login", {
        token,
      });

      login(token, response.data.email);

      console.log("Usuário autenticado no backend:", response.data.email);

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error);
    }
  };
  return (
    <div onClick={loginWithGoogle} className={styles.loginGoogle}>
      <img src={photoGoogle} />
    </div>
  );
};
