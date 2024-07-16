import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/novovideo" element={<NovoVideo />}></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;