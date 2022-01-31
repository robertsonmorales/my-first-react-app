import logo from './logo.svg';
import './App.css';

import List from './components/test-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <List num="100" />

      </header>
    </div>
  );
}

export default App;


