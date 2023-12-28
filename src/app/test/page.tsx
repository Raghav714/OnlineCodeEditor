"use client";
import React, { useState, ChangeEvent } from 'react';

const JsCompiler: React.FC = () => {
    const [code, setCode] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCode(event.target.value);
    };

    const runCode = () => {
        // Save the original console.log
        const originalConsoleLog = console.log;

        // Temporary array to hold console.log outputs
        let logMessages: string[] = [];

        // Override console.log
        console.log = (...args: any[]) => {
            logMessages.push(args.map(arg => String(arg)).join(' '));
        };

        try {
            // Reset previous output and errors
            setOutput('');
            setError('');

            // Evaluate the code
            eval(code);

            // Set output to the captured log messages
            setOutput(logMessages.join('\n'));
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            // Restore the original console.log
            console.log = originalConsoleLog;
            logMessages = [];
        }
    };

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "gray"
        }}>
            <textarea value={code} onChange={handleCodeChange} />
            <button onClick={runCode}>Run Code</button>
            <div>
                <strong>Output:</strong>
                <pre>{output}</pre>
            </div>
            <div>
                <strong>Error:</strong>
                <pre>{error}</pre>
            </div>
        </div>
    );
};

export default JsCompiler;
