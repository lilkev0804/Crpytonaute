import {BrowserRouter as Router, Switch, Route,} from "react-router-dom"
import Actuality from './components/Actuality'
import Convert from './components/Convert'
import Nav from './components/Nav'
import Search from './components/Search'
import './App.css';



function App() {
  return (
   <Router>
     <div className="App">
        <Nav/>
          <Switch>
              <Route exact path="/" component={Search}/>
              <Route exact path="/actuality" component={Actuality}/>
              <Route exact path="/convert" component={Convert}/>
          </Switch>
     </div>
   </Router>
  );
}

export default App;
