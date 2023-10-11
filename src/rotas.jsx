import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyle'
import Home from './pages/LandingPage/Home'
import Login from './pages/Login/Login'
// import Cadastro from './pages/Cadastro/Cadastro'
import PagTafefas from './pages/PagTarefas/PagTarefas'


const Rotas = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/login' element={<Login />} />
                {/* <Route path='/cadastro' element={<Cadastro />} /> */}
                <Route path='/PagTafefas' element={<PagTafefas />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas