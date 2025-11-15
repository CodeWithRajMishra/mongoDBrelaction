import axios from "axios";
import { useState, useEffect } from "react";

const Home=()=>{

    
    const userAuthenicate =async()=>{
 let api="http://localhost:8000/students/userauth";
 const token = localStorage.getItem("token");
         
     if (token){
        const response = await axios.post(api, {}, {headers:{"auth-token":token}});
       console.log(response.data);
     }
     else {
         console.log("No token !!! you have in your Browser!")
     }

    }


    useEffect(()=>{
        userAuthenicate();
    }, [])


    return(
        <>
         <h1> Welcom To Home Page</h1>
        </>
    )
}

export default Home;