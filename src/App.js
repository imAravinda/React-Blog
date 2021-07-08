import './App.css';
import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import create from './create';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
