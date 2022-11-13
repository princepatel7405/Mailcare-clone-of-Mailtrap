import './App.css';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/Topbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './components/Footer/Footer';
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div className="App">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Mailcare</title>
                <link rel="canonical" href="https://i.postimg.cc/y891HtH8/Screenshot-2022-11-11-032413.png" />
            </Helmet>
      <Topbar/>
      <Navbar/>
      <AllRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
