import '../style/SuggestionsForms.css';

const SuggestionsForms = () => {
    return(
        <div className='forms'>
            <div className="textFields">
                <div className='inputs'>
                    <input type="text" id='nameField' placeholder=" Digite seu nome.."/>
                    <input type="text" id='emailField' placeholder=" Digite seu e-mail.."/>
                </div>
                <textarea className='suggestionField' placeholder=" Digite sua mensagem.."></textarea>
            </div>
            <div className='pageText'>
                <p>Sua opinião é importante</p>
                <p id='contactUs'>Contate-nos</p>
                <p>Para que possamos fazer melhorias no nosos site e aplicativos precisamos do seu feedback, agradecemos desde já.</p>
                <button type='button' className='buttonForm'>Enviar</button>
            </div>
        </div>
    )
}

export default SuggestionsForms;