import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
           <Route index element = {<Main/>}/>
           <Route path ="main" element={<Main/>}/>
           <Route path ="menu" element={<Menu/>}>
            <Route path=":id" element={<MenuDetail/>}/>

          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
