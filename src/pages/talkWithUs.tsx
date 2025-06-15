import ContanctApi from '../components/ContactApi';
import '../style/talkWithUs.css';


const talkWithUs = () => {
    return (
        <div className='talkWithUs'>
            
            <div className='pageTalkWithUsText'>
                <p id='contactUs'>Contate-nos!</p>
                <p>Para que possamos fazer melhorias no nosos site e aplicativos precisamos do seu feedback, agradecemos desde já.</p>
            </div>
            <ContanctApi />
        </div>
    );
  };
  
  export default talkWithUs;
  