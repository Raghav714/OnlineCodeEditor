import React, { useState, useEffect, useRef, useContext } from "react";
import { FileContext, ThemeContext } from "../resources/contexts";
import { createPortal } from "react-dom";
import { ThemeBackgroundMap } from "../resources/themes";
import OptionsIcon from '../assets/options-icon.png';
import Dropdown from "./dropdown";
import Modal from "./modal";
import '../styles/codeEditor.css';

interface SingleFileProps {
    id: string,
    title: string,
    code: string,
}


const SingleFile: React.FC<SingleFileProps> = ({ id, title, code }) => {
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

    const handleDelete = () => {
        setIsDeleteOpen(true);
        setIsDropdownOpen(false);
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
                        { tag: "Delete", action: handleDelete },
                    ]}
                />
                {createPortal(<Modal
                    isOpen={isDeleteOpen}
                    setIsOpen={setIsDeleteOpen}
                />, document.body
                )}

            </div>

        </div>
    )
}
export default SingleFile;
