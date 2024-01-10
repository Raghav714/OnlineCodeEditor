const fs = require('fs');
const express = require('express')
const { spawnSync } = require('child_process');
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors');

app.use(cors());
app.use(express.json());

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const router = express.Router();


app.post('/python', (req, res) => {
    const { code } = req.body;

    const tempFilePath = '/tmp/tempPythonCode.py';
    fs.writeFileSync(tempFilePath, code);

    const executeStartTime = new Date().getTime();
    const pythonProcess = spawnSync('python3', [tempFilePath]);
    const executeEndTime = new Date().getTime();

    if (pythonProcess.status == 1) {
        res.status(200).json({ output: pythonProcess.stderr.toString(), timeTaken: executeEndTime - executeStartTime });
    } else {
        res.status(200).json({ output: pythonProcess.stdout.toString(), timeTaken: executeEndTime - executeStartTime });
    }
});

app.post('/cpp', (req, res) => {
    const { code } = req.body;

    const tempCppFilePath = '/tmp/tempCppCode.cpp';
    fs.writeFileSync(tempCppFilePath, code);

    const compiledOutputPath = '/tmp/compiledCppCode';
    const compileProcess = spawnSync('g++', [tempCppFilePath, '-o', compiledOutputPath]);


    if (compileProcess.status !== 0) {
        return res.status(200).json({ output: compileProcess.stderr.toString() });
    }


    const executeStartTime = new Date().getTime();
    const executeProcess = spawnSync(compiledOutputPath);
    const executeEndTime = new Date().getTime();

    if (executeProcess.status === 1) {
        res.status(200).json({ output: executeProcess.stderr.toString(), timeTaken: executeEndTime - executeStartTime });
    } else {
        res.status(200).json({ output: executeProcess.stdout.toString(), timeTaken: executeEndTime - executeStartTime });
    }
});



app.post('/cpp/debug', (req, res) => {
    const { code, breakpoints } = req.body;

    const tempCppFilePath = '/tmp/tempCppCode.cpp';
    fs.writeFileSync(tempCppFilePath, code);

    const compiledOutputPath = '/tmp/compiledCppCode';
    const compileProcess = spawnSync('g++', ['-g', tempCppFilePath, '-o', compiledOutputPath]);

    if (compileProcess.status !== 0) {
        return res.status(200).json({ output: compileProcess.stderr.toString() });
    }


    // Create an LLDB script
    const lldbScriptPath = '/tmp/lldbScript.txt';
    // let lldbScriptContent = "breakpoint set --line 7\nbreakpoint set--line 9\nrun\nframe variable\ncontinue\nframe variable\nquit\n";
    let lldbScriptContent = "";
    breakpoints.forEach(bp => {
        lldbScriptContent += `breakpoint set --line ${bp}\n`;
    });

    for (let i = 1; i <= breakpoints.length; i++) {
        lldbScriptContent += `breakpoint command add ${i} --one-liner "frame variable"\n`;
    }

    lldbScriptContent += "run\n";
    // lldbScriptContent += "continue\n";
    for (let i = 1; i < breakpoints.length; i++) {
        lldbScriptContent += `thread continue\n`;
        lldbScriptContent += "frame variable\n";
    }


    lldbScriptContent += "quit\n";

    fs.writeFileSync(lldbScriptPath, lldbScriptContent);
    const lldbProcess = spawnSync('lldb', ['--batch', '-s', lldbScriptPath, '--', compiledOutputPath]);
    // console.log("lldb output \n", lldbProcess.stdout.toString());

    const lldbOutput = lldbProcess.stdout.toString();
    const outputLines = lldbOutput.split('\n');
    const frameVariables = [];
    let capturing = false;
    let currentFrameVariables = '';

    for (const line of outputLines) {
        if (line.startsWith('(lldb)  frame variable')) {
            capturing = true;
            if (currentFrameVariables !== '') {
                frameVariables.push(currentFrameVariables.trim());
                currentFrameVariables = '';
            }
        } else if (capturing) {
            if (line.match(/\((int|string|float|double|char)\)/)) {
                currentFrameVariables += line.trim() + '\n';
            } else if (line.startsWith('(lldb)')) {
                capturing = false;
                if (currentFrameVariables !== '') {
                    frameVariables.push(currentFrameVariables.trim());
                    currentFrameVariables = '';
                }
            }
        }
    }

    if (currentFrameVariables !== '') {
        frameVariables.push(currentFrameVariables.trim());
    }


    console.log("lldb output \n", frameVariables);
    res.status(200).json({ output: frameVariables });

});

// Endpoint for Java code execution
app.post('/java', (req, res) => {
    const { code } = req.body;

    const tempJavaFilePath = '/tmp/TempJavaCode.java';
    const className = 'Main'; // Java class name

    fs.writeFileSync(tempJavaFilePath, code);
    const compileProcess = spawnSync('javac', [tempJavaFilePath]);


    if (compileProcess.status !== 0) {
        return res.status(200).json({ output: compileProcess.stderr.toString() });
    }
    const executeStartTime = new Date().getTime();
    const executeProcess = spawnSync('java', ['-cp', '/tmp', className]);
    const executeEndTime = new Date().getTime();

    fs.writeFileSync(tempJavaFilePath, "");
    if (executeProcess.status === 1) {
        res.status(200).json({ output: executeProcess.stderr.toString(), timeTaken: executeEndTime - executeStartTime });
    } else {
        res.status(200).json({ output: executeProcess.stdout.toString(), timeTaken: executeEndTime - executeStartTime });
    }
});


app.get('/', (req, res) => {
    res.status(200).send("jello")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
