import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logoLivro from '../../assets/logoLivro.png';
import lupa from '../../assets/lupa.png';
import Inicio from '../../pages/inicio/Inicio.jsx'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados.jsx';
import QueroDoar from '../../pages/queroDoar/QueroDoar.jsx';



export default function Header() {
    return (
        <BrowserRouter>
        <header>
            <section>
                <img src={logoLivro} alt="logo" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav>
                <ul>
                    <li><Link to ="/">Início</Link></li>
                    <li><Link to ="/livros-doados">Livros Doados</Link></li>
                    <li><Link to ="/quero-doar">Quero Doar</Link></li>
                </ul>
            </nav>
            <section>
                <input type="search" name="" id="" placeholder="Oque voce procura?" />
                <button><img src={lupa} alt="Imagem lupa branca" /></button>
            </section>
        </header>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/livros-doados" element={<LivrosDoados />} />
            <Route path="/quero-doar" element={<QueroDoar />} />
        </Routes>

    </BrowserRouter>
    
    )
}