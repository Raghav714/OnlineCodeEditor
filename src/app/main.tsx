"use client";
import React, { useState, useEffect, createContext } from "react";
import Resizable from "./components/resizable";
import CodeEditor from "./components/codeEditor";
import Console from './components/console';
import Settings from './components/settings';
import './styles/main.css';

interface MinimalContextType {
    value: boolean,
    setValue: (value: boolean) => void;
}

export const MinimalContext = createContext<MinimalContextType>({
    value: false,
    setValue: () => { }
})

const Home: React.FC = () => {
    const [consoleOutput, setConsoleOutput] = useState<string>("");
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const [isMinimal, setIsMinimal] = useState<boolean>(false)


    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key == 'Escape') {
                setIsSettingsOpen(prevVal => !prevVal);
            }
        }

        window.addEventListener('keyup', handleKeyUp);
        return () => { window.removeEventListener('keyup', handleKeyUp) }
    }, [])

    return (

        <div className="main-container">
            <MinimalContext.Provider value={{
                value: isMinimal,
                setValue: setIsMinimal
            }} >
                <Settings
                    isOpen={isSettingsOpen}
                />
                <div className="main-inner-container">

                    <Resizable
                        leftPanel={<CodeEditor
                            setOutput={setConsoleOutput}
                        />}
                        rightPanel={<Console
                            output={consoleOutput}
                        />}
                    />

                </div>
            </MinimalContext.Provider>
        </div>
    )
}

export default Home;
