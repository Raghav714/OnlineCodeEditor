import React, { useEffect, useContext, useState, useRef } from 'react';
import { AuthContext, LayoutContext, FileContext, ThemeContext, LanguageContext } from '../resources/contexts';
import { ThemeBackgroundMap } from '../resources/themes';
import { addCodeFile, getCodeFiles } from '../resources/pocketbase';
import { LanguageMap, LanguageDefaultCode } from '../resources/languages';
import '../styles/codeEditor.css';
import SingleFile from './singleFile';

const Sidebar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<any>([]);
    const [title, setTitle] = useState<string>("");
    const [showInput, setShowInput] = useState<boolean>(false);
    const { isSignedIn: isSignedIn } = useContext(AuthContext);
    const { value: theme, backgroundColor: backgroundColor, textColor: textColor } = useContext(ThemeContext)
    const { isSidebarOpen: isSidebarOpen } = useContext(LayoutContext);
    const { language: language, setLanguage: setLanguage, defaultLanguage: defaultLanguage } = useContext(LanguageContext);
    const {
        fileId: fileId,
        setFileId: setFileId,
        setCode: setCode,
        setFileTitle: setFileTitle } = useContext(FileContext)

    const fetchData = async () => {
        if (isSignedIn) {
            let data = await getCodeFiles();
            setFiles(data);
        }
    };

    useEffect(() => {
        if (!isSignedIn) {
            setCode("");
            setFileTitle("")
            setFiles([])
        } else {
            fetchData();
        }
    }, [isSignedIn, fileId]);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowInput(false);
                setTitle("");
            }
        }


        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const addFile = async () => {
        setShowInput(true)
    }


    const handleSubmitFile = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const parts = title.split(".");
            const filetype = parts.pop();
            let newTitle = title;
            let newFile;
            if (filetype && filetype in LanguageMap) {
                newTitle = parts.join(".");
                setLanguage(LanguageMap[filetype])
                newFile = await addCodeFile(newTitle, LanguageMap[filetype]);
                setCode(LanguageDefaultCode[LanguageMap[filetype]])
            } else {
                setLanguage(defaultLanguage);
                newFile = await addCodeFile(newTitle, defaultLanguage);
                setCode(LanguageDefaultCode[defaultLanguage]);
            }

            if (!newFile)
                console.error("Error creating new file");
            else {
                setFiles([...files, newFile]);
                setFileId(newFile.id);
                setFileTitle(newFile.title);
                setTitle("");
                setShowInput(false);
            }
        }
    }


    const handleDeleteFile = (id: string) => {
        const updatedFiles = files.filter((file: any) => file.id !== id);
        setCode("");
        setFileTitle("")
        setFiles(updatedFiles);
    }

    const handleRenameFile = (id: string, newTitle: string) => {
        const updatedFiles = files.map((file: any) => {
            if (file.id === id) {
                return { ...file, title: newTitle };
            }
            return file;
        });
        if (fileId == id) {
            setFileTitle(newTitle);
        }
        setFiles(updatedFiles);
    }

    const handleClickTitle = (singleFileTitle: string, singleFileLanguage: string) => {
        setFileTitle(singleFileTitle);
        setLanguage(singleFileLanguage);
    }


    return (
        <div className={`${!isSidebarOpen ? 'hidden' : 'visible'} sidemirror-container dull`}
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
                borderRight: `2px solid ${ThemeBackgroundMap[theme].gutterForeground}`
            }}>
            <div className="sidebar-header">
                <h3 className='bright' style={{ borderBottom: `1px solid ${ThemeBackgroundMap[theme].gutterForeground}` }}>
                    Files
                </h3>
                <button onClick={addFile} className='add-file-button' style={{
                    color: textColor,
                    backgroundColor: backgroundColor
                }}>+</button>
            </div>
            {
                files?.map((file: any) => {
                    return <SingleFile
                        key={file.id}

                        //Change So this uses context to get this maybe??
                        id={file.id}
                        title={file.title}
                        lastUpdated={file.updated}
                        dateCreated={file.created}
                        language={file.language}

                        code={file.code}
                        onClick={() => handleClickTitle(file.title, file.language)}
                        handleDeleteFile={handleDeleteFile}
                        handleRenameFile={handleRenameFile}
                    />
                })
            }
            {showInput && (
                <input
                    type="text"
                    value={title}
                    ref={inputRef}
                    placeholder='Enter Filename'
                    style={{
                        color: textColor,
                    }}
                    className="sidebar-input-form"
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleSubmitFile}
                    autoFocus
                />
            )}
        </div>
    )
}

export default Sidebar;
