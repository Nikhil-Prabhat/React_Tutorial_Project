import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
