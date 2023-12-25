import React, { useState, useEffect, useRef, useContext } from "react";
import { FileContext, ThemeContext } from "../resources/contexts";
import { createPortal } from "react-dom";
import { ThemeBackgroundMap, ThemeColorMap } from "../resources/themes";
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
async function renamePythonFile(fileId: string, newTitle: string) {
    if (pb.authStore.isValid) {
        let record = await pb.collection('python_files').update(fileId, { title: newTitle });
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
    handleRenameFile: (id: string, title: string) => void
    onClick: () => void;
}


const SingleFile: React.FC<SingleFileProps> = ({
    id,
    title,
    code,
    handleDeleteFile,
    handleRenameFile,
    onClick
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
    const [isRenaming, setIsRenaming] = useState<boolean>(false);
    const [newFilename, setNewFilename] = useState<string>(title);
    const inputRef = useRef<HTMLInputElement>(null);


    const { setCode: setCode, setFileId } = useContext(FileContext);
    const { value: theme } = useContext(ThemeContext);


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
        deletePythonFile(id);
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
            await renamePythonFile(id, newFilename);
            handleRenameFile(id, newFilename);
        }
        setIsRenaming(false);
    }

    return (
        <div className="single-file-outer-container" onClick={onClick}>
            {isRenaming ?
                <input
                    type="text"
                    className="sidebar-input-form"
                    style={{
                        color: ThemeColorMap[theme][1][2].value.specs[2].color
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
                        backgroundColor: ThemeBackgroundMap[theme].background,
                        color: ThemeColorMap[theme][1][2].value.specs[2].color,
                    }}
                    onMouseLeave={handleMouseLeave}
                >
                    <h4 className="">{title}</h4>
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


