import React, { useState, useEffect, useRef, useContext } from "react";
import { FileContext } from "../resources/contexts";
import '../styles/codeEditor.css'

interface SingleFileProps {
    id: string,
    title: string,
    code: string,
}


const SingleFile: React.FC<SingleFileProps> = ({ id, title, code }) => {
    const { setCode: setCode, setFileId } = useContext(FileContext)

    const handleFileClick = () => {
        setFileId(id)
        setCode(code)
    }

    return (
        <div className="single-file-container" onClick={handleFileClick}>
            {title}
        </div>
    )
}
export default SingleFile;
