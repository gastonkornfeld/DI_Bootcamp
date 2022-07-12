import './App.css';
import Exampleredux from './Exampleredux';
import {connect} from 'react-redux';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Exampleredux props={mapStateToProps} />
      <h1>second</h1>
      <Hello />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    a_first : state.hello,
    a_second: state.by,
  }
}

export default connect(mapStateToProps)(App);
