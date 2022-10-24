import React from "react";
import { BrowserRouter, Route, Router, Routes,Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import TVShows from "./pages/TVShows";
import Player from "./pages/Player";
import UserListedMovies from "./pages/UserListedMovies";
import Movies from "./pages/Movies";
import { firebaseAuth } from "../src/utils/firebase-config";
import { useSelector } from "react-redux";
import {
  onAuthStateChanged 
} from "firebase/auth";

 
function App() {
  const [currentUser, setcurrentUser] = React.useState(null)

  
  // const userHandler=user=>{
  //    user?setcurrentUser(user):setcurrentUser(null)
  // }
  //  React.useEffect(() => {
  //     auth().onAuthStateChanged(user=>userHandler(user));
     
  //   }, []); 
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Netflix />}/>
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
