import AutoComplete from './components/AutoComplete';
import {countryList} from './data/countries'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React AutoComplete Demo</h1>
      <h3>Start Typing and experience React AutoComplete</h3>
      <AutoComplete listOfCountries={countryList} />
    </div>
  );
}

export default App;
