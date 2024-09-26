import { useEffect, useState,useCallback,useRef } from "react";


const LoginComponent = () => {

    const [form,setForm] = useState({
        username: '',
        password: ''
    });

    useEffect(()=>{
        console.log(userNameRef.current);
        userNameRef.current.focus();   
    }, [])

    const userNameRef = useRef();
    
    const onChangeHandler = e => {  //객체이므로 스프레드를 해줘야한다!!
            setForm({
                ...form,
                [e.target.name] : e.target.value
                });
    }

    const onClickHandler = () => {
        alert(`"로그인에 성공하셨습니다."\n
            username: ${form.username} \n
            password: ${form.password}`);
            setForm({
                username:'',
                password:''
            });
            userNameRef.current.focus(); //랜더링되면 커서가 자동으로  이름으로 간다!
    };


    return(
        <>
            <input type="text" name="username" placeholder="이름" onChange={onChangeHandler} 
            value={form.username} ref={userNameRef}/>

            <br/>

            <input type="password" name="password"
            placeholder="비밀번호" onChange={onChangeHandler}
            value={form.password}/>

            <br/>
            <button onClick={onClickHandler}>로그인</button>

        </>
    )


}

export default LoginComponent;