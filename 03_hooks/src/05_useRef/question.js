import { useEffect, useState,useCallback,useRef } from "react";

const Board = () => {

    const [text, setText] = useState({
        title : '',
        context : '',
        search : '',
        comment : ''
    });
    const [idCounter, setIdCounter] = useState(0);

    const [commentidCounter, setCommentIdCounter] = useState(0);

    const [posts, setPosts] = useState([]); // 게시된 글들을 저장하는 상태

    const [comments, setComments] = useState([]); //댓글 들을 저장하는 상태

    const onChangeHandler = e => {
        setText({
            ...text,
            [e.target.name] : e.target.value
        });
    };

    const filteredPosts = posts.filter((post)=>
    post.title.includes(text.search) || post.context.includes(text.search)
);



    // 게시 버튼 클릭 시 제목과 내용을 저장
    const onClickHandler = () => {
        setPosts([...posts, { id : idCounter, title : text.title, context : text.context}]); //  스프레드는 객체를 나열! 새로운 게시글 추가
        setText({
            title: '',
            context : '',
            search:''
        });    // 입력 필드 초기화
        setIdCounter(idCounter+1);
    };

    const onCommentHandler = (postId) => {
        setComments({
            ...comments,
            [postId]: [...(comments[postId] || []), text.comment]
        });
        setText({
            ...text,
            comment:''
        });
    };

    // 게시글 삭제 핸들러
    const onDeleteHandler = id => {
       setPosts(posts.filter(post => post.id !== id));
       const newComments = {...comments};
       delete newComments[id];
       setComments(newComments);
    }

        return(
            <>
            <h1>게시판</h1>
            <br/>
            <input type = "text" name="title" placeholder="제목"
            value={text.title} onChange={onChangeHandler}/>
            <br/>
            <input type = "textarea" style={{padding : "10px"}} name="context" placeholder="내용" value={text.context} onChange={onChangeHandler}/>
            <br/>
            <button onClick={onClickHandler}>게시</button>
            <br/>
            <input type = "text" name="search" placeholder="검색" value={text.search} onChange={onChangeHandler}/>
            
            <div>

                {filteredPosts.map((post) => {
                    return(<li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.context}</p>
                        <button onClick={()=>onDeleteHandler(post.id)}>삭제</button>
                        <br/>
                        <input type = "textarea" style={{padding : "10px"}} name="comment" value={text.comment} placeholder="댓글 작성" onChange={onChangeHandler}/>
                        <br/>
                        <button onClick={()=>onCommentHandler(post.id)}>댓글 달기</button>  {/*onclickhandler 넣어서 map으로 댓글텍스트 뿌려주면된다*/}
                        <ul>
                                {(comments[post.id] || []).map((comment, index) => (<li key={index}>{comment}</li>))}    
                        </ul>    
                 
                    </li>)
                    })
                }
                
            </div>
            </>
        );
};

export default Board;