
import React, { useEffect, useContext, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { AuthContext, LayoutContext, FileContext, ThemeContext, LanguageContext } from '../resources/contexts';
import { ThemeBackgroundMap } from '../resources/themes';
import { addCodeFile, getCodeFiles } from '../resources/pocketbase';
import { LanguageMap, LanguageDefaultCode } from '../resources/languages';
import '../styles/codeEditor.css';
import SingleFile from './singleFile';

// type File{

// }

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


    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        console.log("start: ", result.source.index);
        console.log("destination: ", result.destination.index);
        console.log(result);

        // SetOrderIndex of  GetPythonFile(result.draggableId) to result.destination.index
        // for idx in result.destination.index, files.length:
        //     if files[idx] != result.draggableId:
        //         IncremenetOrderIndex files[idx]

        // IF NO ERRORS: 

        const items = Array.from(files);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setFiles(items);
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="filesDroppable">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`${!isSidebarOpen ? 'hidden' : 'visible'} sidemirror-container dull`}
                        style={{
                            backgroundColor: backgroundColor,
                            color: textColor,
                            borderRight: `2px solid ${ThemeBackgroundMap[theme].gutterForeground}`
                        }}
                    >
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
                            files?.map((file: any, index: number) => (
                                <Draggable
                                    key={file.id}
                                    draggableId={`${file.id}`}
                                    index={index}
                                >
                                    {(provided) => {
                                        if (provided.draggableProps.style && "top" in provided.draggableProps.style)
                                            provided.draggableProps.style.top -= 50;
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >

                                                <SingleFile
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
                                            </div>
                                        )
                                    }}
                                </Draggable>
                            ))
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
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}





export default Sidebar;
