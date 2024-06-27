import If from "@/components/If";
import SomentePar from "@/components/SomentePar";

export default function Condicional2() {
    const number = 4
    return (
        <div style={{
            display: "flex"
        }}>
            <If teste={number % 2 === 0}>
                <h1>o numero {number} e par</h1>

            </If>
            <If teste={number % 2 === 1}>
                <h1>o numero {number} e impar</h1>

            </If>
        </div>
    )
}