import { useState } from "react";

const SearchBox = ({setImgUrl}) => {

    const [emojiName, setEmojiName] = useState('');

    const onChangeHandler = e => setEmojiName(e.target.value);

    const onClickHandler = () => {

        fetch("https://api.github.com/emojis")
        .then(r=>r.json())
        .then(result => setImgUrl(result[emojiName])); // []표기법은 key가 문자열에 특수문자가 들어가도 인식할 수 있다! 
    }

    return (
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>
        </>
    )
}

const ImageBox = ({imgUrl}) => {
    return !!imgUrl? <img src={imgUrl} alt ="이모지"/> : <h1>텅</h1>; //삼항연산자를 넣기 위해 !! 해준것!
}

const EmojiContainer = () => {
    const [imgUrl, setImgUrl] = useState('');

    return (
        <>
            <SearchBox setImgUrl={setImgUrl}/>
            <br/>
            <ImageBox imgUrl={imgUrl}/>
        </>
    )
}

export default EmojiContainer;