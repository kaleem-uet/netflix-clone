import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error,setError]=useState("");
  const navigate=useNavigate();
  const handleLogin=async(event)=>{
    event.preventDefault()
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
       setError(error);
      console.log(error.code);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
      <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>      
      <img src={require("../assets/login.jpg")} style={{ width: "100%", height: "100%", position: "fixed", objectFit: "cover", zIndex: -1 }} />  
      <div style={{
        padding: 2,
        backgroundColor: "#000000b0",
        width: "30%",
        gap: "2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h1 style={{}}>Login</h1>
        <Input type={'email'} placeholder='Email' value={email}   onChange={(e)=>setEmail(e.target.value)}/>
        <Input type={'password'} placeholder='Password'  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <Button onClick={((event)=>{handleLogin(event)})} >Login</Button>
        <span><Link to={"/signup"}> Don't have an account</Link> </span>
      </div>
      </div>
    
  )
}

const FormContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
  `
const Input = styled.input`
   ${'' /* padding: 0.5rem; */}
    padding:0.5rem;
    width:90%;
        `
const Button = styled.button`
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;

`
export default Login