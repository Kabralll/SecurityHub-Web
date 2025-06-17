import switchColor from '../../public/switchColor.svg';
import '../style/lightMode.css';

const LightMode: React.FC = () => {
    const setLightMode = () => {
        document.body.setAttribute("data-theme", "light");
    };

    const setDarkMode = () => {
        document.body.setAttribute("data-theme", "dark");
    };

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div>
            <input
                className="hidden-checkbox"
                type="checkbox"
                id="darkModeToggle"
                onChange={toggleTheme}
            />
            <label htmlFor="darkModeToggle" className="custom-checkbox-label">{/*passando as propriedades de checkbox para a label*/}
                <img src={switchColor} alt="Toggle Theme" />
            </label>
        </div>
    );
};

export default LightMode;
