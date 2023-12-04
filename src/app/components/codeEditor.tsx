import React, { useState, useEffect, useRef, use } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { python } from "@codemirror/lang-python";
// import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { nord } from '@uiw/codemirror-theme-nord';
import "../styles/codeEditor.css"

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

interface CodeEditorProps {
    setOutput: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ setOutput }) => {
    const [code, setCode] = useState<string>("");

    const runCode = async () => {
        try {
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


    return (
        <div className="code-editor-container">
            <div className="editor-navbar-container">
                <button className="submit-button run-button" onClick={runCode}>
                    Run
                </button>
            </div>
            <CodeMirror
                className="editor"
                value={code}
                onChange={setCode}
                extensions={[python()]}
                height="100%"
                theme={nord}
                basicSetup={{
                    lineNumbers: true,
                    allowMultipleSelections: true,
                    tabSize: 6,
                }}
            />
        </div>
    )
}
export default CodeEditor;
