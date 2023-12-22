import React, { useEffect, useState } from 'react';
import '../styles/SettingsLogin.css';

interface LoginFormProps {
    isOpen: boolean,
    email: string,
    setEmail: (email: string) => void,
    isErrorDisplayed: boolean,
    password: string,
    setPassword: (pass: string) => void,
    handleSubmit: () => void,
    switchToCreateAccount: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ isOpen, email, setEmail, isErrorDisplayed, password, setPassword, handleSubmit, switchToCreateAccount }) => {
    const onSubmitWithEnter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit();
    };
    return (
        <div className={`${isOpen ? 'visible' : 'hidden'} login-modal-container`}>
            <h1>Sign In</h1>
            <div className={`login-modal-inner`}>
                <div className="input-container">
                    <h4 className="input-tag">Email address</h4>
                    <input
                        className="input-form login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <form onSubmit={onSubmitWithEnter}>
                    <div className="input-container">
                        <h4 className="input-tag">Password</h4>
                        <input
                            className="input-form login-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                </form>
                <div className={`${isErrorDisplayed ? 'visible' : 'hidden'} error-message`}>Error logging in</div>
                <button onClick={handleSubmit} className="login-button">Sign In</button>
                <h4 onClick={switchToCreateAccount} className="create-account-button">Create Account</h4>
            </div>
        </div>
    )
}

export default LoginForm;
