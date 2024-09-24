import { useEffect, useState } from "react";

const TimerApp = () => {
  const [timers, setTimers] = useState([]);
    const [count,setCount] = useState(1);


    const addTimer = () =>{

        if(timers.length<5){
            setTimers([...timers,{id:count}]);
            setCount(count+1);
        }
    };

    const deleteTimer = (id) => {
        setTimers(timers.filter((timer)=>timer.id !== id));
    }


    return (
        <>
            <div>
            <button onClick={addTimer}>타이머 추가</button>
                {timers.map((timer)=>{<Timer id={timer.id} onDelete={deleteTimer}/>
                })}
            </div>
        </>
    );
};

const Timer = ({ id, onDelete }) => {
    const [second, setSecond] = useState(0);

    useEffect(()=>{const interval = setInterval(()=>{
        setSecond(value => value+1);
    }, 1000);

    return ()=> clearInterval(interval);
},[])

    return (
    <>
        <p>타이머 {id} : {second}초</p>
        <button onClick={()=>onDelete(id)}>삭제</button>
    </>
    )
}

export default Timer;
