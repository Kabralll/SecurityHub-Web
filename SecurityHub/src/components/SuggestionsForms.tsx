import '../style/SuggestionsForms.css';
import githubIcon from '../images/github.svg';

const SuggestionsForms = () => {
    return(
        <div className='forms'>
            <div className="textFields">
                <div className='inputs'>
                    <input type="text" id='nameField' placeholder=" Digite seu nome.."/>
                    <input type="text" id='emailField' placeholder=" Digite seu e-mail.."/>
                </div>
                <textarea className='suggestionField' placeholder=" Digite sua mensagem.."></textarea>
                <button type='button' className='buttonForm'>Enviar</button>
            
                <div className='iconsForm'>
                    <a href='https://github.com/Kabralll' target="_blank"><img src={githubIcon} id='githubIcon' /></a>
                </div>
            </div>
            <div className='pageText'>
                <p>Sua opinião é importante</p>
                <p id='contactUs'>Contate-nos</p>
                <p>Para que possamos fazer melhorias no nosos site e aplicativos precisamos do seu feedback, agradecemos desde já.</p>
            </div>
        </div>
    )
}

export default SuggestionsForms;