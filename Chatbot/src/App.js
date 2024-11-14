import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <h1>Chatbot</h1>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="input-box"
          placeholder="Enter the message"
        />
        <button type="submit" className="button-box">
          Send
        </button>
      </div>

      <div className="chatContainer">
        <p className="text-box">This is my response</p>
        <p className="text-box">This is mdfgs dfsfd gf sdfgsd grf rs dsd dry response</p>
        <p className="text-box">This is my response</p>
        
        {/* Add more messages as needed for testing */}
      </div>
    </div>
  );
}

export default App;
