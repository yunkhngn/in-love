import './components/styles/App.css';
import {Contain} from './components/template'
import {Counter, Lover} from './components/content'

function App() {
  return (
    <Contain>
      <Counter/>
      <Lover/>
    </Contain>
  );
}

export default App;
