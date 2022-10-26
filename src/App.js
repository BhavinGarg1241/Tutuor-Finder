import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Tutors from './Components/Tutors/Tutors';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Signup from './Components/SignUp/Signup';
import Login from './Components/Login/Login';
import { Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/navigation' element={<Navigation/>} />
        <Route path='/tutors' element={<Tutors/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>

    </>
  );
}

export default App;
