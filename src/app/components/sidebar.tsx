import React, { useEffect, useContext, useState, useRef } from 'react';
import { AuthContext, LayoutContext, FileContext, ThemeContext } from '../resources/contexts';
import '../styles/codeEditor.css';
import PocketBase from 'pocketbase';
import SingleFile from './singleFile';
import { ThemeBackgroundMap } from '../resources/themes';
const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function getPythonFiles(userId: string) {
    if (!pb.authStore.isValid) {
        return null;
    }

    try {
        const data = await pb.collection('python_files').getList(1, 50, { filter: `user = '${userId}'`, requestKey: null });
        return data?.items as any[];
    } catch (error) {
        console.error('Error fetching Python files:', error);
        return null;
    }
}

async function addPythonFile(userId: string, title: string) {
    const record = await pb.collection('python_files').create({
        title: title,
        user: userId,
    });
    return record;
}

const Sidebar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<any>([]);
    const [title, setTitle] = useState<string>("");
    const [showInput, setShowInput] = useState<boolean>(false);
    const { isSignedIn: isSignedIn, userId: userId } = useContext(AuthContext);
    const { value: theme } = useContext(ThemeContext)
    const { fileId: fileId, setFileId: setFileId, setCode: setCode } = useContext(FileContext)
    const {
        value: isMinimal,
        isSidebarOpen: isSidebarOpen,
    } = useContext(LayoutContext);

    const fetchData = async () => {
        if (isSignedIn) {
            let data = await getPythonFiles(userId);
            setFiles(data);
        }
    };
    useEffect(() => {

        fetchData();
    }, [userId, fileId]);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowInput(false);
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

    const submitFile = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const newFile = await addPythonFile(userId, title);
            setFiles([...files, newFile]);
            setFileId(newFile.id);
            setCode("");
            setTitle("");
            setShowInput(false);
        }
    }

    const handleDeleteFile = (id: string) => {
        const updatedFiles = files.filter((file: any) => file.id !== id);
        setFiles(updatedFiles);
    }
    const handleRenameFile = (id: string, newTitle: string) => {
        const updatedFiles = files.map((file: any) => {
            if (file.id === id) {
                return { ...file, title: newTitle };
            }
            return file;
        });
        console.log(files)
        setFiles(updatedFiles);
    }


    return (
        <div className={`${!isSidebarOpen ? 'hidden' : 'visible'} sidemirror-container dull`}
            style={{
                backgroundColor: ThemeBackgroundMap[theme].background,
                color: ThemeBackgroundMap[theme].gutterActiveForeground,
                borderRight: `2px solid ${ThemeBackgroundMap[theme].gutterForeground}`
            }}>
            <div className="sidebar-header">
                <h3 className='' style={{ borderBottom: `1px solid ${ThemeBackgroundMap[theme].gutterForeground}` }}>
                    Files
                </h3>
                <button onClick={addFile} className='add-file-button'>+</button>
            </div>
            {
                files?.map((file: any) => {
                    return <SingleFile
                        key={file.id}
                        id={file.id}
                        title={file.title}
                        code={file.code}
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
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={submitFile}
                    autoFocus
                />
            )}
        </div>
    )
}

export default Sidebar;
