import githubIcon from '../images/github.svg';
import '../style/About.css';
import ornelas from '../images/lucasOrnelas.jpg';
import cabral from '../images/gustavoCabral.jpg';
import eduardo from '../images/lucasEduardo.jpg';

const About = () => {
    return (
      <div>
        <div className='informationPage'>
          <div className='textPage'>
            <h1>Quem somos?</h1>
            <a>Somos alunos da ETEC Zona Leste, atualmente cursando o segundo ano do curso técnico de Desenvolvimento de Sistemas. Seguindo a agenda de Objetivos de Desenvolvimento Sustentável (ODS), criamos um projeto com o intuito de apresentá-lo na Feira Tecnológica do Centro Paula Souza (FETEPS).</a>
          </div>
          <div className='videoProject'>
            <iframe 
              width="70%" 
              height="400" 
              src="https://www.youtube.com/embed/l-TjNzuDrsY" 
              frameborder="0" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <center>
        <div className='peopleImages'>
          <div className="cabralDiv">
            <img src={cabral} id='sizeImage'/>
            <p>Gustavo Cabral Sant'Ana</p>
            <div className='iconsForm'>
              <a href='https://github.com/Kabralll' target='_blank'><img src={githubIcon} className='githubIcon' /></a>
            </div>
          </div>
          <div className="ornelasDiv">
            <img src={ornelas} id='sizeImage'/>
            <p>Lucas da Silva Ornellas</p>
            <div className='iconsForm'>
              <a href='https://github.com/LOrnellas131' target='_blank'><img src={githubIcon} className='githubIcon' /></a>
            </div>
          </div>
          <div className="eduardoDiv">
            <img src={eduardo} id='sizeImage'/>
            <p>Lucas Eduardo Silva Santos</p>
              <div className='iconsForm'>
              <a href='https://github.com/lolkajigoless' target='_blank'><img src={githubIcon} className='githubIcon' /></a>
            </div>
          </div>
        </div>
        </center>
      </div>
    );
  };
  
  export default About;
  