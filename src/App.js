import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './home';
import {Saptapadi} from './Saptapadi';
import {Birthday}  from './Birthday';
import Signup from './Signup'
import './pigga.css';







function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Saptapadi' element={<Saptapadi/>}/>
        <Route path='Birthday' element={<Birthday/>}/>
        <Route path='Signup' element={<Signup/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
