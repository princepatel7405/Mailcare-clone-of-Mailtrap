import './App.css';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/Topbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Navbar/>
      <AllRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
