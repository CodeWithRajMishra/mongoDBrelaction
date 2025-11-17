import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const userAuthenicate = async () => {
        let api = "http://localhost:8000/students/userauth";
        const token = localStorage.getItem("token");

        if (token) {
            const response = await axios.post(api, {}, { headers: { "auth-token": token } });
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("email", response.data.email);
           navigate("/dashboard");
            console.log(response.data);
        }
        else {
            console.log("No token !!! you have in your Browser!")
        }

    }

    useEffect(() => {
        userAuthenicate();
    }, [])


    return (
        <>
            <h1> Welcom To Home Page</h1>
        </>
    )
}

export default Home;