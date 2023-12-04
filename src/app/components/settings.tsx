import React, { useState, useEffect, useContext } from "react";
import { MinimalContext } from "../main";
import '../styles/settings.css';

interface SettingsProps {
    isOpen: boolean
}

const Settings: React.FC<SettingsProps> = ({ isOpen }) => {
    const { value: isMinimal, setValue: setIsMinimal } = useContext(MinimalContext);

    const handleToggleMinimal = () => {
        setIsMinimal(!isMinimal)
    }
    return (
        <div className={`settings-container ${isOpen ? `display` : `hide`}`}>
            <div className="settings-modal">
                <h1>Settings!</h1>
                <button className="submit-button" onClick={handleToggleMinimal}>ToggleMinimal</button>
            </div>
        </div>
    )
}

export default Settings;
