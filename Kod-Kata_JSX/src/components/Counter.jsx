import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleClickAdd = () => (
        setCount(count + 1)
    )
    
    const handleClickRemove = () => (
        setCount(count - 1)
    )




    return(
        <>
        <button onClick={handleClickAdd}>Add</button>
        <div>{count}</div>
        <button onClick={handleClickRemove}>Remove</button>
        </>
    )
}

export default Counter;