import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialLanguageState = {
    lang: 'en'
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language', initialLanguageState);
    
    const toggleLanguage = () => {
        if (language.lang === 'en') {
            setLanguage({ lang: 'bg' });
        } else if (language.lang === 'bg') {
            setLanguage({ lang: 'en' });
        }
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