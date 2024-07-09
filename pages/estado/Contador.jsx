import { useState } from "react"

export default function Contador(){
    const [contador, setContador] = useState(0)
    const haldleClickAdd = () => {
        setContador(contador => contador + 1)
    }
    const haldleClickRemove = () => {
        setContador(contador => contador - 1)
    }
    
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center", 
            justifyContent:"center",
            gap:"2rem"
        }}>
        <div  style={{
            display:"flex",
            alignItems:"center", 
         
            gap:"2rem"
        }}>
            
        <span onClick={haldleClickRemove}>-</span>
        <h1>Contador</h1>
        <span onClick={haldleClickAdd}>+</span>

        </div>
        <span>{contador}</span>
        </div>
    )
}