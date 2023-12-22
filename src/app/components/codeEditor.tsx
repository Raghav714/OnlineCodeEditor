import React, { useState, useEffect, useRef, useContext } from "react";
import CodeMirror, { keymap, Command, EditorView } from '@uiw/react-codemirror';
import { LayoutContext, ThemeContext, AuthContext, FileContext } from "../resources/contexts";
import { python } from "@codemirror/lang-python";
import { ThemeMap, ThemeBackgroundMap } from "../resources/themes";
import PocketBase from 'pocketbase';
import "../styles/codeEditor.css"
import Sidebar from "./sidebar";
import Resizable from "./resizable";
import { PluginValue, lineNumberMarkers } from '@codemirror/view';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL
const NEXT_PUBLIC_POCKETBASE_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL
const pb = new PocketBase(`${NEXT_PUBLIC_POCKETBASE_URL}`);

async function savePythonFile(fileId: string, pyCode: string) {
    if (pb.authStore.isValid) {
        const record = await pb.collection('python_files').update(fileId, {
            code: pyCode,
        });
        return record;
    } else {
        return null
    }
}
async function getPythonFiles(userId: string) {
    if (pb.authStore.isValid) {
        const data = await pb.collection('python_files').getList(1, 50, { filter: `user = '${userId}'` });
        return data?.items as any[];
    } else {
        return null
    }
}

interface CodeEditorProps {
    setOutput: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ setOutput }) => {
    const [code, setCode] = useState<string>("");
    const [fileSelected, setFileSelected] = useState<boolean>(false)
    const [fileId, setFileId] = useState<string>("")
    const {
        value: isMinimal,
        isSidebarOpen: isSidebarOpen,
        setIsSidebarOpen: setIsSidebarOpen
    } = useContext(LayoutContext);
    const { value: theme } = useContext(ThemeContext);
    const { isSignedIn: isSignedIn, userId: userId } = useContext(AuthContext);

    useEffect(() => {
        if (!isSignedIn) {
            setIsSidebarOpen(false)
            setCode("");
        }
    }, [isSignedIn])


    const handleSaveFile = async () => {
        await savePythonFile(fileId, code);
    }
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key == 's' && e.metaKey) {
                e.preventDefault();
                handleSaveFile();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => { window.removeEventListener('keydown', handleKeyDown) }
    }, [fileId, code, savePythonFile])




    const runCode = async () => {
        try {
            setOutput("");
            let requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code: code })
            }
            let response = await fetch(`${NEXT_PUBLIC_API_URL}`, requestOptions);
            let data = await response.json()
            if (data && data.output) {
                setOutput(data.output);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const runCodeCommand: Command = (view: EditorView) => {
        runCode();
        return true;
    };

    const customKeymap = keymap.of([{
        key: "Shift-Enter",
        run: runCodeCommand,
        preventDefault: true,
    }]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }


    useEffect(() => {
        console.log(ThemeBackgroundMap[theme])
    }, [])



    return (
        <div className="code-editor-container">
            <div className={`${isMinimal ? 'hidden' : 'visible'}  editor-navbar-container`}>
                <button onClick={toggleSidebar} className={`submit-button run-button ${isSignedIn ? 'visible' : 'hidden'}`}>
                    Files
                </button>
                <button className="submit-button" onClick={runCode}>
                    Run
                </button>
            </div>
            <div className="mirror-sidebar-container">
                <FileContext.Provider value={{
                    fileSelected: fileSelected,
                    fileId: fileId,
                    setFileId: setFileId,
                    setCode: setCode,
                }}
                >
                    <Resizable
                        leftPanel={<Sidebar />}
                        rightPanel={
                            <CodeMirror
                                className="editor"

                                value={code}
                                onChange={setCode}
                                extensions={[
                                    python(),
                                    customKeymap,
                                    // EditorView.lineWrapping
                                ]}
                                height="100%"
                                theme={ThemeMap[theme]}
                                basicSetup={{
                                    lineNumbers: true,
                                    allowMultipleSelections: true,
                                    tabSize: 5,
                                }}
                            />
                        }
                        displayLeftPanel={isSidebarOpen}
                        setDisplayLeftPanel={setIsSidebarOpen}
                        defaultWidth={160}
                        minWidthPx={120}
                        draggerWidth={7}
                        draggerColor={ThemeBackgroundMap[theme].background}
                        useAbsolute
                        collapseLeftPanel
                    />
                </FileContext.Provider>
            </div>
        </div>
    )
}
export default CodeEditor;
