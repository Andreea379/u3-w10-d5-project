import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:lat/:lon" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
