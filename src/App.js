import logo from './logo.svg';
import './App.css';
import {Text,Box} from "@chakra-ui/react"
import {BrowserRouter as  Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header";
import Coins from './components/Coins';
import Exchanges from "./components/Exchanges";
import Home from "./components/Home"
import CoinDetails from "./components/CoinDetails"
import Footer from './components/Footer';
import HomePage from './HomeComponent/HomePage';

function App() {
  return ( 
    <div className="App"  >
      
       <Router>
        <Header/>
          <Routes>

              <Route path="/" element={<Home/>} />
              <Route path="/coins" element={<Coins/>} />
              <Route path="/exchanges" element={<Exchanges/>} />
              <Route path="/coins/:id" element={<CoinDetails/>} />

          </Routes>
          {/* <Footer/> */}

       </Router>

    </div>
  );
}

export default App;
