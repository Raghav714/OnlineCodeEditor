import React, { useEffect, useContext, useState, useRef } from 'react';
import { AuthContext, LayoutContext, FileContext } from '../resources/contexts';
import '../styles/codeEditor.css';
import PocketBase from 'pocketbase';
import SingleFile from './singleFile';
import { text } from 'node:stream/consumers';
const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function getPythonFiles(userId: string) {
    if (pb.authStore.isValid) {
        const data = await pb.collection('python_files').getList(1, 50, { filter: `user = '${userId}'` });
        return data?.items as any[];
    } else {
        return null
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
    const { fileId: fileId, setFileId: setFileId, setCode: setCode } = useContext(FileContext)
    const {
        value: isMinimal,
        isSidebarOpen: isSidebarOpen,
    } = useContext(LayoutContext);

    useEffect(() => {
        const fetchData = async () => {
            if (isSignedIn) {
                let data = await getPythonFiles(userId);
                setFiles(data);
            }
        };
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


    return (
        <div className={`${isSidebarOpen && !isMinimal ? 'visible' : 'hidden'} sidemirror-container`}>
            <div className="sidebar-header">
                <h3>Files</h3>
                <button onClick={addFile} className='add-file-button'>+</button>
            </div>
            {
                files?.map((file: any) => {
                    return <SingleFile
                        key={file.id}
                        id={file.id}
                        title={file.title}
                        code={file.code}
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
