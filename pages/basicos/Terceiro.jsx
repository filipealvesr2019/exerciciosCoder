export default function Terceiro() {
    const  conteudo = "codigo de uma constante"
   return (
    <div>
{conteudo}
<h1>{entre(9, 1, 10)}
</h1>
    </div>
   )
}


function entre(valor, min, max){
    if(valor >= min && valor <= max){
        return "sim"
    } else {
        return "não"
    }
}