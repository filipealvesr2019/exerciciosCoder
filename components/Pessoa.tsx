interface PessoaProps {
    nome: String
    idade?: number
}


export default function Pessoa(props: PessoaProps){
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'não informada'}</div>

        </div>
    )
}