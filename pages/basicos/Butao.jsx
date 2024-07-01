function acao1(){
    console.log("acao1")
}



export default function botao(){
    function acao2(){
        console.log("acao2")

    }


    function acao5(e){
        console.log(e)

    }
    return (
        <div>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
            <button onClick={acao1}>
                clique1
            </button>
            <button onClick={acao2}>
                clique2
            </button>

            <button onClick={function(){
                        console.log("acao3")

            }}>
                clique3
            </button>
            <button onClick={() => {
                                        console.log("acao4")

            }}>
                clique4
            </button>


            <button onClick={acao5}>
                clique5
            </button>
            <button onClick={(e) =>  acao5(e)}>
                clique5 v2
            </button>
        </div>
    )
}