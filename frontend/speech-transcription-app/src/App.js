import "./App.css";
import Navbar from './components/Navbar';
import AudioPlayerWithTextForm from './components/AudioPlayerWithTextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Speech Transcription Verification App" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
  
      <div className="App container py-3">
        <h3>Verify the transcription of the below audio chunk</h3>
      </div>

      <AudioPlayerWithTextForm showAlert={showAlert} mode={mode} />

    </>
  );
}  

export default App;
