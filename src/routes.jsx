import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import PageNotFound from "./pages/PageNotFound";
import PageBase from "./pages/PageBase";

 /* Organizador de rotas do site, onde trabalha o conceito de rotas aninhadas
  se há varios componentes que são reutilizados  nas paginas, ou seja, componentes padrões é necessario criar uma pagina base que carrega esse compoenntes
  e então nas rotas criar um route que vai recarregar por padrão esses componentes com o path= / e o element de pagina base e dentro desse route coloca o
  restante das rotas do site, nesse casoo para carrgar o home que é primeira pagina no lugar de path=/ coloca index 
  */
function AppRoute() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageBase/>}>    
                        <Route index element={<Home/>}></Route>
                        <Route path="*" element={<PageNotFound/>}></Route>
                        <Route path="/sobre" element={<Sobre/>}></Route>
                        <Route path="/projetos" element={<Projetos/>}></Route>
                        <Route path="/contato" element={<Contatos/>}></Route>
                    </Route>
                    
                </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;