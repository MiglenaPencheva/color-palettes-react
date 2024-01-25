import { useLocation } from 'react-router-dom';
import { useLanguageContext } from '../../contexts/LanguageContext';

const Language = () => {
    const location = useLocation();
    const { pathname } = location;
    const { language, toggleLanguage } = useLanguageContext();

    let atHome = pathname === '';
    console.log(atHome);

    return (

        <section className={atHome && 'home__language'} id="toggleLanguage" 
            onClick={toggleLanguage}>
            {language.lang === 'en'
                ? <span id="activeEn">
                    <span className="activeLanguage">en</span>
                    <span className="notActiveBg">bg</span>
                </span>
                : <span id="activeBg">
                    <span className="notActiveEn">en</span>
                    <span className="activeLanguage">bg</span>
                </span>
            }
        </section>
    );
};

export default Language;