import './index.css';
import About from './Paginas/about.jsx';
import Ejercicio1 from './Paginas/Ejercicio1.jsx';
import Ejercicio2 from './Paginas/Ejercicio2.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Tutorial IDX 2</h1>
        <p className="read-the-docs">Programas del archivo Tutorial IDX 2</p>

        <nav>
          <li><Link to="/about">Inicio</Link></li><br />
          <li><Link to="/ejercicio1">Ejercicio 1 CheckBoxs</Link></li><br />
          <li><Link to="/ejercicio2">Ejercicio 2 ImagesHalo</Link></li>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/ejercicio1" element={<Ejercicio1 />} />
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


