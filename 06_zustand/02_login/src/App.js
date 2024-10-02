import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
   <>
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
   </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
