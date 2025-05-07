import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

import photoGoogle from "../assets/google.png";
import axios from "axios";
import styles from "./LoginGoogle.module.css";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginGoogle = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      const user = result.user;
      const email = user.email;
      const name = user.displayName;
      const photo = user.photoURL;

      localStorage.setItem("token", token);

      const response = await axios.post("http://localhost:3000/login", {
        token,
      });

      const responseUser = await axios.post("http://localhost:3000/register", {
        name,
        email,
        photo,
      });

      login(token, response.data.email);

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div onClick={loginWithGoogle} className={styles.loginGoogle}>
      <img src={photoGoogle} />
    </div>
  );
};
