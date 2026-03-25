import { createContext, useContext, useEffect, useState } from "react";
import { en } from "./en";
import { ka } from "./ka";

type Lang = "en" | "ka";
type Translations = typeof en;

const languages: Record<Lang, Translations> = { en, ka };

type ContextType = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<ContextType | null>(null);

// ✅ Provider (global state)
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem("lang");
        return saved === "ka" ? "ka" : "en";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    function t(key: string): string {
        const translations = languages[lang];
        const [section, field] = key.split(".");

        if (!section || !(section in translations)) return key;

        const sectionObj = translations[section as keyof Translations];

        if (!field || !(field in sectionObj)) return key;

        return sectionObj[field as keyof typeof sectionObj];
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// ✅ Hook (used in components)
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }
    return context;
}