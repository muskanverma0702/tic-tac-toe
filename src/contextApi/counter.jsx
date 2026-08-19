import React,{useContext} from "react";
import {CounterContext} from "../contextApi/counter"

const Counter =() => {
    const counnterContext = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => counnterContext.setCount(counnterContext.count + 1)}>Increment</button>
            <button>Decrement</button>
        </div>
    );
};
export default Counter;