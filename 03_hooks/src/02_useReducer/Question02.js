import {useEffect, useState, useReducer} from "react";
// cf) js에서 **2 => 제곱
const Calculator = () => {

    const [number, setNumber] = useState(0);
    const [squareNumber, setSquaredNumber] = useState(null); // 제곱값 상태

    const onChangeHandler = e => {
        /*setNumber({
            ...number,
            [e.target.name] : e.target.value   //여기선 객체로 관리할 필요가없다. 숫자값 하나만 있으면 되므로
        });*/
        setNumber(e.target.value); //단순한 숫자 값을 상태에 저장
    };

    useEffect(()=>{
        if (number !== 0){

            const square = number **2;
            setSquaredNumber(square);
        }

    }, [number]);


    return (
        <>
        <h2>숫자 제곱 계산기</h2>
        <br/>
        <input type="text" name="number" onChange={onChangeHandler}></input>
        <br/>
        <h2>제곱값:</h2>
        <br/>
        {squareNumber}

        </>
    )


}

export default Calculator;