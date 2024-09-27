import { useEffect, useState,useCallback,useRef } from "react";

/*
    useRef 를 사용하는 목적?

    1. 값 유지 - 렌더링 사이에 값을 유지할 수 있게 해준다.. 리렌더링 시 초기화되지 않는다..
    2. 렌더링 방지 - 값이 변경 되더라도 리렌더링을 일으키지 않는다. 성능 최적화
    3. 애니메이션, 타이머 등 특정 값이 변경 되더라도 리렌더링을 원치 않을 때 저장 용도
    4. DOM 요소에 직접 접근하는 방법을 제공함. 특정 요소 포커스 등

*/

const UseRefCounter = () => {

    console.log("useRefCounter 렌더링 됨..");

    const [count, setCount] = useState(0);

    let variable = 0;

    const countRef = useRef(0);

    const  increaseCount = () =>{
        setCount(count+1);
    }

    const increaseVariable = () => {
        variable += 1;
        console.log("variable : " + variable);
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current+1; // current -> countRef가 갖고있는 현재값이다!
        console.log("카운트Ref : " + countRef.current);
    }

    return (
        <>
            <h1>counter : {count}</h1>
            <h1>variable : {variable}</h1>
            <h1>countRef : {countRef.current}</h1>

            <button onClick={increaseCount}>카운트증가</button>
            <button onClick={increaseVariable}>variable 증가</button>
            <button onClick={increaseCountRef}>카운트 Ref 증가</button>
        </>
    )
 //버튼을 누르면 값은 증가하나, counter 빼고는 랜더링이 안될뿐인것이다!
}

export default UseRefCounter;