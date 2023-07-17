import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./Noted.css";

const Noted = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [textToCopy, setTextToCopy] = useState();
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <section className="noted-input">
        <div className="message-input">
          <h1>Speak your message below</h1>
          <div className="input-holder">
            <p onClick={() => setTextToCopy(transcript)}>{transcript}</p>
            <div className="btn-style">
              <button className="listen-btn" onClick={setCopied}>
                {isCopied ? "Copied!" : "Copy to clipboard"}
              </button>
              <button className="listen-btn" onClick={resetTranscript}>
                Reset
              </button>
              <button
                className="listen-btn"
                onClick={SpeechRecognition.stopListening}
              >
                Stop Listening
              </button>
              <button className="listen-btn" onClick={startListening}>
                Start Listening
              </button>
            </div>
          </div>
        </div>
        <div className="paste-input">
          <textarea
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Paste your task here"
          ></textarea>
        </div>
        <div className="priority">
          <p>What is the priority of your task?</p>
          <div className="priority-btn-holder">
            <button className="priority-btn high">High</button>
            <button className="priority-btn medium">Medium</button>
            <button className="priority-btn low">Low</button>
          </div>
        </div>
        <div className="add-holder">
          <button className="add-btn" onClick={addItem}>
            Add
          </button>
        </div>
      </section>
      <section className="noted-output">
        {items.map((elem, index) => {
          return (
            <div className="output-card">
              <div className="span"></div>
              <p>{elem}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Noted;
