import Lista from "@/components/Lista";
import Item from "@/components/Item";

export default function ComponenteFilho(){
    return (
        <div>
             <Lista>
                <Item conteudo="1" />
                <Item conteudo="2" />
                <Item conteudo="3" />

             </Lista>
        </div>
    )
}