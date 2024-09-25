import {useEffect, useState, useReducer} from "react";

const reducer = (state, action) => {  //컴포넌트만 앞글자가 대문자다!
    console.log(action);
    return({     
        ...state, //...는 스프레드이다! return에서 새로운 상태를 반환하는것이다! ...state는 객체를 그대로 복사한다! 객체의 기존 속성들을 유지하면서 상태를 확장할 수 있다!
        [action.name] : action.value
    })
}

export const Input = () => {

    const [state, dispatch] = useReducer(reducer, {
        pass : '',
        passcheck : ''
    })

    const onChangeHandler = e => dispatch(e.target); //reducer 함수는 target 뒤에 따로 안적어도 자동으로 name 인자가 들어간다!

    return (
        <>
            <label>비밀번호 :</label>
            <input type="password" name="pass" onChange={onChangeHandler}></input>
            <br/>
            <label>비밀번호 확인 :</label>
            <input type="password" name="passcheck" onChange={onChangeHandler}></input>
        
            <div>
                <h3>입력한 패스워드 : {state.pass}</h3>
                <h3>패스워드 확인 : {state.passcheck}</h3>
            </div>
        </>
    )
}

const ReducerFormControl = () => {

    const [state,dispatch] = useReducer(reducer,{
        name : '',
        nickname : ''
    });

    const {name, nickname} = state;
    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
            <label>이름 :</label>
            <input type="text" name="name" onChange={onChangeHandler}></input>
            <br/>
            <label>닉네임 :</label>
            <input type="text" name="nickname" onChange={onChangeHandler}></input>
        
            <div>
                <h3>입력한 이름 : {name}</h3>
                <h3>입력한 닉네임 : {nickname}</h3>
            </div>
        </>
    )   

}

export default ReducerFormControl;