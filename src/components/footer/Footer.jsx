import s from './footer.module.scss';
import facebookicon from '../../assets/facebookicon.png';
import twittericon from '../../assets/twittericon.png';
import youtubeicon from '../../assets/youtubeicon.png';
import linkedinicon from '../../assets/linkedinicon.png';
import instagramicon from '../../assets/instagramicon.png';
export default function Footer() {
    return (
      <footer className={s.footer}>
          <section className={s.redes}>
            <p>181</p>
            <nav>
              <a href="">< img src={facebookicon} alt='icone do Facebook' /></a>
              <a href="">< img src={twittericon} alt='icone do Twitter' /></a>
              <a href="">< img src={youtubeicon} alt='icone do Youtube' /></a>
              <a href="">< img src={linkedinicon} alt='icone do Linkedin' /></a>
              <a href="">< img src={instagramicon} alt='icone do instagram'/></a>
            </nav>
          </section>
          <section className={s.copyright}>
              <p> Layout desenvolvido pela Vai na Web para fins educativos - 2024 </p>
          </section>
      </footer>
    );
  }
  