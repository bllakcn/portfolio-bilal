import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';


function App() {
  return (
    <div className="font-sans">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Projects/>} path='/projects'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
