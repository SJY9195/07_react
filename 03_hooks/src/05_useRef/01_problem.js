import { useEffect, useState,useCallback } from "react";

//사용자한테 보여지지 않는값을 재생성 하지 않기 위해 쓴다!

const CounterRef = () => {
    const [counter,setCounter] = useState(0);

    console.log("counter 렌더링 됨..");

    const increaseCount=()=>{
        setCounter(counter+1);
    }

    return(
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={increaseCount}>카운트 증가</button>
        </>
    )

}

export default CounterRef;
