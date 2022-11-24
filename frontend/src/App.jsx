import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle, MainLayout } from "./styles/GlobalStyles";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Pics = lazy(() => import("./pages/Pics"));
const Settings = lazy(() => import("./pages/Settings"));

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Header />
      <MainLayout>
        <Suspense fallback={<h1>...loading Page</h1>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pics" element={<Pics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}
