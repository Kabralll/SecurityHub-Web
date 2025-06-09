import '../style/recoverToken.css';

const recoverToken = () => {
    return (
      <div>
        <div className='recoverToken'>
          <h4>Recuperação de Token</h4>
          <p>O email deve ser o mesmo da criação do token.</p>
          <input type="text" id='emailField' placeholder=" Digite seu e-mail.."/>
          <div className='recoverTokenButton'>
            <button type='button' id='buttonForm'>Enviar</button>
          </div>
        </div>
      </div>
    );
  };
  
export default recoverToken;
  