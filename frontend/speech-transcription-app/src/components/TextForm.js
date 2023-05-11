// The audio chunks and the transcriptions are fetched from the 
// 'Original data' folder which is present in the public folder
// Works for any number of transcripts and audio files. 
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function TextForm(props) {
    const [text, setText] = useState('Loading...');
    const [audioSrc, setAudioSrc] = useState(null);
    // Using localStorage API to store the last transcript number and retrieve it when the application starts again
    const [transcriptNumber, setTranscriptNumber] = useState(parseInt(localStorage.getItem('transcriptNumber')) || 1);
    const [isAudio, setIsAudio] = useState(false);


    // // clear the local storage
    // localStorage.clear();
    // setTranscriptNumber(1); // Reset transcript number to 1
    // window.location.reload();



    // Fetch the transcriptions and audio files 
    useEffect(() => {
        const fetchText = async () => {
            try {
                const response = await axios.get(`./Original data/transcripts/transcript${transcriptNumber.toString().padStart(4, '0')}.txt`);
                setText(response.data);
                setIsAudio(false);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchAudio = async () => {
            try {
                const response = await axios.get(`${process.env.PUBLIC_URL}/Original data/audio_chunks/chunk${transcriptNumber.toString().padStart(4, '0')}.wav`, {
                    responseType: 'blob'
                });
                const blob = new Blob([response.data]);
                const url = URL.createObjectURL(blob);
                setAudioSrc(url);
                setIsAudio(true);
            } catch (error) {
                console.error(error);
            }
        };

        if (props.isAudio) {
            fetchAudio();
        } else {
            fetchText();
        }
    }, [transcriptNumber, props.isAudio]);

    // const fs = require('fs');

    // Save button
    const handleSave = () => {
        axios.post('http://localhost:5000/save-text', {
            text: text,
            transcriptNumber: transcriptNumber // Add this line
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Discard button
    const handleDiscard = () => {
        axios.post('http://localhost:5000/discard-text', {
            text: text,
            transcriptNumber: transcriptNumber // Add this line
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    // Next button
    const handleNext = async () => {
        localStorage.setItem('transcriptNumber', transcriptNumber + 1);
        setTranscriptNumber((prevState) => prevState + 1);

        // Fetch the new transcript text
        try {
            const response = await axios.get(`./Original data/transcripts/transcript${(transcriptNumber + 1).toString().padStart(4, '0')}.txt`);
            setText(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div
                className='container'
                style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
            >
                <div className='mb-3' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {isAudio && (
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', width: '100%', height: '100%' }}>
                            <audio controls src={audioSrc} />
                        </div>
                    )}
                    <h3>Transcript {transcriptNumber}</h3>
                    <textarea
                        className='form-control'
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743',
                        }}
                        id='myBox'
                        rows='8'
                        onChange={(event) => setText(event.target.value)}
                        value={text}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button disabled={text === 'Loading...'} className='btn btn-primary mx-1 my-1' onClick={handleSave} style={{ backgroundColor: "limegreen" }}>Save</button>
                    <button disabled={text === 'Loading...'} className='btn btn-primary mx-1 my-1' onClick={handleDiscard} style={{ backgroundColor: "Red" }}>Discard</button>
                    <button className='btn btn-primary mx-1 my-1' onClick={handleNext} disabled={text === 'Loading...'}>Next</button>


                </div>
            </div>
        </>
    );

}

