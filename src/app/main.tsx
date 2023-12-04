"use client";
import React, { useState, useRef, useEffect } from "react";
import Resizable from "./components/resizable";
import CodeEditor from "./components/codeEditor";
import Console from './components/console'
import './styles/main.css';



const Home: React.FC = () => {
    const [code, setCode] = useState<string>("");
    const [consoleOutput, setConsoleOutput] = useState<string>("");

    useEffect(() => {
        console.log(code)
    }, [code])


    const runCode = async () => {
        try {
            let requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code: code })
            }
            let response = await fetch(`http://localhost:8000/`, requestOptions);
            let data = await response.json()
            if (data && data.output) {
                setConsoleOutput(data.output);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="main-container">
            <div className="main-inner-container">
                <Resizable
                    leftPanel={<CodeEditor
                        code={code}
                        setCode={setCode}
                    />}
                    rightPanel={<Console
                        output={consoleOutput}
                    />}
                />
            </div>
            <button onClick={runCode}>
                Run!

            </button>
        </div>
    )
}

export default Home;
