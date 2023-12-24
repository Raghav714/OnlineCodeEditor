import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../resources/contexts";
import '../styles/SettingsLogin.css';
import LoginForm from "./loginForm";
import CreateAccountForm from "./createAccountForm";
import PocketBase from 'pocketbase';
const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function checkAuth(email: string, password: string) {
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);

        if (pb.authStore.isValid) {
            return {
                isValid: true,
                userId: pb.authStore.model?.id,
            }
        } else {
            return null
        }
    } catch (error) {
        console.error('Errorrr logging in:', error);
        return null;
    }
}

async function createUser(email: string, password: string, passwordConfirm: string) {
    try {
        const user = await pb.collection('users').create({
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm,
        });
        return user;
    } catch (error) {
        console.error('Error in creating account', error);
        return null;
    }
}

interface LoginProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const AccountModal: React.FC<LoginProps> = ({ isOpen, setIsOpen }) => {
    const {
        isSignedIn: isSignedIn,
        setIsSignedIn: setIsSignedIn,
        setUserId: setUserId
    } = useContext(AuthContext);
    const modalRef = useRef<HTMLDivElement>(null);

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
                // resetState();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); };
    })

    const handleSubmit = async () => {
        const files = await checkAuth(email, password);
        if (files) {
            setIsSignedIn(true);
            setIsLoginErrorDisplayed(false);
            setUserId(files.userId);
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
        // resetState();
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
