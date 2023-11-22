import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialLanguageState = {
    lang: 'en'
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language', initialLanguageState);
    console.log(language);
    console.log(language.lang);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => ({lang: prevLanguage.lang === 'en' ? 'bg' : 'en' }));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const languageState = useContext(LanguageContext);

    return languageState;
};