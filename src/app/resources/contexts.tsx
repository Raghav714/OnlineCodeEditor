import React, { createContext } from "react";

interface MinimalContextType {
    value: boolean,
    setValue: (value: boolean) => void;
}
export const MinimalContext = createContext<MinimalContextType>({
    value: false,
    setValue: () => { }
})
interface ThemeContextType {
    value: string,
    setValue: (value: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    value: "",
    setValue: () => { }
})
