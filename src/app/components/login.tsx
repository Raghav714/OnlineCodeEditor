import React, { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../resources/contexts";
import '../styles/modals.css';
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
        console.error('Error logging in:', error);
        return null;
    }
}

interface LoginProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Login: React.FC<LoginProps> = ({ isOpen, setIsOpen }) => {
    const {
        isSignedIn: isSignedIn,
        setIsSignedIn: setIsSignedIn,
        setUserId: setUserId
    } = useContext(AuthContext);
    const modalRef = useRef<HTMLDivElement>(null);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); };
    })

    const handleSubmit = async () => {
        try {
            const files = await checkAuth(email, password);
            if (files) {
                setIsSignedIn(true);
                setUserId(files.userId);
                setIsOpen(false);
            }

        } catch (error) {
            console.error("Error in fetching files", error);
        }
    }


    return (
        <div className={`login-container ${isOpen ? `visible` : `hidden`}`}>
            <div className="login-modal" ref={modalRef}>
                <h1>Sign in</h1>
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
                    <button onClick={handleSubmit} className="login-button">Sign In</button>
                    <h4 className="create-account-button">Create Account</h4>
                </div>

            </div>
        </div >
    )
}

export default Login;
