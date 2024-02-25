import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import MyCart from './Components/MyCart';


function App() {
  
  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;
