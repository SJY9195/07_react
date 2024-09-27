import { useEffect, useState } from "react";


const CallBackProblem = () => { //함수도 객체기 때문에 useState값이 바뀌고 주소 값이 바뀌고, 다시 랜더링 되면 함수가 다시 호출된다. 그래서 toggle을 눌러도 useEffect가 다시 발동된다!

    const [number,setNumber] = useState(0);
    const [toggle,setToggle] = useState(false);

    const printNumber = () => {
        console.log(`current number : ${number}`);
    }

    useEffect(()=>{
        console.log("printNumber 값 변화 인지됨");
    }, [printNumber]);


    return (
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <br/>
            <button onClick={()=>setToggle(r=>!r)}>{toggle}</button>

            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>

    )

}

export default CallBackProblem;