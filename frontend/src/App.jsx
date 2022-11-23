import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Pics from "./pages/Pics";
import Settings from "./pages/Settings";

import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pics" element={<Pics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
