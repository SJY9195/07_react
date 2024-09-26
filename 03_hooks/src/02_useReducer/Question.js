import {useEffect, useState, useReducer} from "react";

const reducer = (state, action) => {
    console.log(action);


    switch(action.type){
        case 'DECREMENT' :
            return {value:state.value-1}
        case 'INCREMENT' :
            return {value:state.value+1}
        case 'textname' :
            return ({
                ...state,       
                [action.name] : action.value
            });
        default: 
            return state;
    }
}


const UseReducerCounter = () => {

    const [state,dispatch] = useReducer(reducer, {
        value : 0,
        name : ''
    });


    const onChangeHandler = e => dispatch({
        type : "textname",
        name : e.target.name,
        value : e.target.value
});



    return(
    <>
        <h1>Counter : {state.value}</h1>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-1</button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+1</button>
        <input type="text" name = "name" onChange={onChangeHandler}></input>
        <div>
            <h3>입력한 텍스트 : {state.name}</h3>
        </div>

    </>

    )
}

export default UseReducerCounter;