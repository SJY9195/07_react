import {useEffect, useState, useReducer, useMemo} from "react";

const SquareCalculator = () => {

    const [numbers, setNumbers] = useState("");

    const squareNumber = useMemo(()=>{
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