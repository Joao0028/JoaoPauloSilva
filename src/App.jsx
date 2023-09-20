import './Styles/estilosGlobais.scss'
import PaginaComponentes from './Paginas/PaginaComponentes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaDeCertificados from './Paginas/PaginaDeCertificados'
import { NaoEncontarda } from './Paginas/NaoEncontrada'
import PaginaDeProjetos from './Paginas/PaginaDeProjetos'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  function notify() {
    toast.success("Formulário enviado com successo!")
  }

  return (
    <>
      <ToastContainer limit={1} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaComponentes />} />
          <Route path='/Certificados' element={<PaginaDeCertificados />} />
          <Route path='/Projetos' element={<PaginaDeProjetos />} />
          <Route path='*' element={<NaoEncontarda />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}