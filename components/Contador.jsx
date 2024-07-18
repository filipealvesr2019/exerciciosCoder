import { Component } from "react";

export default class Contador extends Component {
  state = {
    // numero: 7
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + (this.state.passo),
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - (this.state.passo),
    });
  };
  render() {
    return (
      <>
        <h2>{this.state.numero}</h2>
        {/* <button onClick={() => this.inc()}>+</button> */}
        <input type="number" min={1}  max={1000} value={this.state.passo} onChange={event => this.setState({passo: +event.target.value})}/>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    );
  }
}
