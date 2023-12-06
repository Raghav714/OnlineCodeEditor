import React, { useState, useEffect, useContext } from "react";
import { MinimalContext, ThemeContext } from "../resources/contexts";
import '../styles/settings.css';

interface SettingsProps {
    isOpen: boolean
}

const Settings: React.FC<SettingsProps> = ({ isOpen }) => {
    const { value: isMinimal, setValue: setIsMinimal } = useContext(MinimalContext);
    const { value: theme, setValue: setTheme } = useContext(ThemeContext);

    const handleToggleMinimal = () => {
        setIsMinimal(!isMinimal)
    }

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value);
    };

    return (
        <div className={`settings-container ${isOpen ? `display` : `hide`}`}>
            <div className="settings-modal">
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
                    <div className="language-dropdown-container">
                        <label htmlFor="language-select">Choose a language: </label>
                        <select className="language-dropdown" id="language-select">
                            <option value="nord">Python</option>
                        </select>
                    </div>
                    <div className="settings-key-mappings">
                        <h2>Key Mappings</h2>
                        <div className="key-mapping">
                            <h3>Run Code</h3>
                            <h3>Shift + Enter</h3>
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
                            <h3>Clear Console</h3>
                            <h3>Cmd/Ctrl + Shift + D</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
