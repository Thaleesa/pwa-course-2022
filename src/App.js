import './App.css';

function Userlist () {
  return (
    <div className="userlist">
      <h1>Kataruna</h1>
    </div>
    
  )
}

function Chat () {
  return (
    <div className="chat">
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
