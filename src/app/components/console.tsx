import React, { useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import '../styles/console.css';
import { nord } from '@uiw/codemirror-theme-nord';


interface ConsoleOutputProps {
    output: string
}
const Console: React.FC<ConsoleOutputProps> = ({ output }) => {

    return (
        <div className="console-container">
            <CodeMirror
                className="console"
                value={output}
                height="100%"
                width="100%"
                theme={nord}
                basicSetup={{
                    lineNumbers: false,
                }}
                readOnly={true}
                editable={false}
            />
        </div>
    )
}

export default Console;
