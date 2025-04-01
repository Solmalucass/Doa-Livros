import axios from 'axios';
import iconLivro from '../../assets/Vector.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'; 
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/doar',
    createProxyMiddleware({
      target: 'https://apivainolivro.onrender.com',
      changeOrigin: true,
    })
  );
};
export default function QueroDoar(){
  
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
      setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
      setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
      setAutor(e.target.value)
    }

    const capturaImage_url = (e) => {
      setImage_url(e.target.value)
    }

    const envioDados = async() => {

      const dadosEnviar = {
        titulo,
        categoria,
        autor,
        image_url
    }
      await axios.post("https://apivainolivro.onrender.com/doar", dadosEnviar)
    }

  return (
    <section className={s.sectionQueroDoar}>
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={iconLivro} alt="icone livro aberto" />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" name="" id="" placeholder="Título" onChange={capturaTitulo}/>
        <input type="text" name="" id="" placeholder="Categoria" onChange={capturaCategoria}/>
        <input type="text" name="" id="" placeholder="Autor" onChange={capturaAutor}/>
        <input type="text" name="" id="" placeholder="Link da Imagem"onChange={capturaImage_url} />
        <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>

      </form>
    </section>
  );
}
