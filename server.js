const { exec } = require('child_process');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // add this line

const app = express();
app.use(bodyParser.json());

// Enable CORS middleware to allow cross-origin requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Run the first script on startup
exec('python ./main/audio-split.py', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing first script: ${err}`);
  } else {
    console.log(`First script output: ${stdout}`);
  }

  // Run the second script on startup, after the first script has finished
  exec('python ./main/transcription.py', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing second script: ${err}`);
    } else {
      console.log(`Second script output: ${stdout}`);
    }

    // Start the server after both scripts have finished
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
});

// Save the text to a file
const fs = require('fs');
const path = require('path');

app.post('/save-text', (req, res) => {
  const text = req.body.text;
  const transcriptNumber = req.body.transcriptNumber;
  const filePath = path.join(__dirname, `./main/save/transcript${transcriptNumber.toString().padStart(4, '0')}.txt`);
  fs.writeFile(filePath, text, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving file');
    } else {
      console.log('File saved successfully');
      res.send('File saved successfully');
    }
  });
});

app.post('/discard-text', (req, res) => {
  const text = req.body.text;
  const transcriptNumber = req.body.transcriptNumber;
  const filePath = path.join(__dirname, `./main/discard/transcript${transcriptNumber.toString().padStart(4, '0')}.txt`);
  fs.writeFile(filePath, text, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving file');
    } else {
      console.log('File discarded successfully');
      res.send('File discarded successfully');
    }
  });
});
