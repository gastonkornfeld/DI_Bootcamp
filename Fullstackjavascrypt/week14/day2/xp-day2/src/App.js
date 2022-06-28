import './App.css';
import React from 'react';
import Exercisetwo from './Exercisetwo';
import Sum from './Sum';
import UserFavColors from './UserFavColors';
import Exercise4 from './Exercise4';
// import ReactDOM from 'react-dom/client';

// exercise 1

// const myElement = React.createElement('h1', {}, 'I do not use JSX!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise4 />
        <h1>Exercise 1</h1>
        <Exercisetwo />
        <h2> Exercis two</h2>
        <p> React is <Sum /> times better with jsx</p>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <UserFavColors user={user} />
        
      </header>
    </div>
  );
}

export default App;
