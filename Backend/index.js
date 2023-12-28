const fs = require('fs');
const express = require('express')
const { spawnSync } = require('child_process');
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors');

app.use(cors());
app.use(express.json());

const router = express.Router();


app.post('/python', (req, res) => {
    const { code } = req.body;

    const tempFilePath = '/tmp/tempPythonCode.py';
    fs.writeFileSync(tempFilePath, code);
    const pythonProcess = spawnSync('python3', [tempFilePath]);

    if (pythonProcess.status == 1) {
        res.status(200).json({ output: pythonProcess.stderr.toString() });
    } else {
        res.status(200).json({ output: pythonProcess.stdout.toString() });
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

    const executeProcess = spawnSync(compiledOutputPath);

    if (executeProcess.status === 1) {
        res.status(200).json({ output: executeProcess.stderr.toString() });
    } else {
        res.status(200).json({ output: executeProcess.stdout.toString() });
    }
});

// Endpoint for Java code execution
app.post('/java', (req, res) => {
    const { code } = req.body;
    const tempJavaFilePath = '/tmp/TempJavaCode.java';
    const className = 'TempJavaCode'; // Java class name

    fs.writeFileSync(tempJavaFilePath, code);
    const compileProcess = spawnSync('javac', [tempJavaFilePath]);

    if (compileProcess.status !== 0) {
        return res.status(200).json({ output: compileProcess.stderr.toString() });
    }

    const executeProcess = spawnSync('java', ['-cp', '/tmp', className]);
    if (executeProcess.status === 1) {
        res.status(200).json({ output: executeProcess.stderr.toString() });
    } else {
        res.status(200).json({ output: executeProcess.stdout.toString() });
    }
});




app.get('/', (req, res) => {
    res.status(200).send("jello")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
