import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function NameDisplay() {
  const [nameDisplay, updateNameDisplay] = useState('placeholder text');
  const rename = () => updateNameDisplay(() => 'firstname lastname');
  return (
    <div>
      <span>{ nameDisplay } </span>
      <button onClick={ rename }>render deadname</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameDisplay />
      </header>
    </div>
  );
}

export default App;
