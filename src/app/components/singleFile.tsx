import React, { useState, useEffect, useRef, useContext } from "react";
import { FileContext, ThemeContext, LanguageContext } from "../resources/contexts";
import { createPortal } from "react-dom";
import { deleteCodeFile, renameCodeFile } from "../resources/pocketbase";
import PythonIcon from "../assets/python-icon.png";
import CppIcon from "../assets/cpp-icon.png";
import JavaIcon from "../assets/java-icon.png";
import OptionsIcon from '../assets/options-icon.png';
import Dropdown from "./dropdown";
import Modal from "./modal";
import '../styles/codeEditor.css';


interface SingleFileProps {
    id: string,
    title: string,
    code: string,
    language,
    lastUpdated: string,
    dateCreated: string,
    handleDeleteFile: (id: string) => void
    handleRenameFile: (id: string, title: string) => void
    onClick: () => void;
}


const SingleFile: React.FC<SingleFileProps> = ({
    id,
    title,
    code,
    language,
    lastUpdated,
    dateCreated,
    handleDeleteFile,
    handleRenameFile,
    onClick
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
    const [isMoreInfoOpen, setIsMoreInfoOpen] = useState<boolean>(false)
    const [isRenaming, setIsRenaming] = useState<boolean>(false);
    const [newFilename, setNewFilename] = useState<string>(title);
    const inputRef = useRef<HTMLInputElement>(null);


    const { setCode: setCode, setFileId } = useContext(FileContext);
    const { backgroundColor: backgroundColor, textColor: textColor } = useContext(ThemeContext);
    // const { language: language } = useContext(LanguageContext);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setNewFilename(title);
                setIsRenaming(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [title]);

    const langToIconMap = () => {
        switch (language) {
            case "python":
                return PythonIcon
            case "java":
                return JavaIcon;
            case "cpp":
                return CppIcon;
            default:
                //TODO CHANGE WHEN DEFAULT IMPLEMENTED 
                return PythonIcon
        }
    }

    const handleFileClick = () => {
        setFileId(id)
        setCode(code)
    }

    const handleOptionsDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDropdownOpen(prev => !prev);
    }


    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleRename = () => {
        setIsRenaming(true);
    }

    const toggleConfirmDelete = () => {
        setIsDeleteOpen(true);
        setIsDropdownOpen(false);
    }

    const handleConfirmDelete = () => {
        deleteCodeFile(id);
        setIsDeleteOpen(false);
        handleDeleteFile(id);
    }

    const renameFile = (e: React.KeyboardEvent) => {
        if (e.key == "Enter") {
            renameFileAction();
        }
    }
    const renameFileAction = async () => {
        if (newFilename == "") {
            setNewFilename(title);
            setIsRenaming(false);
        } else {
            await renameCodeFile(id, newFilename);
            handleRenameFile(id, newFilename);
        }
        setIsRenaming(false);
    }

    const toggleMoreInfo = () => {
        setIsMoreInfoOpen(true);
    }

    return (
        <div className="single-file-outer-container" onClick={onClick}>
            {isRenaming ?
                <input
                    type="text"
                    className="sidebar-input-form"
                    style={{
                        color: textColor
                    }}
                    value={newFilename}
                    ref={inputRef}
                    onChange={(e) => setNewFilename(e.target.value)}
                    onKeyDown={renameFile}
                    autoFocus
                />
                :
                <div className="single-file-container"
                    onClick={handleFileClick}
                    style={{
                        backgroundColor: backgroundColor,
                        color: textColor,
                    }}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="language-icon-container">
                        <img className="language-icon" src={langToIconMap().src} />
                    </div>
                    <h4 className="">{title}</h4>
                    <div
                        className="sidebar-options-container"
                        style={{ backgroundColor: backgroundColor }}
                        onClick={handleOptionsDropdown}
                    >
                        <img
                            className={`options-icon dull`}
                            src={OptionsIcon.src}
                            alt="Options Button"
                        />
                        <Dropdown
                            isOpen={isDropdownOpen}
                            actions={[
                                { tag: "Rename", action: handleRename },
                                { tag: "Delete", action: toggleConfirmDelete },
                                { tag: "More info", action: toggleMoreInfo },

                            ]}
                            position="right"
                        />
                        {createPortal(
                            <>
                                <Modal
                                    content={<ConfirmDelete
                                        fileTitle={title}
                                        handleYesClick={handleConfirmDelete}
                                        handleNoClick={() => setIsDeleteOpen(false)}
                                    />}
                                    isOpen={isDeleteOpen}
                                    setIsOpen={setIsDeleteOpen}
                                />
                                <Modal
                                    content={<div>
                                        <h4>Last Saved: {lastUpdated?.split(":").slice(0, 2).join(":")}</h4>
                                        <h4>Date Created: {dateCreated?.split(" ")[0]}</h4>
                                    </div>
                                    }
                                    isOpen={isMoreInfoOpen}
                                    setIsOpen={setIsMoreInfoOpen}
                                />
                            </>
                            , document.body
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

interface ConfirmDeleteProps {
    fileTitle: string,
    handleYesClick: () => void,
    handleNoClick: () => void,
}
const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ fileTitle, handleYesClick, handleNoClick }) => {
    return (
        <div className="confirm-delete-container">
            <h2>Are you sure you want to delete {fileTitle}?</h2>
            <h4>This action can not be undone</h4>
            <div className="confirm-delete-buttonss">
                <button className="submit-button" onClick={handleYesClick}>Yes</button>
                <button className="submit-button" onClick={handleNoClick}>No</button>
            </div>
        </div>
    )
}

export default SingleFile;


