

/*
    context 는 react 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록
    고안된 방법이다.. 트리 구조가 복잡해질수록 하위 컴포넌트로 props를 전달하는
    양이 많아지고, 그러면 유지보수와 코드 가독성에 악영향을 준다..

    하지만 context 를 사용하면 중간 컴포넌트 들에게 props 를 넘겨주지 않아도 되고
    유지보수도 수월해지게 된다..
    단, context 를 사용하면 컴포넌트를 재사용하기 어려워지기 때문에
    꼭 필요할 때 써야한다..
    따라서 때에 따라서는 context 보다 props 가 더 간단한 해결책이 될 수 있다.
*/

import { createContext, useContext, useState } from "react";
import { Styles } from "./style";

// 컨텍스트 생성 --> 별도의 저장소를 만듦..
const DarkModeContext = createContext(null);

const Header = () => {
    const context = useContext(DarkModeContext);

    const {isDark} = context;

    return (
        <header
            style={{
                ...Styles.header,
                backgroundColor: isDark? "black" : "lightgray",
                color:isDark? 'white' : 'black'
            }}>
                <h1>Welcome to useContext</h1>
            </header>
    )
}

const Content = () => {
    const context = useContext(DarkModeContext);

    const {isDark} = context;

    return(
        <div
            style={{...Styles.content,
                backgroundColor:isDark?"gray":"white",
                color:isDark?"white":"black"
            }}>
                <p>내용입니다..</p>
            
        </div>


    )
}

const Footer = () => {
    const context = useContext(DarkModeContext);
    const {isDark,setIsDark} = context;
    const toggleHandler = () => setIsDark(!isDark);


    return(
        <footer
        style={{
        ...Styles.footer,
        backgroundColor:isDark?"black" : "white" ,
        color:isDark?"white":"black" 
        }}>
        <button onClick={toggleHandler}>
                {isDark? "black":"white"}
            </button>
                useContext App
        </footer>
    )

}

const Page = () => {
    return (
        <div style={{
            ...Styles.page
        }}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )   
}

const ContextContainer = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <DarkModeContext.Provider value={{isDark,setIsDark}}>  {/*하위 노드들이 value값들을 쓸 수 있게 해준다!*/}
            <Page/>
            </DarkModeContext.Provider>
    )

}

export default ContextContainer;