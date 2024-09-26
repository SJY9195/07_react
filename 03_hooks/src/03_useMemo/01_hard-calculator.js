import {useEffect, useState, useReducer} from "react";

const hardCalculator = (num) => {

    for (let i = 0; i<999999999; i++){   // 이렇게 큰수를 반복시키면 버벅거린다!

    }
    return num + 999999999;
}

const HardCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const hardSum = hardCalculator(hardNumber);

    return(
        <>
            <h3>어려운 계산기</h3>
            <input type="number"
            value={hardNumber}
            onChange = {e => setHardNumber(parseInt(e.target.value))}/> {/*parseInt 해주는 이유: value가 문자열로 반환되기때문에*/}
        <span> +999999999 = {hardSum} </span>
        </>
    )
}

export default HardCalculator;