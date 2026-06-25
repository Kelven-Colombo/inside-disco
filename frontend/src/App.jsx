import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./routes/Home";
import Favoritos from "./routes/Favoritos";

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #2d271d 40%, #5c4b2a);
`;

function App() {
  return (
    <PageContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </PageContainer>
  );
}

export default App;
