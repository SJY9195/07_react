import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getMenuDetail } from "../api/MenuApi";

const MenuDetail = () => {

    const {menuCode} = useParams();  //userParams 는 menuCode 구조분해할당된것을 꺼내와주는 역할이다!

    const [menu,setMenu] = useState({
        menuName : '',
        menuPrice : '',
        categoryName : '',
        detail : {description:'', image:''}
    });

    useEffect(()=>{
        console.log(menuCode);
        setMenu(getMenuDetail(menuCode));
        console.log(getMenuDetail(menuCode));
    },[]);

    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름 : {menu.menuName}</h3>
            <h3>메뉴 가격 : {menu.menuPrice}</h3>
            <h3>메뉴 카테고리 : {menu.categoryName}</h3>
            <h3>메뉴 설명 : {menu.detail.description}</h3>
            
            <img src={menu.detail.image} style={{maxWidth:500}}/>
        </>
    );

}
export default MenuDetail;