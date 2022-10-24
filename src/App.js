import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="font-sans">
      <HashRouter>
        <Routes>
          <Route element={<Home/>} path='/'/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
