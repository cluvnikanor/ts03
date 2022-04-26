import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrawMandala from './components/DrawMandala';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={< Register />} />
        <Route path="/Mandala/*" element={< DrawMandala />} />
        <Route path="/*" element={< DrawMandala />} />
      </Routes> */}
      <DrawMandala />
    </div>
  );
}

export default App;
