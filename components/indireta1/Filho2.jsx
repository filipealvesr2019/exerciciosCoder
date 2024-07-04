export default function Filho(props) {
  console.log(props.funcao)
  return (
    <div>
      <button onClick={props.funcao}>falar V1</button>

      <button onClick={() => props.funcao('EU PASSEI MÃE EU FUI PROMOVIDO EU PASSEI', 'uhuu')}>falar V2</button>
    </div>
  )
}