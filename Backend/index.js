const fs = require('fs');
const express = require('express')
const { spawnSync } = require('child_process');
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors');

app.use(cors());
app.use(express.json());

const router = express.Router();


app.post('/', (req, res) => {
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



app.get('/', (req, res) => {
    res.status(200).send("jello")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
