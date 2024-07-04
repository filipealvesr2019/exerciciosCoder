import Filho2 from "./Filho2";

export default function Pa2(){
    function falarComPai(param1, param2, param3 )
    {
        console.log(param1, param2, param3 )
        console.log('alguem falou comigo? ')
    }
    return (
        <div style={{
            display:"flex",
            alignItems:"center"
        }}>
     
            <Filho2 funcao={falarComPai} />
           

        </div>
    )
}