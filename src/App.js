import {BrowserRouter as Router, Switch, Route,} from "react-router-dom"
import Actuality from './components/Actuality'
import Nav from './components/Nav'
import Search from './components/Search'
import './App.css';



function App() {
  return (
    <div className="App">
   <Router>
     
        <Nav/>
          <Switch>
              <Route exact path="/" ><Search></Search></Route>
              <Route exact path="/actuality" ><Actuality></Actuality></Route>
          </Switch>
     
   </Router>
   </div>
  );
}

export default App;
