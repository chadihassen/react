import './App.css';
import Navbarr from "./components/Navbarr";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardd from './components/Cardd';


function App() {
  return (
    <div>
      <Navbarr />
      <Home />
      <div className='carta'>
      <Cardd />
      <Cardd />
      <Cardd />
      </div>
    </div>
    
  );
}

export default App;
