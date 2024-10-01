import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getMenuDetail } from "../api/MenuApi";
import {useNavigate} from "react-router-dom";

const MenuDetail = ({addCart}) => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [menu,setMenu] = useState({
        name : '',
        price : '',
        description : ''
    });

    useEffect(()=>{
        console.log(id);
        setMenu(getMenuDetail(id));
        console.log(getMenuDetail(id));
    }, []);

    const onClickHandler = () => {
        addCart(menu);
    }

    const onClickHandler2 = () => {
        navigate(`/menu`);
    }

    return (
        <>
            <h2>{menu.name}</h2>
            <p>가격: \{menu.price}</p>
            <p>설명: {menu.description}</p>
            <button onClick={onClickHandler}>장바구니 추가</button><button onClick={onClickHandler2}>돌아가기</button>
        </>
    );
};

export default MenuDetail;