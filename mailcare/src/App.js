import './App.css';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/Topbar';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
