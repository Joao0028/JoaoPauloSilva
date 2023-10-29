import "./Styles/estilosGlobais.scss";
// import PaginaComponentes from './Paginas/PaginaComponentes'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PaginaDeCertificados from "./Paginas/PaginaDeCertificados";
// import { NaoEncontrada } from "./Paginas/NaoEncontrada";
// import PaginaDeProjetos from "./Paginas/PaginaDeProjetos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";

const PaginaComponentes = lazy(() => import("./Paginas/PaginaComponentes"));
const NaoEncontrada = lazy(() => import("./Paginas/NaoEncontrada"));
const PaginaDeProjetos = lazy(() => import("./Paginas/PaginaDeProjetos"));
const PaginaDeCertificados = lazy(() => import("./Paginas/PaginaDeCertificados"));

export default function App() {
  return (
    <>
      <ToastContainer limit={1} />
      <BrowserRouter>
        <Suspense fallback={<h1 className="font-bold text-[22px] pl-2 pt-2">Carregando...</h1>}>
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
