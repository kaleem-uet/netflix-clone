import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate  } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { loginStart, loginSuccess,loginFailure } from "../store";
import { firebaseAuth } from "../utils/firebase-config";

export default function Signup() {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setSeterror] = useState(false);
  const [loading,setLoading]=useState("false");
  const [DisplayError, setDisplayError] = useState("");
   const navigate=useNavigate();
  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleSignUp = async (event) => {
    dispatch(loginStart())
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      dispatch(loginSuccess());
    } catch (error) {
      setSeterror(true);
      setDisplayError(error);
      dispatch(loginFailure());
      console.log(error);
    }
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={require("../assets/login.jpg")}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div
        style={{
          padding: 2,
          backgroundColor: "#000000b0",
          width: "30%",
          gap: "2rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{}}>SignUp</h1>
        <Input
          type={"email"}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={"password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={(event) => {
            handleSignUp(event);
          }}
        >
          SignUp
        </Button>
        <span>
          <Link to={"/"}> Don't have an account</Link>{" "}
        </span>

        {Error ? (
          <span style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
            {" "}
            Email Already in Use or Invalid Email{" "}
          </span>
        ) : (
          <span style={{ color: "green", fontSize: 18, fontWeight: "bold" }}>
            Register Sucessfully 
          </span>
        )}
      </div>
    </div>
  );
}

const FormContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  grid-template-rows: 15vh 85vh;
`;
const Input = styled.input`
  padding: 0.5rem;
  width: 90%;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
`;
