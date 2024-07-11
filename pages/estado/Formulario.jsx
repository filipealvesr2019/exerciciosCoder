import { useState } from "react"

export default function Formulario(){
    const [valor, setValor] = useState('')
    function alterarInput(){
        setValor(valor + '!')
    }
    return (
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}>
            <span>{valor}</span>
            <div>

            <input type="text" value={valor} onChange={(event => setValor(event.target.value))}/>
            <button onClick={alterarInput}>alterar</button>
            </div>
        </div>
    )
}