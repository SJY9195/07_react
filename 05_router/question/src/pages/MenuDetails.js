import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getMenuDetail } from "../api/MenuApi";

const MenuDetail = () => {

    const {id} = useParams();
    
    const [menu,setMenu] = useState({
        name : '',
        price : '',
        detail : {description : ''}
    });

    useEffect(()=>{
        console.log(id);
        setMenu(getMenuDetail(id));
        console.log(getMenuDetail(id));
    }, []);

    return (
        <>
            <h2>{menu.name}</h2>
            <span>가격: \{menu.price}</span>
            <br/>
            <span>설명: {menu.description}</span>
            <br/>
            <button onClick>장바구니 추가</button><button onClick>돌아가기</button>
        </>
    );
}

export default MenuDetail;