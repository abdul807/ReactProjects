
import './App.css';
import Aboutpage from './components/Aboutpage';
import Homepage from './components/Homepage';
import { Route , Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='nav'>

        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/about' className='nav-item'>About</Link>

    

      </nav>

      <Routes>
            <Route path='/' element={<Homepage isLoggedIn ={true}/>} />

            <Route path='/about' element={<Aboutpage/>} />
      </Routes>



 
    
    </div>
  );
}

export default App;
