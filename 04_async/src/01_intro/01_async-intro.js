

/*
    동기 작업과 비동기 작업

    동기 작업 : 하나의 작업을 실행하고 마친 후에 작업을 순차적으로 실행

    비동기 작업 : 메인 흐름은 멈추지 않은 상태에서 특정 작업들을
    백그라운드에서 처리하며 동시에 처리하는 것 처럼 실행

*/

const sayHello = () => {
    console.log("안녕");
}

setTimeout(sayHello, 3000);
console.log("end");