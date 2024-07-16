import { useState, useEffect } from "react";
import mega from "../../functions/mega";
import NumerosDispaly from "@/components/NumerosDispaly";

export default function MegaSenaResultado2() {
  const [quantidade, setQuantidade] = useState(6);
  const [numero, setNumero] = useState([]);

  useEffect(() => {
    setNumero(mega(quantidade));
  }, []);

  const handleGerarNumeros = () => {
    setNumero(mega(quantidade));
  };

  const handleChangeQuantidade = (event) => {
    setQuantidade(parseInt(event.target.value));
  };

  function rederizarNumeros() {
    return numero.map((numero) => (
      <NumerosDispaly key={numero} numero={numero} />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{
            display: "flex",
            justifyContent:"center",
            flexWrap:"wrap"
        }}
      >
        {rederizarNumeros()}
      </div>
      <div style={{ marginLeft:"2rem"}}>
        <input
          type="number"
          value={quantidade}
          min={6}
          max={60}
          onChange={handleChangeQuantidade}
        />
        <button
          onClick={handleGerarNumeros}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0.8rem",
            border: "0",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          gerar numero
        </button>
      </div>
    </div>
  );
}
