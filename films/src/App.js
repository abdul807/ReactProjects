

import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites'
import { Route, Routes } from 'react-router-dom';
import {MovieProvider} from './context/MovieContext'
import Nav from './components/Nav';



function App() {
  return (
    <MovieProvider>
      <Nav />
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    
    </div>

    </MovieProvider>
  );
}

export default App;
