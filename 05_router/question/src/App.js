import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetails";
import OderStatus from "./pages/OderStatus";
import { useState } from "react";

function App() {   //오더스테이트 로직을 메뉴디테일에 장바구니 추가 하나 메뉴에 하나

    const [cart, setCart] = useState([]);  //장바구니 상태 관리

    // 메뉴를 장바구니에 추가하는 함수, 담아두는 변수
    const addCart = (menuItem) => {
      setCart((cartMenu) => [...cartMenu, menuItem]);
    };
    

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
           <Route index element = {<Main/>}/>
           <Route path ="main" element={<Main/>}/>
           <Route path ="menu">      {/*element를 쓰면 다음 경로를 인식 못하므로 주의해야 한다!*/}
            <Route index element={<Menu/>}/>
            <Route path=":id" element={<MenuDetail addCart={addCart}/>}/>
          </Route>
          <Route path="orderstatus" element={<OderStatus cart={cart}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
