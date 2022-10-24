import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
