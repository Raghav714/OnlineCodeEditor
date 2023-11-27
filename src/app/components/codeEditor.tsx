import React, { useState, useEffect, useRef } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { python } from "@codemirror/lang-python";
import Resizable from "./resizable";
import "../styles/codeEditor.css"

const CodeEditor: React.FC = () => {
    const [value, setValue] = useState<string>("");

    return (
        <div className="code-editor-container">
            <CodeMirror
                className="editor"
                value={value}
                onChange={setValue}
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
