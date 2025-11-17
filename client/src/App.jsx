import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDashBoard from "./pages/UserDashBoard";
const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Login/>} />
          
        </Route>
       </Routes>
       <Routes>
         <Route path="dashboard" element={<UserDashBoard/>}>
         
         </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;