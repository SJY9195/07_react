const ApiComponent = () => {

    const callApi = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {          //response는 모든것을 불러오고 json형식은 body만 출력해준다!!(우리가 보기 쉽게 핵심만 보여주는것!)
            console.log(response);
            return response.json();
        })
        .then(date => {
            console.log(date);
        })
        .catch(error => {
            console.log("API 호출 중 오류 발생", error);
        }) 
    }

    return (
        <>
            <button onClick={callApi}>api 호출</button>
               
        </>
    )

}

export default ApiComponent;