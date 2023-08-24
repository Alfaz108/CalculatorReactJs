import React from "react";
import "./style.css";

class Calculator extends React.Component {
  state = {
    number: "",
    a: "",
    b: 0,
  };

  display = (e) => {
    if (e.target.value != "=") {
      this.setState({ number: this.state.number + e.target.value });
    } else {
      this.calculate();
    }
  };
  calculate = () => {
    var sum = eval(this.state.number);

    this.setState({ a: this.state.a + sum });
  };
  Alfaz = () => {
    this.setState({ number: "" });
    this.setState({ a: "" });
  };
  close = () => {
    const currentNumber = this.state.number;
    this.setState({
      number: currentNumber.slice(0, -1),
    });
  };
  render() {
    return (
      <section>
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">{this.state.number}</div>
            <div className="current-operand">{this.state.a}</div>
          </div>
          <button className="clear span-two" onClick={this.Alfaz}>
            AC
          </button>
          <button className="del" onClick={this.close}>
            C
          </button>
          <button onClick={this.display} className="operator" value={"/"}>
            /
          </button>
          <button onClick={this.display} className="number" value={1}>
            1
          </button>
          <button onClick={this.display} className="number" value={2}>
            2
          </button>
          <button onClick={this.display} className="number" value={3}>
            3
          </button>
          <button onClick={this.display} className="operator" value={"*"}>
            *
          </button>
          <button onClick={this.display} className="number" value={4}>
            4
          </button>
          <button onClick={this.display} className="number" value={5}>
            5
          </button>
          <button onClick={this.display} className="number" value={6}>
            6
          </button>
          <button onClick={this.display} className="operator" value={"+"}>
            +
          </button>
          <button onClick={this.display} className="number" value={7}>
            7
          </button>
          <button onClick={this.display} className="number" value={8}>
            8
          </button>
          <button onClick={this.display} className="number" value={9}>
            9
          </button>
          <button onClick={this.display} className="operator" value={"-"}>
            -
          </button>
          <button onClick={this.display} className="number" value={0}>
            0
          </button>
          <button onClick={this.display} className="operator" value={"."}>
            .
          </button>
          <button
            onClick={this.display}
            className="calculate span-two"
            value={"="}
          >
            =
          </button>
        </div>
      </section>
    );
  }
}

export default Calculator;
