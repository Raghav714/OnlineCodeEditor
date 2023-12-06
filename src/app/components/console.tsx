import React, { useEffect, useContext } from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { ThemeContext } from '../resources/contexts';
import ThemeMap from "../resources/themes";
import '../styles/console.css';



interface ConsoleOutputProps {
    output: string
}
const Console: React.FC<ConsoleOutputProps> = ({ output }) => {
    const { value: theme, setValue: setTheme } = useContext(ThemeContext);

    return (
        <div className="console-container">
            <CodeMirror
                className="console"
                value={output}
                height="100%"
                width="100%"
                theme={ThemeMap[theme]}
                basicSetup={{
                    lineNumbers: false,
                }}
                extensions={[
                    EditorView.lineWrapping
                ]}
                readOnly={true}
                editable={false}
            />
        </div>
    )
}

export default Console;
