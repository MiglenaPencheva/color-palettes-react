import { useLanguageContext } from '../../contexts/LanguageContext';

const Language = () => {
    const { language, toggleLanguage } = useLanguageContext();
    
    return (
        <section id="toggleLanguage" onClick={toggleLanguage}>
            { language === 'en' 
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