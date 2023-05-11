# Speech-Transcription-Verification


## Brief description 
Our project aims to develop a system for verifying speech transcriptions by splitting a large audio file into smaller segments, converting each segment into text using the API provided, and presenting it to the user for verification and correction. 

- Develop an interface that displays the transcript text and allows the user to play the corresponding audio chunk and make edits to the transcript.
- The user will have the option save or discard the transcription. 
- The system will ensure that each audio chunk is reviewed only once and will move on to the next chunk once the user has verified the transcription i.e should not appear again once the application is restarted.
- Overall, our project aims to verify the efficiency of speech transcriptions and make the process more manageable for transcribers through an easy to use interface.

## Interface 

![alt text](https://github.com/ttheshreeyasingh/Speech-Transcription-Verification/blob/main/frontend/speech-transcription-app/public/preview.png)

## Objective 
To develop a system to verify speech transcriptions by splitting a large audio file into smaller chunks, transcribing each chunk, and presenting them to the user for verification and correction. Enabling them to either "save" or "discard" the transcriptions and move to the "next" one.

There are 3 main components:
1. Audio Splitting
2. Speech-to-text conversion
3. Transcription verification 

## Instructions to run
- Clone this directory and move to its root using `cd Speech-Transcription-Verification/` 
- Run `node server.js` to start the server.
- Open a new tab in your terminal and run ` cd frontend/speech-transcription-app/`
- Then run `npm start` to run the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Components of the project
- Built with: Python3, React, Javascript
- Frontend UI built using: Creat-React-App
- Backend server built using: Node.js and Server.js
- Python scripts used for Audio Chunking and Transcripts Generation

## Modules used
- Audio Splitting:
  - Pydub
  - WebRTC Voice Activity Detector (VAD)
- Speech-to-text conversion:
  - Speech-to-text API provided 
- Transcription verification:
  - Proptypes
  - Axios
  - LocalStorage API
  - Fetch API

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory `cd Speech-Transcription-Verification/frontend/speech-transcription-app/`, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Team 1

UG2K20 batch
- Srujana vanka - 2020102005
- Shreeya Singh - 2020102011
