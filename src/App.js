import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/Navbarr';
import Cardd from './Components/Cardd';
import Cardd1 from './Components/Cardd1';
import Cardd2 from './Components/Cardd2';


function App() {
  return (
    <div>
      <Navbarr />
      <div className='carta'>
      <Cardd />
      <Cardd1 />
      <Cardd2 />
      </div>
      
    </div>
  );
}

export default App;
