import { useState } from "react";
import "./Mouse.css"

export default function Mouse(){
// const arrayX = useState(0);
// let x = arrayX[0];
// const setX = arrayX[1];


// const arrayY = useState(0);
// let y = arrayY[0];
// const setY = arrayY[1];




const [x, setX] = useState(0);

const [y, setY] = useState(0);




    function quandOMoverOMOUSE(event){
        setX(event.clientX);
        setY(event.clientY);
          
    }
    return (
        <div style={{
            backgroundColor:"#222",
            color: "#fff",
            height:"100vh",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            gap:"1rem"
        }} onMouseMove={quandOMoverOMOUSE}>
             
            <span >Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>

        </div>
    )
}