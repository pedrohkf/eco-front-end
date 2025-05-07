import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";

export const Menu = () => {
  const navigate = useNavigate();

  const handleClickEnterprise = () => {
    navigate("/loginEnterprise");
  };

  const handleClickUser = () => {
    navigate("/loginUser");
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li>HOME</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>
        <div className={styles.buttons}>
          <button onClick={handleClickEnterprise}>EMPRESA</button>
          <button onClick={handleClickUser}>USUÁRIO</button>
        </div>
      </div>
    </div>
  );
};
