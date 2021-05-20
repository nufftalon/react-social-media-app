import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [developer, setDeveloper] = React.useState({
    language: 'python',
    yearsExperence: 0,
  });
  // const [language, setLanguage] = React.useState('python');
  // const [yearsExperence, setYearsExperience] = React.useState(0);
  function handleChangeLangauge() {
    setDeveloper({
      language: 'javascript',
      yearsExperence: 0,
      isEmployed: false,
    });
  }

  function handleChangeYearsExperience(event) {
    setDeveloper({
      ...developer,
      yearsExperence: event.target.value,
    });
  }

  function handleToggleEmployment() {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }

  return (
    <div>
      <button onClick={handleToggleEmployment}>Toggle Employment Status</button>
      <button onClick={handleChangeLangauge}>Change language</button>
      <div>
        <input type="number" onChange={handleChangeYearsExperience} />
      </div>

      <p> I am learning {developer.language}.</p>
      <p>I have {developer.yearsExperence} years of experience</p>
      <p>
        Employment status: {developer.isEmployed ? 'Employed' : 'Unemployed'}
      </p>
    </div>
  );
}

const rootNode = document.getElementById('root');

ReactDOM.render(<App />, rootNode);
