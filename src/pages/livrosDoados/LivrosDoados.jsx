import oProtagonista from "../../assets/protagonista.png";
import s from "./livrosDoados.module.scss";
import { useEffect, useState } from "react";
import axios  from "axios"

export default function LivrosDoados() {

  const [livros, setLivros] = useState([]);

  const puxarLivros = async () => {
    const resposta = await axios.get("https://apivainolivro.onrender.com/livros-doados");
    setLivros(resposta.data);
  }

  useEffect(() => {
    puxarLivros();
  }, []);

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.container}>
        {livros.map((item) => (
          <section>
            <img src={item.image_url} alt="Capa do livro" />
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.autor}</p>
              <p>{item.categoria}</p>
            </div>
          </section>
        ))}
        <section>
          <img src={oProtagonista} alt="Capa do livro O protagonista" />
          <div>
            <h3>O Protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  );
}
