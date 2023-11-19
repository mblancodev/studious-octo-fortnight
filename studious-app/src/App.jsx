
import Error404 from './pages/Error404';
import Mapview from './pages/Mapview';
import Navigation from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Home from './pages/home';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

 

  return (
    
    <Router>

    <Navigation></Navigation>
    <Routes >
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Map' element={<Mapview/>} />
      <Route path='*' element={<Error404/>} />
    </Routes>

  </Router>
 
  );
}

export default App;
