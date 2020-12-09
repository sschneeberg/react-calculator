import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            operator: '',
            answer: 0
            //style: { backgroundColor: 'lightgrey' }
        };
    }

    recordNum(e) {
        e.preventDefault();
        if (this.state.operator === '') {
            this.setState({ num1: parseInt(e.target.innerText) });
        } else {
            this.setState({ num2: parseInt(e.target.innerText) });
        }
        this.setState({ answer: parseInt(e.target.innerText) });
    }

    setOperator(e) {
        e.preventDefault();
        this.setState({
            operator: e.target.innerText
            //style: { backgroundColor: 'cyan' }
        });
    }

    computeAnswer(e) {
        e.preventDefault();
        let operator = this.state.operator;
        if (operator !== '') {
            let answer = 0;
            if (operator === '+') {
                answer = this.state.num1 + this.state.num2;
            } else if (operator === '-') {
                answer = this.state.num1 - this.state.num2;
            } else if (operator === 'x') {
                answer = this.state.num1 * this.state.num2;
            } else if (operator === '/') {
                answer = this.state.num1 / this.state.num2;
            }
            this.setState({
                operator: '',
                answer: answer,
                num1: 0,
                num2: 0
                //style: { backgroundColor: 'lightgrey' }
            });
        }
    }

    render() {
        return (
            <div className="calculator">
                <h3 className="results">{this.state.answer}</h3>
                <form className="add">
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        1
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        2
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        3
                    </button>
                    <button
                        className="operator"
                        //style={this.state.style}
                        onClick={(e) => {
                            this.setOperator(e);
                        }}>
                        +
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        4
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        5
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        6
                    </button>
                    <button
                        className="operator"
                        //style={this.state.style}
                        onClick={(e) => {
                            this.setOperator(e);
                        }}>
                        -
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        7
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        8
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        9
                    </button>
                    <button
                        className="operator"
                        //style={this.state.style}
                        onClick={(e) => {
                            this.setOperator(e);
                        }}>
                        x
                    </button>
                    <button
                        style={{ gridColumn: '1/ span 2' }}
                        onClick={(e) => {
                            this.computeAnswer(e);
                        }}>
                        =
                    </button>
                    <button
                        onClick={(e) => {
                            this.recordNum(e);
                        }}>
                        0
                    </button>
                    <button
                        className="operator"
                        //style={this.state.style}
                        onClick={(e) => {
                            this.setOperator(e);
                        }}>
                        /
                    </button>
                </form>
            </div>
        );
    }
}

export default Calculator;
