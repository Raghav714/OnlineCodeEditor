"use client";
import React, { useState, useEffect, useRef } from "react";
import { LayoutContext, ThemeContext, AuthContext } from "./resources/contexts";
import Resizable from "./components/resizable";
import CodeEditor from "./components/codeEditor";
import Console from './components/console';
import SettingsModal from './components/settingsModal';
import AccountModal from './components/accountModal';
import './styles/main.css';
import InfoIcon from './assets/info-icon.png';
import AccountIcon from './assets/account-icon.png';
import PocketBase from 'pocketbase';
const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function logout() {
    try {
        pb.authStore.clear();
    } catch (error) {
        console.error('Error logging out', error);
    }
}

const Home: React.FC = () => {
    const [consoleOutput, setConsoleOutput] = useState<string>("");
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
    const logoutRef = useRef<HTMLDivElement>(null);

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
                setIsLogoutOpen(false);
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

        const handleCloseLogout = (event: MouseEvent) => {
            if (logoutRef.current && !logoutRef.current.contains(event.target as Node)) {
                setIsLogoutOpen(false);
            }
        }

        document.addEventListener('mousedown', handleCloseLogout);
        window.addEventListener('keydown', handleKeyUp);
        return () => {
            document.removeEventListener('mousedown', handleCloseLogout);
            window.removeEventListener('keydown', handleKeyUp);
        }

    }, [])


    const handleLogin = () => {
        setIsLoginOpen(prev => !prev);
    }
    const toggleIsLogoutOpen = () => {
        setIsLogoutOpen(prev => !prev);
    }
    const handleLogout = () => {
        setIsLogoutOpen(false);
        setIsSignedIn(false);
        setUserId("");
        logout();
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
                        <SettingsModal
                            isOpen={isSettingsOpen}
                            setIsOpen={setIsSettingsOpen}
                        />
                        <AccountModal
                            isOpen={isLoginOpen}
                            setIsOpen={setIsLoginOpen}
                        />
                        <div className={`${isMinimal ? 'hidden' : 'visible'} account-button-container`} ref={logoutRef}>
                            <img className="account-button" onClick={isSignedIn ? toggleIsLogoutOpen : handleLogin} src={AccountIcon.src} />
                            <button className={`${isLogoutOpen ? 'visible' : 'hidden'} logout-button`} onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                        <div className="main-inner-container">
                            <Resizable
                                leftPanel={<CodeEditor setOutput={setConsoleOutput} />}
                                rightPanel={<Console output={consoleOutput} />}
                                draggerWidth={4}
                                draggerColor="#7E4B0E"
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
            </div>

        </div>
    )
}

export default Home;
