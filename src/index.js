import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [inputValue, setInputValue] = React.useState('');
  // const inputValue = inputState[0];
  // const setInputValue = inputState[1];

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input onChange={handleInputChange} />
      <p>{inputValue}</p>
    </div>
  );
}

const rootNode = document.getElementById('root');

ReactDOM.render(<App />, rootNode);
