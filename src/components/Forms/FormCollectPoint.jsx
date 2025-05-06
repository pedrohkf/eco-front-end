import { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/collectPoints";

export default function CollectPoint() {
  const [name, setName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [cep, setCep] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [img, setImg] = useState("");

  const handleCepChange = async (e) => {
    const value = e.target.value;
    e.preventDefault();
    setCep(value);

    const cleanCep = value.replace(/\D/g, "");

    if (cleanCep.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cleanCep}/json/`
        );
        const data = await response.json();

        if (!data.error) {
          setStreet(data.logradouro);
          setCity(data.localidade);
          setState(data.uf);
          setCountry("Brasil");
        } else {
          alert("CEP não encontrado");
        }
      } catch (error) {
        console.log("Erro ao buscar CEP: ", error);
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(baseURL, {
        name,
        longitude,
        latitude,
        country,
        state,
        city,
        street,
        houseNumber,
        cep,
        phoneNumber,
        email,
        openingHours,
        img,
      });
    } catch (error) {
      console.error("Erro ao enviar: ", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Nome da Empresa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input placeholder="CEP" value={cep} onChange={handleCepChange} />
      <input
        placeholder="Longitude"
        type="number"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <input
        placeholder="Latitude"
        type="number"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <input
        placeholder="País"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        placeholder="Estado"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        placeholder="Rua"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        placeholder="Número da Casa"
        value={houseNumber}
        onChange={(e) => setHouseNumber(e.target.value)}
      />
      <input
        placeholder="(00) 0000-0000"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Horário Aberto"
        value={openingHours}
        onChange={(e) => setOpeningHours(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
