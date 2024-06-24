import listaProdutos from "../../data/listaProdutos"
import lista from "../../data/listaProdutos"

export default function repeticao2(){

    function renderizarLinhas(){
        return listaProdutos.map((product) => (
            <>
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.preco}</td>
            </tr>
            </>
        ))
    }
    return (
        <div>
            <table style={{
                border: "1px solid black"
            }}>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>nome</th>
                        <th>preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}