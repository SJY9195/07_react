import {useEffect, useState, useReducer, useMemo} from "react";

// useMemo : 메모이제이션을 통해 비용이 큰 계산을 최적화 하거나,
// 참조(주소값)이 동일해야 하는 경우에 사용한다..
// 의존성이 변경되지 않으면 이전의 계산된 값을
// 재사용 하여 불필요한 렌더링을 방지한다..

const LocationComponent = () => {

    const [isKorea, setIsKorea] = useState(true);
    const [number,setNumber] = useState(0);

    console.log("렌더링");

    // 1. 지역 변수에 문자열로 초기화 - 기본 자료형((number의 state)state 변화시 location 변화 없음) 
    //const location = isKorea? "한국" : "일본";

    // 2. 지역 변수에 객체로 초기화 - 객체의 주소값이 렌더링 시 마다 변화.. (재할당) //객체는 메모리 heap영역에 다시 할당하는 개념이라서 렌더링이 다시된다!
    //  
    //}
       /*const location = {
        country : isKorea? "한국" : "일본"
    }

    useEffect(() => {   //주소값이 달라지면 useEffect는 location이 달라졌다고 판단해서 작동한다!
        console.log("useEffect 호출");
    }, [location]);*/

    // 3. 지역 변수에 useMemo 의 반환값으로 초기화
    const location = useMemo(()=>{ //cf) 한줄일때 화살표 함수는 return을 안써도 된다.
        return{
            country:isKorea? "한국":"일본"
        }
    },[isKorea])

    useEffect(()=>{
        console.log("useEffect 호출");
    },[location]);

    return(
        
        <>
            <h2>지금 당신의 위치는?</h2>
            <p>국가 : {location.country}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>국가 변경</button>
            <hr/>
            <h2>좋아하는 숫자를 입력 해주세요</h2>
            <input type = "number" value = {number}
            onChange={e=>setNumber(e.target.value)}/>
        </>
        
    )
}

export default LocationComponent;