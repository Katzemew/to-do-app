import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
}

from :react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() 
{
    const[token, setToken] = useState(localStorage.getItem("token")|| "");
    
}