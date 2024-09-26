import {useEffect, useState, useReducer, useMemo} from "react";

const SquareCalculator = () => {
    
    const [numbers, setNumbers] = useState("");

    const squareNumber = useMemo(()=>{  //여기 코드에서 useEffect와의 차이 : useEffect는 직접 값을 반환 못하고, 상태 변화나 외부 작업을 처리해야 하므로 따로 객체를 만들고, setter에 담아줘야한다! 하지만 useMemo는 바로 직접반환 가능하다!
        console.log("제곱값 계산 실행");
        return numbers.split(",").map(num =>{
            return isNaN(num)? 0 : num ** 2;
        })

    }, [numbers])


    const onChangeHandler = e => {
        setNumbers(e.target.value);
    }

    return (
        <>
        <h2>숫자 제곱 계산기</h2>
        <br/>
        <input type="text" name="num" onChange={onChangeHandler}></input>
        <br/>
        <h2>제곱값:</h2>
        <br/>
        {squareNumber.map((square, index) => {
        return(<li key = {index}>{square}</li>)
        })}
       </>
   
    )
}
export default SquareCalculator;