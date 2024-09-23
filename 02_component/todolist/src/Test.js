import React from 'react';
const {useState} = React;

const Test = () => {

    const [backgroundColor, setbackgroundColor] = useState("white");
    const [color,setColor] = useState("black");

    const [names, setNames] = useState([]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(1);
    const [inputColor, setInputColor] = useState("");

    const onChangeHandler = e => setInputText(e.target.value);
    const onColorChangeHandler = e => setInputColor(e.target.value);


    const onClickHandler = () => {
        const changeNames = names.concat({
            id:nextId,
            name:inputText,
            isChecked: false 
        });

        setNames(changeNames);
        setNextId(nextId+1); //id를 통해
        setInputText("");

    };

    const onRemove = id => {

        const changeNames = names.filter (name => name.id !== id); // filter의 기능 : 조건에 맞는걸 꺼내서 변수 (changeNames)에 담아준다!
        setNames(changeNames);
    };

    const onToggleCheckbox = id => {
        const updatedNames = names.map(name => name.id === id? {...name, isChecked: !name.isChecked} : name);
        setNames(updatedNames);
    }


    const nameList = names.map(name =>{
        return (<li key={name.id} style={{listStyle: "none"}}>
            <input
            type="checkbox"
            checked={name.isChecked}
            onChange={() => onToggleCheckbox(name.id)}
            />
            <span style={{ color : color , textDecoration : name.isChecked ? "line-through" : "none"}}>{name.name}</span>  
            <button onClick={()=>onRemove(name.id)}>삭제</button>
            </li>);
    });


    return (
        <> 

            <button onClick={()=>setbackgroundColor(backgroundColor === "white" ? "black" : "white")}>다크모드</button>
            <ul style = {{backgroundColor, color}}>
                  {nameList}
                </ul>
            <div>

                <input type = "text" value={inputText} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>추가</button>
                <input type = "text" value={inputColor} onChange={onColorChangeHandler}/>
                <button onClick={()=>setColor(inputColor)}>색변경</button>

            </div>

        </>
    );
};

export default Test;