import React, { useState, useEffect, useRef, use } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { python } from "@codemirror/lang-python";
import Resizable from "./resizable";
import "../styles/codeEditor.css"

interface CodeEditorProps {
    code: string;
    setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {

    return (
        <div className="code-editor-container">
            <CodeMirror
                className="editor"
                value={code}
                onChange={setCode}
                extensions={[python()]}
                theme="light"
                height="100%"
                basicSetup={{
                    lineNumbers: true,
                    allowMultipleSelections: true,
                    tabSize: 3,
                }}
            />
        </div>
    )
}
export default CodeEditor;
