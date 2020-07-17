import React from "react";
import Auxillary from "./hoc/auxillary";

const gold = () =>{
    return(
        <Auxillary>
            <div className="square square--1">
                <h4 className="square--text">I'm Mr. Gold</h4>
                <button className="square--btn">Click Me</button>
            </div>
        </Auxillary>
    )
}

export default gold;