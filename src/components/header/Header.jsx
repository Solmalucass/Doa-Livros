import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import logoLivro from '../../assets/logoLivro.png';
import lupa from '../../assets/lupa.png';
import Inicio from '../../pages/inicio/Inicio.jsx'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados.jsx';
import QueroDoar from '../../pages/queroDoar/QueroDoar.jsx';
import s from './header.module.scss'


export default function Header() {
    return (
        <BrowserRouter>
        <header className={s.header}>
            <section className={s.logoheader}>
                <img src={logoLivro} alt="logo livro aberto" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.navheader}>
                <ul>
                    <li><Link className={s.link} to ="/">Início</Link></li>
                    <li><Link className={s.link} to ="/livros-doados">Livros Doados</Link></li>
                    <li><Link className={s.link} to ="/quero-doar">Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={s.buscar}>
                <input type="search" name="" id="" placeholder="O que você procura?" />
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