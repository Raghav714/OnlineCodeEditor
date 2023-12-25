import React, { createContext } from "react";

interface LayoutContextType {
    value: boolean,
    setValue: (value: boolean) => void;
    isSidebarOpen: boolean,
    setIsSidebarOpen: (value: boolean) => void;
}
export const LayoutContext = createContext<LayoutContextType>({
    value: false,
    setValue: () => { },

    isSidebarOpen: false,
    setIsSidebarOpen: () => { }
})


interface ThemeContextType {
    value: string,
    setValue: (value: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    value: "",
    setValue: () => { }
})


interface AuthContextType {
    isSignedIn: boolean,
    setIsSignedIn: (value: boolean) => void;

    userId: string
    setUserId: (value: string) => void
}

export const AuthContext = createContext<AuthContextType>({
    isSignedIn: false,
    setIsSignedIn: () => { },

    userId: "",
    setUserId: () => { }
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

