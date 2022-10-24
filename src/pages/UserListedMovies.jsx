import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Navabar from "../components/Navbar";
import Card from '../components/Card';
function UserListedMovies() {
  return (
    <Container>
      <Navabar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "3rem",
          
        }}>
        <h1>MY LIST</h1>
      </div>
    </Container>
  );
}
const Container = styled.div`

`;

export default UserListedMovies;
