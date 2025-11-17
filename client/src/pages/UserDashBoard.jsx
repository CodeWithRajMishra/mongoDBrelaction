import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const UserDashBoard=()=>{
const navigate = useNavigate();


  useEffect(()=>{
 
     if (!localStorage.getItem("name")){
        navigate("/");
     }


  }, [])



 const logout=()=>{
    localStorage.clear();
    navigate("/");
 }


    return(
        <>
          <h1> Welcome User DashBoard</h1>
          <div style={{backgroundColor:"lightblue", padding:"10px"}}>
             Welcome {localStorage.getItem("name")} ! Email: {localStorage.getItem("email")} 
          
          <a href="#" onClick={logout}>Logout</a>
          </div>
        </>
    )
}

export default UserDashBoard;