import "./Styles/estilosGlobais.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";
import Carregando from "./Paginas/Carregando";

const PaginaComponentes = lazy(() => import("./Paginas/PaginaComponentes"));
const NaoEncontrada = lazy(() => import("./Paginas/NaoEncontrada"));
const PaginaDeProjetos = lazy(() => import("./Paginas/PaginaDeProjetos"));
const PaginaDeCertificados = lazy(() => import("./Paginas/PaginaDeCertificados"));

export default function App() {
  return (
    <>
      <ToastContainer limit={1} />
      <BrowserRouter>
        <Suspense fallback={<Carregando/>}>
          <Routes>
            <Route path="/" element={<PaginaComponentes />} />
            <Route path="/Certificados" element={<PaginaDeCertificados />} />
            <Route path="/Projetos" element={<PaginaDeProjetos />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
