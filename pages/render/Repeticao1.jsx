export default function Repetição1(){
    const listaAprovados = [
        'joão', 
        'maria',
        'pedro', 
        'ana',
        'carlos'
    ]

    function renderizarLista(){
       
      return listaAprovados.map((aprovado, index) => <><li key={index}>{aprovado}</li></>)
    }
    return (
        <ul>
           {renderizarLista()}
        </ul>
    )
}


// const listaAprovados = [
//     'joão', 
//     'maria',
//     'pedro', 
//     'ana',
//     'carlos'
// ]

// function renderizarLista(){
//     const itens = []
//     for(let i = 0; i < listaAprovados.length; i++){
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
//     }
//   return itens
// }