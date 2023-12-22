import React, { useRef, useState, useEffect, useContext } from "react";
import '../styles/modal.css';


interface LoginProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Modal: React.FC<LoginProps> = ({ isOpen, setIsOpen }) => {
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



    return (
        <div className={`outer-modal-container ${isOpen ? `visible` : `hidden`}`}>
            <div className='modal-container' ref={modalRef}>

            </div>
        </div >
    )
}

export default Modal;
