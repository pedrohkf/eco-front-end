import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./CollectPoint.module.css";

const baseURL = "http://localhost:3000/collectPoints";

export const CollectPoint = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCards(response.data);
    });
  }, [cards]);

  if (!cards) return <p>Sem pontos de coleta.</p>;

  return (
    <div>
      {cards.map((card) => (
        <div className={styles.container} key={card._id}>
          {card.name}
        </div>
      ))}
    </div>
  );
};
