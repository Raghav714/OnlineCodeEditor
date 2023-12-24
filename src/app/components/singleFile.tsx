import React, { useState, useEffect, useRef, useContext } from "react";
import { FileContext, ThemeContext } from "../resources/contexts";
import { createPortal } from "react-dom";
import { ThemeBackgroundMap } from "../resources/themes";
import OptionsIcon from '../assets/options-icon.png';
import Dropdown from "./dropdown";
import Modal from "./modal";
import PocketBase from 'pocketbase';
import '../styles/codeEditor.css';


const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function deletePythonFile(fileId: string) {
    if (pb.authStore.isValid) {
        let record = await pb.collection('python_files').delete(fileId);
        return record;
    } else {
        return null
    }
}

interface SingleFileProps {
    id: string,
    title: string,
    code: string,
    handleDeleteFile: (id: string) => void
}


const SingleFile: React.FC<SingleFileProps> = ({ id, title, code, handleDeleteFile }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

    const { setCode: setCode, setFileId } = useContext(FileContext);
    const { value: theme } = useContext(ThemeContext);

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

    }

    const toggleConfirmDelete = () => {
        setIsDeleteOpen(true);
        setIsDropdownOpen(false);
    }

    const handleConfirmDelete = () => {
        deletePythonFile(id);
        setIsDeleteOpen(false);
        handleDeleteFile(id);
    }

    return (
        <div className="single-file-container"
            onClick={handleFileClick}
            style={{ backgroundColor: ThemeBackgroundMap[theme].background }}
            onMouseLeave={handleMouseLeave}
        >
            <h4 className="dull">{title}</h4>
            <div
                className="sidebar-options-container"
                style={{ backgroundColor: ThemeBackgroundMap[theme].background }}
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
                    ]}
                />
                {createPortal(<Modal
                    content={<ConfirmDelete
                        fileTitle={title}
                        handleYesClick={handleConfirmDelete}
                        handleNoClick={() => setIsDeleteOpen(false)}
                    />}
                    isOpen={isDeleteOpen}
                    setIsOpen={setIsDeleteOpen}
                />, document.body
                )}
            </div>

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


