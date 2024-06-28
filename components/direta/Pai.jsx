import Filho from "./Filho";

export default function Pai(props){

    return (
        <div style={{
            display:"flex",
            alignItems:"center"
        }}>
            <h1>Familia {props.familia}</h1>
            <Filho familia={props.familia} nome="pedro"/>
            <Filho familia='alves' nome="joana"/>
            <Filho {...props} nome="gabriel"/>

        </div>
    )
}