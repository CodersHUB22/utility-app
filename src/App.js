import React from "react";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Calculator from "./Components/Calculator";
import "./css/Counter.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/Error";

function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/"
                    element={
                        <>
                            <Header />
                            <Counter />
                        </>
                    }
                />
                <Route
                    path="/calculator"
                    element={
                        <>
                            <Header />
                            <Calculator />
                        </>
                    }
                />
                <Route
                    path="/error"
                    element={
                        <>
                            <Error />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;