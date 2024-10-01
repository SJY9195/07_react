import {useState, useEffect} from "react";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

   
const Menu = () => {
    const [menuList, setMenuList] = useState([]);
    const navigate = useNavigate();     //이벤트 핸들러에서는 Link를 못쓰므로 navigate를 써야한다!!


    useEffect(()=>{
        setMenuList(getMenuList());
    }, []);

    const onClickHandler = () => {
         navigate(`/orderstatus`);   
       }

    return(
        <>
            <h1>판매 메뉴 목록</h1>        
            <div>
                {menuList.map(menu => <MenuItem key={menu.id} menu={menu}/>)}
            </div>
            <br/>
            <button onClick={onClickHandler}>주문하기</button>
        </>
    )
}

export default Menu;