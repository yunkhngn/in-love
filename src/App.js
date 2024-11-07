import './components/styles/App.css';
import {Contain} from './components/template'
import {Counter, Lover} from './components/content'

function App() {
  return (
    <Contain>
      <Counter/>
      <p
      className="footer"
      >
        Created by <a href="github.com/yunkhngn">yunkhngn</a> with ❤️
      </p>
    </Contain>
  );
}

export default App;
