import { useRef, useState } from "react";
import '../style/contactApi.css';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    setResultMessage("Aguarde por favor...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResultMessage("Mensagem enviada com sucesso!");
      } else {
        setResultMessage(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Something went wrong!");
    } finally {
      formRef.current.reset();
      setTimeout(() => setResultMessage(null), 3000);
    }
  };

  return (
        <form onSubmit={handleSubmit} ref={formRef} id="forms">
        <input type="hidden" name="access_key" value="a70a8adf-94e1-43c8-be14-18eb472ad83f" />

            <div className="textFields">
                <div className='inputsFields'>
                    <input type="text" name='name' id='name' required placeholder=" Digite seu nome.."/>
                    <input type="email" name='email' id='email' required placeholder=" Digite seu e-mail.."/>
                </div>
                <textarea name='message' className='suggestionField' placeholder=" Digite sua mensagem.."></textarea>
            </div>
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <div className='buttonDiv'>
                <button type='submit' className='buttonForm'>Enviar</button>
            </div>

        {resultMessage && <div>{resultMessage}</div>}

        </form>
  );
};

export default ContactForm;
