
import './App.css';
import Counter from './components/Counter'
import Fetching from './components/Fetching';
// import Calculus from './components/Calculus';
// import Addition from './components/Addition';
// import Multiplication from './components/Multiplication';

function App() {
  return (
    <div className="App">

<div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 

      <Counter />
      <Fetching />
      {/* <form> 
        
        <input 
          pattern="[0-9]" 
          // ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <Addition />
        <button >subtract</button> 
        <Multiplication />
        <button >divide</button> 
        <button >reset input</button> 
        <button >reset result</button> 
      </form>  */}
      
    </div>
  );
}

export default App;
