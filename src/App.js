import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StudentHeader from './components/StudentHeader';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddStudent/>}/>
      <Route path='/search'element={<SearchStudent/>}/>
      <Route path='/home'element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   );
}

export default App;
