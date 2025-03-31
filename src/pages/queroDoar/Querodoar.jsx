import axios from 'axios';
import iconLivro from '../../assets/Vector.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'; 

export default function QueroDoar(){
  
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [image_url, setImagem_url] = useState("")

    const capturaTitulo = (e) => {
      setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
      setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
      setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
      setImagem_url(e.target.value)
    }

    const EnvioDados = async() => {

      const dadosEnviar = {
        titulo,
        categoria,
        autor,
        image_url
    }
      await axios.post("https://flask-api-htrv.onrender.com/quero-doar", dadosEnviar)
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
        <input type="text" name="" id="" placeholder="Link da Imagem"onChange={capturaImagem} />
        <input type="submit" value="Doar" className={s.buttonDoar} onClick={EnvioDados}/>

      </form>
    </section>
  );
}
