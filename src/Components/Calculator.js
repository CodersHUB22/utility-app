import React, { useState } from "react";
import "../css/Calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
    const [display, setDisplay] = useState("");

    const handleInput = (value) => {
        setDisplay(display + value);
    };

    const handleClear = () => {
        setDisplay("");
    };

    const handleCalculate = () => {
        try {
            const result = evaluate(display);
            if (isNaN(result) || !isFinite(result)) {
                setDisplay("Error");
            } else {
                setDisplay(result.toString());
            }
        } catch (error) {
            setDisplay("Error");
        }
    };

    const handleScientificFunction = (func) => {
        let result;
        switch (func) {
            case "sin":
                result = Math.sin(parseFloat(display));
                break;
            case "cos":
                result = Math.cos(parseFloat(display));
                break;
            case "tan":
                result = Math.tan(parseFloat(display));
                break;
            case "log":
                result = Math.log10(parseFloat(display));
                break;
            case "ln":
                result = Math.log(parseFloat(display));
                break;
            case "sqrt":
                result = Math.sqrt(parseFloat(display));
                break;
            case "exp":
                result = Math.exp(parseFloat(display));
                break;
            default:
                break;
        }
        if (isNaN(result) || !isFinite(result)) {
            setDisplay("Error");
        } else {
            setDisplay(result.toString());
        }
    };

    const handleDoubleClick = (value) => {
        handleInput(value);
    };

    return (
        <div className="main">
            <div className="calc-container">
                <div className="calc">
                    <input type="text" value={display} id="answer" readOnly />
                    <div className="button-row">
                        <input
                            type="button"
                            value="7"
                            className="button"
                            onClick={() => handleInput("7")}
                            onDoubleClick={() => handleDoubleClick("7")}
                        />
                        <input
                            type="button"
                            value="8"
                            className="button"
                            onClick={() => handleInput("8")}
                            onDoubleClick={() => handleDoubleClick("8")}
                        />
                        <input
                            type="button"
                            value="9"
                            className="button"
                            onClick={() => handleInput("9")}
                            onDoubleClick={() => handleDoubleClick("9")}
                        />
                        <input
                            type="button"
                            value="/"
                            className="button"
                            onClick={() => handleInput("/")}
                            onDoubleClick={() => handleDoubleClick("/")}
                        />
                        <input
                            type="button"
                            value="sin"
                            className="button"
                            onClick={() => handleScientificFunction("sin")}
                            onDoubleClick={() => handleDoubleClick("sin")}
                        />
                        <input
                            type="button"
                            value="cos"
                            className="button"
                            onClick={() => handleScientificFunction("cos")}
                            onDoubleClick={() => handleDoubleClick("cos")}
                        />
                    </div>
                    <div className="button-row">
                        <input
                            type="button"
                            value="4"
                            className="button"
                            onClick={() => handleInput("4")}
                            onDoubleClick={() => handleDoubleClick("4")}
                        />
                        <input
                            type="button"
                            value="5"
                            className="button"
                            onClick={() => handleInput("5")}
                            onDoubleClick={() => handleDoubleClick("5")}
                        />
                        <input
                            type="button"
                            value="6"
                            className="button"
                            onClick={() => handleInput("6")}
                            onDoubleClick={() => handleDoubleClick("6")}
                        />
                        <input
                            type="button"
                            value="*"
                            className="button"
                            onClick={() => handleInput("*")}
                            onDoubleClick={() => handleDoubleClick("*")}
                        />
                        <input
                            type="button"
                            value="tan"
                            className="button"
                            onClick={() => handleScientificFunction("tan")}
                            onDoubleClick={() => handleDoubleClick("tan")}
                        />
                        <input
                            type="button"
                            value="log"
                            className="button"
                            onClick={() => handleScientificFunction("log")}
                            onDoubleClick={() => handleDoubleClick("log")}
                        />
                    </div>
                    <div className="button-row">
                        <input
                            type="button"
                            value="1"
                            className="button"
                            onClick={() => handleInput("1")}
                            onDoubleClick={() => handleDoubleClick("1")}
                        />
                        <input
                            type="button"
                            value="2"
                            className="button"
                            onClick={() => handleInput("2")}
                            onDoubleClick={() => handleDoubleClick("2")}
                        />
                        <input
                            type="button"
                            value="3"
                            className="button"
                            onClick={() => handleInput("3")}
                            onDoubleClick={() => handleDoubleClick("3")}
                        />
                        <input
                            type="button"
                            value="-"
                            className="button"
                            onClick={() => handleInput("-")}
                            onDoubleClick={() => handleDoubleClick("-")}
                        />
                        <input
                            type="button"
                            value="ln"
                            className="button"
                            onClick={() => handleScientificFunction("ln")}
                            onDoubleClick={() => handleDoubleClick("ln")}
                        />
                        <input
                            type="button"
                            value="exp"
                            className="button"
                            onClick={() => handleScientificFunction("exp")}
                            onDoubleClick={() => handleDoubleClick("exp")}
                        />
                    </div>
                    <div className="button-row">
                        <input
                            type="button"
                            value="0"
                            className="button"
                            onClick={() => handleInput("0")}
                            onDoubleClick={() => handleDoubleClick("0")}
                        />
                        <input
                            type="button"
                            value="."
                            className="button"
                            onClick={() => handleInput(".")}
                            onDoubleClick={() => handleDoubleClick(".")}
                        />
                        <input
                            type="button"
                            value="%"
                            className="button"
                            onClick={() => handleInput("%")}
                            onDoubleClick={() => handleDoubleClick("%")}
                        />
                        <input
                            type="button"
                            value="+"
                            className="button"
                            onClick={() => handleInput("+")}
                            onDoubleClick={() => handleDoubleClick("+")}
                        />
                        <input
                            type="button"
                            value="sqrt"
                            className="button"
                            onClick={() => handleScientificFunction("sqrt")}
                            onDoubleClick={() => handleDoubleClick("sqrt")}
                        />
                        <input
                            type="button"
                            value="Clear"
                            className="button button-clear"
                            onClick={handleClear}
                            onDoubleClick={() => handleDoubleClick("Clear")}
                        />
                        <input
                            type="button"
                            value="="
                            className="button button-equal"
                            onClick={handleCalculate}
                            onDoubleClick={() => handleDoubleClick("=")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;