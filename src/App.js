import React from "react";
import RoutesApp from "./routes";
import styled from "styled-components";

const Container = styled.body`
  display:flex;  
  justify-content:center;

`;
function App() {
  return (
    <Container>
      <RoutesApp />
    </Container>
  );
}

export default App;
