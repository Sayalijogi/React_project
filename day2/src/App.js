import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/Stylesheet';
import Inline from './components/InlineStyle';
import './components/appStyle.css'
import style from './components/appStyle.module.css'
import MyStyleR from './components/MyStyleR';
import InlineR from './components/InlineR';
import styleT from './components/MyStyleR.module.css'
import Form from './Form';
import LifecyleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <LifecyleA></LifecyleA>
      

      {/* <Form></Form> */}
      




      {/* <h1 className="five">Sayali</h1>
      <h1 className={styleT.eight}>Sayali</h1>
      <InlineR></InlineR> */}





      {/* <MyStyleR nm = "six"></MyStyleR> */}
    

      {/* <h1 className='red'>Hello</h1>
      <h1 className={style.green}>Hello</h1>

      <Inline></Inline>  */}

      
      {/* <Stylesheet name = "two"></Stylesheet> */}

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
