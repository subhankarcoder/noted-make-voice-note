import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./Noted.css";

const Noted = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [textToCopy, setTextToCopy] = useState();
  const [points, setPoints] = useState(0);
  // const [showGif, setShowGif] = useState(false);
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });
  const [priority, setPriority] = useState("low");
  useEffect(() => {
    // Restore items from local storage on component mount
    const storedItems = localStorage.getItem("notedItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
//   if(window.localStorage) {
//     alert('ls exists');
// } else {
//     alert('ls does not exist');
// }

  useEffect(() => {
    // Save items to local storage whenever items state changes
    localStorage.setItem("notedItems", JSON.stringify(items));
  }, [items]);
  const addItem = () => {
    if (!inputData) {
      return;
    }
    const newItem = {
      text: inputData,
      priority: priority,
    };
    setItems([...items, newItem]);
    setInputData("");
  };
  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((elem, ind) => {
      return ind != id;
    });
    setPoints(points + 10);
    setItems(updatedItems);
    const succsess = new Audio("./images/success_sound.mp3");
    succsess.play();
  };
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const handlePriorityClick = (selectedPriority) => {
    setPriority(selectedPriority);
  };
  return (
    <>
      <section className="points">
        <img src="./images/token.png" />
        <p>Points : {points}</p>
      </section>
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
            <button
              className="priority-btn high"
              onClick={() => handlePriorityClick("high")}
            >
              High
            </button>
            <button
              className="priority-btn medium"
              onClick={() => handlePriorityClick("medium")}
            >
              Medium
            </button>
            <button
              className="priority-btn low"
              onClick={() => handlePriorityClick("low")}
            >
              Low
            </button>
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
          const { text, priority } = elem;
          return (
            <>
              <div key={index} className="output-card">
                <button className="complete" onClick={() => deleteItem(index)}>
                  Completed
                </button>
                <div className="overlay">
                  <p>{text}</p>
                  <div className={`span ${priority}`}></div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Noted;
