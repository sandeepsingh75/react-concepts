import './App.css';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Profile1 from './components/profile1.js';


function App() {
  return (
    <div className="App">
      <h1> Hello world</h1>
      <Home name="Sandeep Singh" />
      <Profile />
      <Profile1 name="sanjay" mark="80" />
    </div>
  );
}

export default App;
