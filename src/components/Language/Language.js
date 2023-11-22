import { useLanguageContext } from './contexts/LanguageContext';

const Language = () => {
    const { language, toggleLanguage } = useLanguageContext();

    const activeEn = `
        <span id="activeEn">
            <span className="activeLanguage">en</span>
            <span className="notActiveLanguage">bg</span>
        </span>`;

    const activeBg = `
        <span id="activeBg">
            <span className="notActiveLanguage">en</span>
            <span className="activeLanguage">bg</span>
        </span>`;

    return (
        <section id="toggleLanguage" onClick={toggleLanguage}>
            { language === 'en' 
                ? activeEn
                : activeBg
            }
        </section>
    );
};

export default Language;