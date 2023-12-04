"use client";
import React, { useState, useRef, useEffect } from "react";
import Resizable from "./components/resizable";
import CodeEditor from "./components/codeEditor";
import Console from './components/console'
import './styles/main.css';



const Home: React.FC = () => {
    const [consoleOutput, setConsoleOutput] = useState<string>("");

    return (
        <div className="main-container">
            <div className="main-inner-container">
                <Resizable
                    leftPanel={<CodeEditor
                        setOutput={setConsoleOutput}
                    />}
                    rightPanel={<Console
                        output={consoleOutput}
                    />}
                />
            </div>

        </div>
    )
}

export default Home;
