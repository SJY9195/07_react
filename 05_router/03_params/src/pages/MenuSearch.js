import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import MenuItem from "../components/MenuItem";
import { searchMenu } from "../api/MenuApi";

const MenuSearch = () => {

    const [search] = useSearchParams();

    const searchMenuName = search.get("menuName");
    const [menuList,setMenuList] = useState([]);

    useEffect(()=>{
        setMenuList(searchMenu(searchMenuName));
    }, [])

    return (
        <>
            <h1>검색 결과</h1>
            <div className="MenuBox">
                {menuList.map(menu => 
                <MenuItem key={menu.menuCode} menu={menu}/>
                )}
            </div>
        </>
    )
}

export default MenuSearch;