import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/screens/Home/Home';

const userName = 'Olive Larson';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home userName={userName} />
    </div>
  );
}

export default App;
