import '../style/Aplication.css';
import ornelas from '../images/lucasOrnelas.jpg';

const App = () => {
    return (
      <div>
        <center><h2>Aplicativo Security Hub</h2></center>
        <p>O aplicativo disponível para download é a base do nosso projeto. Feito em JavaFX, ele possui funções eficazes e práticas para auxiliar na criação e gerenciamento de senhas</p>
          <div className='div1'>
            <div className='passwordCreating'>
              <h3>Criação de senhas</h3>
              <p>O aplicativo consegue gerar uma senha aleatória com até 15 caracteres, incluindo letras maiúsculas, letras minúsculas, números e caracteres especiais</p>
              <div className='divImage'>
                <img src={ornelas} id='imageSize'/>
              </div>
            </div>
            <div className='Strength'>
              <h3>Avaliação de senha</h3> 
              <p>Nessa opção, você consegue descobrir o nível de proteção que sua senha oferece</p>
              <div className='divImage'>
                <img src={ornelas} id='imageSize'/>
              </div>
            </div>
          </div>
          <div className='div2'>
            <div className='storage'>
              <h3>Armazenamento</h3> 
              <p>O nosso banco de dados consegue armazenar diversas senhas e onde elas são usadas</p>
              <div className='divImage'>
                <img src={ornelas} id='imageSize'/>
              </div>
            </div>
            <div className='token'>
              <h3>Token</h3> 
                <p>Para acessar o banco, será gerado um token aleatória que terá apenas uma única visibilidade. O usuário deve anotar e guardar essa senha, pois é ela que dará acesso as demais</p>
              <div className='divImage'>
                <img src={ornelas} id='imageSize'/>
              </div>
            </div>
          </div>
        <center><div className='downloadDiv'>
          <a href="https://app.box.com/s/1f51j8q8646ywk13mv3whs38i9ssvhl2" target="_blank" id='download'>Baixe o aplicativo</a>
        </div></center>
      </div>
    );
  };
  
  export default App;
  