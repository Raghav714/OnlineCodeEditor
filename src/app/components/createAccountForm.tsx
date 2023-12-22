import React, { useEffect, useState } from 'react';
import '../styles/SettingsLogin.css';

interface CreateAccountFormProps {
    isOpen: boolean,
    email: string,
    setEmail: (email: string) => void,
    password: string,
    setPassword: (pass: string) => void,
    passwordConfirm: string,
    setPasswordConfirm: (pass: string) => void,
    handleSubmit: () => void,
    switchToLogin: () => void,
    isErrorDisplayed: boolean,
    setIsErrorDisplayed: (val: boolean) => void
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({
    isOpen,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    handleSubmit,
    switchToLogin,
    isErrorDisplayed,
    setIsErrorDisplayed,
}) => {
    const [errorMessage, setErrorMessage] = useState<string>("");


    const valididateAndSubmit = () => {
        if (password !== passwordConfirm) {
            setIsErrorDisplayed(true);
            setErrorMessage("Passwords must match");
        } else if (password.length < 6 || passwordConfirm.length < 6) {
            setIsErrorDisplayed(true);
            setErrorMessage("Password must be at least 6 characters");
        } else if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setIsErrorDisplayed(true);
            setErrorMessage("Invalid email address");
        } else {
            setIsErrorDisplayed(false);
            handleSubmit();

            if (isErrorDisplayed) {
                setErrorMessage("Account creation failed: Email already in use")
            }
        }
    }

    const handleSwitchToLogin = () => {
        setIsErrorDisplayed(false);
        setErrorMessage("");
        switchToLogin();
    }

    const onSubmitWithEnter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <div className={`${isOpen ? 'visible' : 'hidden'} create-account-container`}>
            <h1>Create Account</h1>
            <div className={`create-account-inner`}>
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
                <form onSubmit={onSubmitWithEnter}>
                    <div className="input-container">
                        <h4 className="input-tag">Confirm Password</h4>
                        <input
                            className="input-form login-password"
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                </form>
                <div className={`${isErrorDisplayed ? 'visible' : 'hidden'} error-message`}>{errorMessage}</div>
                <button onClick={valididateAndSubmit} className="login-button">Create Account</button>
                <h4 onClick={handleSwitchToLogin} className="create-account-button">Back To Login</h4>
            </div>
        </div>
    )
}

export default CreateAccountForm;
