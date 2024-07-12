import { useState } from "react"

export default function NumeroMegacenaDesafio(){
    const [gerarNumeros, setGerarNumeros] = useState([])
    const gerarNumerosClick = () =>{
        let numerosGerados = new Set();
        while (numerosGerados.size < 6){
            let numero = Math.floor(Math.random() * 60) + 1 ;
            numerosGerados.add(numero);

        }
        setGerarNumeros(Array.from(numerosGerados))
    }
    return (
        <>
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center", 
            justifyContent:"center",
            gap:"2rem"
        }}>
       
        <span>{gerarNumeros}</span>
        
        <button onClick={gerarNumerosClick}>gerar numeros</button>
        </div>
        
        
        </>
    )
}