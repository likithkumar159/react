import './assets/fonts/responsive.css'
import './App.css';
import Requirements from './components/Requirements';
import './assets/icons/style.css';
import { Filteruniversal } from './components/Filteruni_context';


function App() {
  return (
    <Filteruniversal>
      <Requirements />
    </Filteruniversal>
  );
}

export default App;
