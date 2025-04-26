import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NewsIndex from "./component/NewsIndex";
import TopNavBar from "./component/TopNavBar";
import About from "./Pages/About";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <TopNavBar/>
      <Routes>
        <Route path="/" element={<NewsIndex />}/>
         <Route path="/about" element={<About />} />
        {/*  <Route index element={<About />} />          
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
