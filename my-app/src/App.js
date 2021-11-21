import './styles/style.scss'
import './App.css';
import { Homepage } from './components/homepage/Homepage';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Homepage />
     
    </GlobalProvider>
  );
}

export default App;
