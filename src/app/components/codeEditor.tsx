import React, { useState, useEffect, useRef, useContext } from "react";
import CodeMirror, { keymap, Command, EditorView, Decoration, ViewPlugin, Extension } from '@uiw/react-codemirror';
import { Menu, Button, Text, rem } from '@mantine/core';
import { LayoutContext, ThemeContext, AuthContext, FileContext, LanguageContext } from "../resources/contexts";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { hyperLink, hyperLinkExtension, hyperLinkStyle } from '@uiw/codemirror-extensions-hyper-link';
import { LanguageThemeMap, LanguageDefaultCode, Languages } from "../resources/languages";
import { ThemeMap, ThemeBackgroundMap } from "../resources/themes";
import { saveCodeFile, addCodeFile } from "../resources/pocketbase";
import Sidebar from "./sidebar";
import Resizable from "./resizable";
import "../styles/codeEditor.css"


export const hyperLinkShortcut: Extension = [
    hyperLinkExtension({
        regexp: /Hyper/gi,
        match: { Hyper: 'https://google.com' },
        handle: (value, input, from, to) => {
            if (value === 'Hyper') return 'https://google.com';
            return value;
        },
    }),
    hyperLinkStyle,
];

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
    const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false);
    const [linkIconColor, setLinkIconColor] = useState<string>("#FFFFFF")
    const saveTimer = useRef<NodeJS.Timeout | null>(null);


    //Contexts 
    const {
        isMinimal: isMinimal,
        isSidebarOpen: isSidebarOpen,
        setIsSidebarOpen: setIsSidebarOpen
    } = useContext(LayoutContext);
    const { value: theme, backgroundColor: backgroundColor, textColor: textColor } = useContext(ThemeContext);
    const { isSignedIn: isSignedIn } = useContext(AuthContext);
    const { language: language, setLanguage: setLanguage } = useContext(LanguageContext);

    const hyperLinkCustomStyle = EditorView.theme({
        '.cm-hyper-link-icon': {
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '0.2ch',
            color: linkIconColor,
        },
        '.cm-hyper-link-icon svg': {
            display: 'block'
        },
        '.cm-hyper-link-underline': {
            textDecoration: 'underline'
        }
    });

    useEffect(() => {
        console.log(ThemeBackgroundMap[theme])
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
        setLinkIconColor(ThemeBackgroundMap[theme].foreground)
    }, [theme])

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
        await saveCodeFile(fileId, code);
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
    }, [fileId, code, saveCodeFile])

    useEffect(() => {
        if (!isSignedIn && (code == "" || Object.values(LanguageDefaultCode).includes(code))) {
            setCode(LanguageDefaultCode[language]);
        }
    }, [language])



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
            let response = await fetch(`${NEXT_PUBLIC_API_URL}/${language}`, requestOptions);
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


    const handleLangDropdownClick = async (lang: string) => {
        setLanguage(lang);
        if (isSignedIn) {

            const newFile = await addCodeFile(`New${lang.charAt(0).toUpperCase() + lang.slice(1)}File`, lang);
            if (newFile) {
                setFileId(newFile.id);
                setFileTitle(newFile.title);
                setCode(LanguageDefaultCode[lang]);
            }
        }
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
                                    <Menu
                                        onChange={setShowLangDropdown}
                                        position="right"
                                        transitionProps={{ transition: 'scale-x', duration: 120, exitDuration: 10 }}
                                        offset={0}
                                        styles={{
                                            dropdown: { backgroundColor: 'transparent', padding: '0', borderColor: 'transparent', display: 'flex', justifyContent: 'center' },
                                            item: {
                                                padding: '0.15em 0.35em',
                                                backgroundColor: 'transparent',
                                                fontWeight: 800,
                                                fontSize: '8pt',
                                                letterSpacing: '0.04em',
                                                marginLeft: '0.45em',
                                            },
                                        }}
                                    >
                                        <Menu.Target>
                                            <div className="file-title-type" style={LanguageThemeMap[language]}>{language}</div>
                                        </Menu.Target>
                                        <Menu.Dropdown>
                                            {Languages.filter(lang => lang != language).map((lang: string, idx: number) =>
                                                <Menu.Item key={idx} component="div" style={LanguageThemeMap[lang]} onClick={() => handleLangDropdownClick(lang)}>{lang}</Menu.Item>
                                            )}
                                        </Menu.Dropdown>
                                    </Menu>
                                    {
                                        (isSignedIn && fileTitle != "" && !showLangDropdown) &&
                                        <p className="file-title-name">
                                            {showSavedDisplay ? fileTitle : 'Saving...'}
                                        </p>
                                    }
                                </div>
                                <CodeMirror
                                    className="editor"
                                    value={code}
                                    onChange={setCode}
                                    extensions={[
                                        (language == "python") ? python() : cpp(),
                                        // hyperLinkShortcut,
                                        [hyperLinkExtension(), hyperLinkCustomStyle],
                                        // hyperLink,
                                        bracketSpacingPlugin(),
                                        customKeymap,
                                        EditorView.lineWrapping,

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
            </div >
        </div >
    )
}


export default CodeEditor;
