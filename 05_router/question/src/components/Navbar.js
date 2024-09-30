import {NavLink} from "react-router-dom"

const Navbar = () => {
    const activeStyle = {
        backgroundColor : "blue"
    }


    return (
        <div>
          <ul>
            <li><NavLink to={"/main"} style={({isActive}) => isActive? activeStyle : undefined}>홈</NavLink></li>
            <li><NavLink to={"/menu"} style={({isActive}) => isActive? activeStyle : undefined}>메뉴</NavLink></li>
            <li><NavLink to={"/orderstatus"} style={({isActive}) => isActive? activeStyle : undefined}>주문 확인</NavLink></li>
          </ul> 
        </div>
    )
}

export default Navbar;