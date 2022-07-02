import './App.css';
import Car from './components/Car';
import {useState} from 'react';
import Phone from './components/Phone';

import Events from './components/Events';
import Color from './components/Color';
const carinfo = {name: "Ford", model: "Mustang"};


function App() {
  const clickMe = () => {
    alert('You clicked me')
  };
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      alert(`You press enter the value of the input is ${event.target.value}`)
    }
  };
  const [isButtonOn, setIsButtonOn] = useState(true);
  const toggleButton = () => {
    setIsButtonOn(current => !current);
  };
  return (
    <div className="App">
      <Car info={carinfo} />
      <Events
        click={clickMe}
        enter={handleKeyPress}
        changeButton={toggleButton}
        butonIs = {isButtonOn}
      />
      <h3>Phone exercise</h3>
      <Phone />
      <Color />
    </div>
  );
}

export default App;
