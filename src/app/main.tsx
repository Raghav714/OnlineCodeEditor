"use client";
import React, { useState, useEffect, createContext } from "react";
import { LayoutContext, ThemeContext, AuthContext } from "./resources/contexts";
import Resizable from "./components/resizable";
import CodeEditor from "./components/codeEditor";
import Console from './components/console';
import Settings from './components/settings';
import Login from './components/login';
import './styles/main.css';
import InfoIcon from './assets/info-icon.png';



const Home: React.FC = () => {
    const [consoleOutput, setConsoleOutput] = useState<string>("");
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

    //Context states
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>("");
    const [isMinimal, setIsMinimal] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [theme, setTheme] = useState<string>("nord");


    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key == 'Escape') {
                setIsSettingsOpen(prevVal => !prevVal);
            }
            if (e.key === 'm' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsMinimal(prevVal => !prevVal);
            }
            if (e.key === 'd' && e.shiftKey && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setConsoleOutput("");
            }
        }

        window.addEventListener('keydown', handleKeyUp);
        return () => { window.removeEventListener('keydown', handleKeyUp) }
    }, [])


    const handleToggleLogin = () => {
        setIsLoginOpen(prev => !prev);
    }

    return (
        <div className="main-container">
            <title>Online Python Editor</title>
            <AuthContext.Provider value={{
                isSignedIn: isSignedIn,
                setIsSignedIn: setIsSignedIn,
                userId: userId,
                setUserId: setUserId,
            }}>
                <LayoutContext.Provider value={{
                    value: isMinimal,
                    setValue: setIsMinimal,
                    isSidebarOpen: isSidebarOpen,
                    setIsSidebarOpen: setIsSidebarOpen
                }} >
                    <ThemeContext.Provider value={{
                        value: theme,
                        setValue: setTheme
                    }} >
                        <Settings
                            isOpen={isSettingsOpen}
                            setIsOpen={setIsSettingsOpen}
                        />
                        <Login
                            isOpen={isLoginOpen}
                            setIsOpen={setIsLoginOpen}
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
                    </ThemeContext.Provider>
                </LayoutContext.Provider>
            </AuthContext.Provider>

            <div className={`${isMinimal ? 'hidden' : 'visible'} info-icon-container`}>
                <img className="info-icon" src={InfoIcon.src} alt="ESC Button" />
                <div className="info-overlay">
                    Press 'esc' for more info
                </div>
                <button onClick={handleToggleLogin}>
                    Login
                </button>
            </div>

        </div>
    )
}

export default Home;
