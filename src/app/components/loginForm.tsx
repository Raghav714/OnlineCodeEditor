import React, { useState, useEffect } from 'react';
import { requestPasswordChange } from '../resources/pocketbase';
import '../styles/SettingsLogin.css';

interface LoginFormProps {
    isOpen: boolean,
    email: string,
    setEmail: (email: string) => void,
    isErrorDisplayed: boolean,
    password: string,
    setPassword: (pass: string) => void,
    handleSubmit: (files?: any) => void,
    switchToCreateAccount: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ isOpen, email, setEmail, isErrorDisplayed, password, setPassword, handleSubmit, switchToCreateAccount }) => {
    const [showPassChange, setShowPassChange] = useState<boolean>(false);

    const onSubmitWithEnter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit();
    };

    const handlePassChange = async () => {
        let result = await requestPasswordChange(email);
        if (result) {
            setEmail("");
            setPassword("");
            alert("Email sent. Please check your inbox");
            toggleForgotPassword();
        } else {
            alert("Error. Make sure you are using a valid email")
        }
    }

    const toggleForgotPassword = () => {
        setEmail("");
        setShowPassChange(prev => !prev);
    }

    return (
        <div className={`${isOpen ? 'visible' : 'hidden'} login-modal-container`}>
            <h1>{showPassChange ? 'Change Password' : 'Sign In'}</h1>
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
                {
                    !showPassChange ?
                        <>
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
                                    <div className='error-forgot-pass-container'>
                                        <h4 onClick={toggleForgotPassword} className="forgot-password-button">Forgot Password?</h4>
                                        <p className={`${isErrorDisplayed ? 'visible' : 'hidden'} error-message`}> Error logging in</p>
                                    </div>
                                </div>
                            </form>
                            <button onClick={handleSubmit} className="login-button">Sign In</button>
                            <h4 onClick={switchToCreateAccount} className="create-account-button">Create Account</h4>
                        </> :
                        <>
                            <button onClick={handlePassChange} className="login-button" >Submit</button>
                            <button onClick={toggleForgotPassword} className="create-account-button" >Back to Login</button>
                        </>
                }
            </div>
        </div>
    )
}

export default LoginForm;
