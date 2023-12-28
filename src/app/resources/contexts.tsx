import React, { createContext } from "react";

interface LayoutContextType {
    isMinimal: boolean,
    setIsMinimal: (value: boolean) => void;
    isSidebarOpen: boolean,
    setIsSidebarOpen: (value: boolean) => void;
}
export const LayoutContext = createContext<LayoutContextType>({
    isMinimal: false,
    setIsMinimal: () => { },

    isSidebarOpen: false,
    setIsSidebarOpen: () => { }
})


interface ThemeContextType {
    value: string,
    setValue: (value: string) => void;
    backgroundColor: string,
    textColor: string
}

export const ThemeContext = createContext<ThemeContextType>({
    value: "",
    setValue: () => { },
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
})


interface AuthContextType {
    isSignedIn: boolean,
    setIsSignedIn: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
    isSignedIn: false,
    setIsSignedIn: () => { },
})

interface FileContextType {
    fileSelected: boolean,
    fileId: string,
    setFileId: (id: string) => void,
    setFileTitle: (name: string) => void,
    setCode: (code: string) => void,
}

export const FileContext = createContext<FileContextType>({
    fileSelected: false,
    fileId: "",
    setFileId: () => { },
    setFileTitle: () => { },
    setCode: () => { }
})


interface LanguageContextType {
    language: string,
    setLanguage: (lang: string) => void
    defaultLanguage: string,
    setDefaultLanguage: (lang: string) => void
}
export const LanguageContext = createContext<LanguageContextType>({
    language: "",
    setLanguage: () => { },
    defaultLanguage: "",
    setDefaultLanguage: () => { },
})

