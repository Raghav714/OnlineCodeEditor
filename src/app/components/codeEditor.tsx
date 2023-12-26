import React, { useState, useEffect, useRef, useContext } from "react";
import CodeMirror, { keymap, Command, EditorView, Decoration, ViewPlugin } from '@uiw/react-codemirror';
import { LayoutContext, ThemeContext, AuthContext, FileContext } from "../resources/contexts";
import { python } from "@codemirror/lang-python";
import { ThemeMap } from "../resources/themes";
import { savePythonFile } from "../resources/pocketbase";
import Sidebar from "./sidebar";
import Resizable from "./resizable";
import "../styles/codeEditor.css"


const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

const bracketSpacing = Decoration.mark({
    class: 'cm-bracket-spacing'
});

function bracketSpacingPlugin() {
    return ViewPlugin.fromClass(class {
        decorations;

        constructor(view: any) {
            this.decorations = this.findBrackets(view);
        }

        update(update: { docChanged: any; viewportChanged: any; view: any; }) {
            if (update.docChanged || update.viewportChanged) {
                this.decorations = this.findBrackets(update.view);
            }
        }

        findBrackets(view: { visibleRanges: any; state: { doc: { sliceString: (arg0: any, arg1: any) => any; }; }; }) {
            const ranges = [];

            for (const { from, to } of view.visibleRanges) {
                for (let pos = from; pos <= to; pos++) {
                    const char = view.state.doc.sliceString(pos, pos + 1);
                    if (['(', ')', '[', ']', '{', '}', ':'].includes(char)) {
                        ranges.push(bracketSpacing.range(pos - 1, pos + 1));
                    }
                }
            }
            return Decoration.set(ranges);
        }
    }, {
        decorations: v => v.decorations
    });
}

interface CodeEditorProps {
    setOutput: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ setOutput }) => {
    const [code, setCode] = useState<string>("");
    const [fileSelected, setFileSelected] = useState<boolean>(false)
    const [fileId, setFileId] = useState<string>("");
    const [fileTitle, setFileTitle] = useState<string>("");
    const [showSavedDisplay, setShowSavedDisplay] = useState<boolean>(false);
    const saveTimer = useRef<NodeJS.Timeout | null>(null);


    //Contexts 
    const {
        value: isMinimal,
        isSidebarOpen: isSidebarOpen,
        setIsSidebarOpen: setIsSidebarOpen
    } = useContext(LayoutContext);
    const { value: theme, backgroundColor: backgroundColor, textColor: textColor } = useContext(ThemeContext);
    const { isSignedIn: isSignedIn, userId: userId } = useContext(AuthContext);

    useEffect(() => {
        const createBackendConnection = async () => {
            try {
                await fetch(`${NEXT_PUBLIC_API_URL}`);
            } catch (error) {
                console.log(error);
            }
        }
        createBackendConnection();
    }, [])

    useEffect(() => {
        if (!isSignedIn) {
            setIsSidebarOpen(false)
            setCode("");
        }
    }, [isSignedIn])


    useEffect(() => {
        if (isSignedIn && fileId != "") {
            setShowSavedDisplay(false);
            if (saveTimer.current)
                clearTimeout(saveTimer.current);
            saveTimer.current = setTimeout(() => {
                if (code !== '') {
                    handleSaveFile();
                    setShowSavedDisplay(true)
                }
            }, 2000);
        }

        return () => {
            if (saveTimer.current) {
                clearTimeout(saveTimer.current);
            }
        };
    }, [code])
    useEffect(() => {
        setShowSavedDisplay(true);
    }, [fileId])

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

    function darkenHexColor(col: string, amt: number): string {
        col = col.slice(1);
        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        var b = ((num >> 8) & 0x00FF) + amt;
        var g = (num & 0x0000FF) + amt;
        var newColor = g | (b << 8) | (r << 16);
        return '#' + newColor.toString(16);
    }



    return (
        <div className="code-editor-container">
            <div className={`${isMinimal ? 'hidden' : 'visible'}  editor-navbar-container`}>
                <button onClick={toggleSidebar} className={`submit-button run-button ${isSignedIn ? 'visible' : 'hidden'}`}>
                    Files
                </button>
                <button className="run-code-button" onClick={runCode}>
                    Run
                </button>
            </div>
            <div className="mirror-sidebar-container">
                <FileContext.Provider value={{
                    fileSelected: fileSelected,
                    fileId: fileId,
                    setFileId: setFileId,
                    setCode: setCode,
                    setFileTitle: setFileTitle,
                }}

                >
                    <Resizable
                        leftPanel={<Sidebar />}
                        rightPanel={
                            <div className="tab-editor-container">
                                <div className="file-title-tab"
                                    style={{
                                        backgroundColor: backgroundColor,
                                        color: darkenHexColor(backgroundColor, 70),
                                    }}>
                                    {(isSignedIn && fileTitle != "") && (showSavedDisplay ? fileTitle : 'Saving...')}
                                </div>
                                <CodeMirror
                                    className="editor"
                                    value={code}
                                    onChange={setCode}
                                    extensions={[
                                        python(),
                                        bracketSpacingPlugin(),
                                        customKeymap,
                                        EditorView.lineWrapping
                                    ]}
                                    height="100%"
                                    theme={ThemeMap[theme]}
                                    basicSetup={{
                                        lineNumbers: true,
                                        allowMultipleSelections: true,
                                        tabSize: 5,
                                    }}
                                    autoFocus
                                />
                            </div>
                        }
                        displayLeftPanel={isSidebarOpen}
                        setDisplayLeftPanel={setIsSidebarOpen}
                        defaultWidth={160}
                        minWidthPx={120}
                        draggerWidth={7}
                        draggerColor={backgroundColor}
                        useAbsolute
                        collapseLeftPanel
                    />
                </FileContext.Provider>
            </div>
        </div>
    )
}

export default CodeEditor;
