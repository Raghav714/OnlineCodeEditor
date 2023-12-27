import React, { useRef, useEffect, useContext } from "react";
import { LayoutContext, ThemeContext } from "../resources/contexts";
import '../styles/SettingsLogin.css';

interface SettingsProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Settings: React.FC<SettingsProps> = ({ isOpen, setIsOpen }) => {
    const { isMinimal: isMinimal, setIsMinimal: setIsMinimal } = useContext(LayoutContext);
    const { value: theme, setValue: setTheme } = useContext(ThemeContext);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); };
    })

    const handleToggleMinimal = () => {
        setIsMinimal(!isMinimal)
    }

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value);
    };

    return (
        <div className={`settings-container ${isOpen ? `visible` : `hidden`}`}>
            <div className="settings-modal" ref={modalRef}>
                <h1>Settings</h1>
                <div className="settings-modal-inner">
                    <button className="submit-button" onClick={handleToggleMinimal}>Toggle Minimal Mode</button>
                    <div className="theme-dropdown-container">
                        <label htmlFor="theme-select">Choose a theme: </label>
                        <select className="theme-dropdown" id="theme-select" value={theme} onChange={handleThemeChange}>
                            <option value="nord">Nord</option>
                            <option value="vscode">VSCode</option>
                            <option value="tokyoNightStorm">Tokyo Night Storm</option>
                            <option value="sublime">Sublime</option>
                            <option value="quietlight">Quietlight</option>
                        </select>
                    </div>
                    <div className="settings-key-mappings">
                        <h2>Key Mappings</h2>
                        <div className="key-mapping">
                            <h3>Run Code</h3>
                            <h3>Shift + Enter</h3>
                        </div>
                        <div className="key-mapping">
                            <h3>Clear Console</h3>
                            <h3>Cmd/Ctrl + Shift + D</h3>
                        </div>
                        <div className="key-mapping">
                            <h3>Settings</h3>
                            <h3>Esc</h3>
                        </div>
                        <div className="key-mapping">
                            <h3>Toggle Minimal Mode</h3>
                            <h3>Cmd/Ctrl + M</h3>
                        </div>
                        <div className="key-mapping">
                            <h3>Find and Replace</h3>
                            <h3>Cmd/Ctrl + F</h3>
                        </div>
                        <div className="key-mapping">
                            <h3>Save File</h3>
                            <h3>Cmd/Ctrl + S</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
