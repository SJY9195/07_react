import Header from "../components/Header"
import Navbar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {

    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>  {/* 갈아끼워주는 기능 */}
        </>
    )
}

export default Layout;