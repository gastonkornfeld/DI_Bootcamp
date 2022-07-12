import './App.css';
import { Route, Link, Routes } from "react-router-dom";
import Shop from './components/Shop';
import Profile from './components/Profile';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
