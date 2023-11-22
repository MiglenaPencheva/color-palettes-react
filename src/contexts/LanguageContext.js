import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialLanguageState = {
    language: 'en'
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage('language', initialLanguageState);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage.language === 'en' ? 'bg' : 'en'));
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