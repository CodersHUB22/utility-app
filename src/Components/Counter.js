import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import "../css/Counter.css";

function Counter() {
    let count = 0;
    const [currentState, updatedState] = useState(count);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            swal({
                text: "Clicked",
                icon: "success",
                buttons: false,
                timer: 1500
            });
            setClicked(false);
        }
    }, [clicked]);

    const handleClick = () => {
        updatedState(currentState + 1);
        setClicked(true);
    };

    return (
        <div className='main'>
            <div className="container">
                <div className="counter-parent">
                    <h1>Counter:</h1>
                    <button onClick={handleClick}>{currentState}</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;