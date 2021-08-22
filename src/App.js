import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './Styles/App.css';
import AskQuestion from './AskQuestion.js'
import NavBar from './NavBar.js'
import StartPage from './StartPage.js'
import Nav from './HoagieNav.tsx'

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
          <Nav name="trade" />
      <header className="App-header">
        <StartPage/>
      </header>
    </div>
  );
}

export default App;
