import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext, LanguageContext } from "../resources/contexts";
import { login, createUser } from "../resources/pocketbase";
import LoginForm from "./loginForm";
import CreateAccountForm from "./createAccountForm";
import '../styles/SettingsLogin.css';

interface LoginProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const AccountModal: React.FC<LoginProps> = ({ isOpen, setIsOpen }) => {
    const { isSignedIn: isSignedIn, setIsSignedIn: setIsSignedIn } = useContext(AuthContext);
    const modalRef = useRef<HTMLDivElement>(null);
    const { setLanguage: setLanguage, setDefaultLanguage: setDefaultLanguage } = useContext(LanguageContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [displayLogin, setDisplayLogin] = useState<boolean>(true);
    const [isLoginErrorDisplayed, setIsLoginErrorDisplayed] = useState<boolean>(false)
    const [isCreateAccountError, setIsCreateAccountError] = useState<boolean>(false);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setDisplayLogin(true);
                resetState();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); };
    }, [setIsOpen, modalRef])

    const handleSubmit = async () => {
        const files = await login(email, password);
        if (files) {
            setDefaultLanguage(files.defaultLanguage);
            setLanguage(files.defaultLanguage)
            setIsSignedIn(true);
            setIsLoginErrorDisplayed(false);
            setIsOpen(false);
        } else {
            setIsLoginErrorDisplayed(true)
        }
    }

    const handleCreateAccount = async () => {
        let record = await createUser(email, password, passwordConfirm);
        if (!record) {
            setIsCreateAccountError(true);
        } else {
            handleSubmit();
        }
    }

    const handleToggleLoginCreate = () => {
        resetState();
        setDisplayLogin(prev => !prev)
    }

    const resetState = () => {
        setPassword("");
        setPasswordConfirm("");
        setEmail("");
        setIsLoginErrorDisplayed(false);
        setIsCreateAccountError(false);
    }

    return (
        <div className={`account-container ${isOpen ? `visible` : `hidden`}`}>
            <div className="account-modal" ref={modalRef}>
                <LoginForm
                    isOpen={displayLogin}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    isErrorDisplayed={isLoginErrorDisplayed}
                    switchToCreateAccount={handleToggleLoginCreate}
                />
                <CreateAccountForm
                    isOpen={!displayLogin}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    passwordConfirm={passwordConfirm}
                    setPasswordConfirm={setPasswordConfirm}
                    handleSubmit={handleCreateAccount}
                    switchToLogin={handleToggleLoginCreate}
                    isErrorDisplayed={isCreateAccountError}
                    setIsErrorDisplayed={setIsCreateAccountError}
                />
            </div>
        </div >
    )
}

export default AccountModal;
