import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NoteState from './Context/NoteState';
import About from './Components/About';

function App() {
  return (
    <NoteState>
    <BrowserRouter >
      <Routes>       
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
        {/*   <Route path="contact" element={<Contact />} />    */}
      </Routes>
    </BrowserRouter>
    </NoteState>

  );
}

export default App;
