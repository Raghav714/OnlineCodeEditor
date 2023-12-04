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
                <h1>Settings!</h1>
                <button className="submit-button" onClick={handleToggleMinimal}>ToggleMinimal</button>
                <div>
                    <label htmlFor="theme-select">Choose a theme:</label>
                    <select className="theme-dropdown" id="theme-select" value={theme} onChange={handleThemeChange}>
                        <option value="nord">Nord</option>
                        <option value="vscode">VSCode</option>
                        <option value="tokyoNightStorm">Tokyo Night Storm</option>
                        <option value="sublime">Sublime</option>
                        <option value="quietlight">Quietlight</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Settings;
