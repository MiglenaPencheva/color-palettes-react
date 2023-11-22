import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const storedLanguage = useLocalStorage('language', 'en')[0];
    const initialLanguage = typeof storedLanguage === 'string' ? storedLanguage : 'en';
    
    const [language, setLanguage] = useLocalStorage('language', initialLanguage);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'bg' : 'en'));
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