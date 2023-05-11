import React, { useState, useEffect } from 'react';
import TextForm from './TextForm';


// Integrates the audio player with the transcription 
const AudioPlayerWithTextForm = () => {
    const [transcriptNumber, setTranscriptNumber] = useState(1);
    const [isAudio, setIsAudio] = useState(false);

    // Increments the index on clicking next button
    const handleNext = () => {
        setTranscriptNumber((prevNumber) => prevNumber + 1);
        setIsAudio(false);
    };

    // Decrements the index on clicking previous button 
    // const handlePrevious = () => {
    //     if (transcriptNumber > 1) {
    //         setTranscriptNumber((prevNumber) => prevNumber - 1);
    //         setIsAudio(false);
    //     }
    // };

    useEffect(() => {
        setIsAudio(false);
    }, [transcriptNumber]);

    useEffect(() => {
        setIsAudio(true);
    }, [transcriptNumber]);

    return (
        <>
            <div className="row">
                <div className="col">
                    <TextForm
                        heading={`Transcript ${transcriptNumber}`}
                        handleNext={handleNext}
                        isAudio={isAudio}
                        transcriptNumber={transcriptNumber} // Add this line
                    />

                </div>
            </div>
        </>
    );
};

export default AudioPlayerWithTextForm;

