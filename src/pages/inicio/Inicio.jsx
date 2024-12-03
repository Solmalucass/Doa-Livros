import s from './inicio.module.scss';
import comunidade from '../../assets/comunidade.png';
import leitura from '../../assets/leitura.png';
import transformacao from '../../assets/transformacao.png';
import balanca from '../../assets/balanca.png';


export default function Inicio() {
  return (
    <main>
      <section className={s.Sectionlivro}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>

      <section className={s.Sectionporque}>
        <h2>Por que devo doar?</h2>
        
        <div className={s.Cards}>
          <section>
            <img src={comunidade} alt="icone representando uma comunidade de pessoas" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>

          <section>
            <img src={leitura} alt="icone representando o ato de ler" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>

          <section>
            <img src={transformacao} alt="icone representando uma comunidade de pessoas se fortalecendo" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>

          <section>
            <img src={balanca} alt="icone representando balanca social" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>
        </div>
      </section>
    </main>
  );
}

