import {useEffect, useState} from "react";

const Test2 = () => {

    const [inputText, setInputText] = useState("");
    const [count, setCount] = useState(10);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onChangeHandler = e => setInputText(e.target.value);

    const onClickHandler = () => {
        if (inputText === "2024"){
            alert("정답입니다!");
        }else if(count === 0) {
            alert("시간초과 입니다!");
        }else{
            alert("오답입니다! 다음기회에 도전해주세요!");
        }
        setIsSubmitted(true);
    };

    useEffect(()=> {
        if (count > 0 && !isSubmitted) {
            const timer = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (count === 0 && !isSubmitted) {
            onClickHandler();
        }

    }, [count, isSubmitted]);
    
    
    
    
    return(
        <>
        <h3>남은시간: {count}초</h3>
        <input type = "text" value={inputText} onChange={onChangeHandler}/>
        <button onClick={onClickHandler} disabled={isSubmitted}>제출</button>
        </>
    );
};

export default Test2;