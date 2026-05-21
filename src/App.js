import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import Docs from './pages/docs';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> {/* Routes replaces Switch in video */}
          <Route path="/" exact element={<Home />} /> {/* element={<PAGE />} replaces the video componenet*/}
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/docs" exact element={<Docs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
