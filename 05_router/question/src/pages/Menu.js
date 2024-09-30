import {useState, useEffect} from "react";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem"
import {useNavigate} from "react-router-dom";



const Menu = () => {
    const [menuList, setMenuList] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        setMenuList(getMenuList());
    }, []);
    
    const onClickHandler = () => {
        navigate(`/menu/search?name=${menu}`);
    }

    return(
        <>
            <h1>판매 메뉴 목록</h1>        
            <div>
                {menuList.map(menu => <MenuItem key={menu.id} menu={menu}/>)}
            </div>
            <button onClick>주문하기</button>
        </>
    )
}

export default Menu;