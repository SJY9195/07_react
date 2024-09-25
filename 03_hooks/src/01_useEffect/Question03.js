import {useEffect, useState} from "react";

const Profile = () => {

    const [user, setUser] = useState({username:'', userEmail:''});
    const [isSaved, setIsSaved] = useState(false); // 저장 여부 상태 추가

    const onChangeHandler = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
    };


    const onClickHandler = () => {
        setIsSaved(true); //저장 버튼 눌렀을시 isSaved 값을 true로 설정
        alert("저장되었습니다!");
    };

    useEffect(() => {
        if (isSaved){ // 저장후 로직 수행
            console.log("이름: ", user.username);
            console.log("이메일: ", user.userEmail);
            setIsSaved(false); // 상태 초기화 (한번만 실행되도록)
        }
    }, [isSaved, user]); // isSaved나 user가 변경될 때마다 useEffect 발동

    useEffect(() => {
    }, [user.username]);

    useEffect(()=>{
    }, [user.userEmail]);



    return(
        <>  <h1>프로필 입력</h1>
            <label>이름:</label>
            <input type = "text" name="username" onChange={onChangeHandler}></input>
            <br/>
            <label>이메일:</label>
            <input type = "text" name="userEmail" onChange={onChangeHandler}></input>
            <br/>
            <button onClick={onClickHandler}>저장</button>

            <div>
              <h1>프로필 미리보기</h1>
              <h3>이름 : {user.username}</h3>
              <h3>이메일 : {user.userEmail}</h3>
            </div>

        </>
    );


};

export default Profile;