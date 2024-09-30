import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle ={
        backgroundColor : "blue"
    }

    return (
        <div>
            <ul>
                <li><NavLink to={"/"} style={({isActive}) => isActive? activeStyle : undefined}>home</NavLink></li>
                <li><NavLink to={"/main"} style={({isActive}) => isActive? activeStyle : undefined}>main</NavLink></li>
                <li><NavLink to={"/mypage"} style={({isActive}) => isActive? activeStyle : undefined}>mypage</NavLink></li>
                <li><NavLink to={"/login"} style={({isActive}) => isActive? activeStyle : undefined}>login</NavLink></li>
            </ul>
        </div>
    )

}
export default Navbar;