import { useLanguageContext } from '../../contexts/LanguageContext';

const Language = () => {
    const { language, toggleLanguage } = useLanguageContext();

    return (
        <section id="toggleLanguage" onClick={toggleLanguage}>
            { language.language === 'en' 
                ? <span id="activeEn">
                    <span className="activeLanguage">en</span>
                    <span className="notActiveLanguage">bg</span>
                </span>
                : <span id="activeBg">
                    <span className="notActiveLanguage">en</span>
                    <span className="activeLanguage">bg</span>
                </span>
            }
        </section>
    );
};

export default Language;