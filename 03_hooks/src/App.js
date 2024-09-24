import { useState } from "react";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import Test2 from "./01_useEffect/Question02";



  // component는 무조건 대문자 시작이다! 소문자 시작이면 html인줄 안다!

function App() {
  const [message,setMessage] = useState("안녕하세요");
 
  return (
   <>
    {/*<UseEffectBasic message={message}/>*/}
    {/*<UseEffectMount/>*/}
    {/*<UseEffectUpdate/>*/}
    {/*<Container/>*/}
    {/*<Timer/>*/}
    <h1>문제 : 올해는 몇 년도인가요?</h1>
    <Test2/>
   </>
  );
}

export default App;
