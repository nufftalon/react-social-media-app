import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const people = ['John', 'Dave', 'Gary'];

  return (
    <ul>
      {people.map((person) => (
        <li>{person}</li>
      ))}
    </ul>
  );
}

const rootNode = document.getElementById('root');

ReactDOM.render(<App />, rootNode);
