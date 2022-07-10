import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundry from './components/ErrorBoundry';
import Color from './components/Color';

function App() {
  return (
    <>
      <div className="App">
        <ErrorBoundry>
          <h1>Exercise number 1</h1>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundry>
      </div>
      <div className="App">
        <h1>Exercise number 2</h1>
        <ErrorBoundry>
          <BuggyCounter />
        </ErrorBoundry>
        <ErrorBoundry>
          <BuggyCounter />
        </ErrorBoundry>
      </div>
      <div className="App">
        <h2> Exercise number 3</h2>
        <BuggyCounter />
      </div>
      <div className="App">
        <h1>Part 2</h1>
        <Color />
      </div>
      
    </>
    
  );
}

export default App;
