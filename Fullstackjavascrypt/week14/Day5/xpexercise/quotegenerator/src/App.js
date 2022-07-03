import './App.css';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <header className="App-header">
        <Quotes />
      </header>
    </div>
  );
}

export default App;
