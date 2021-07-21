import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Appbar from './Components/Home/Appbar';
import Home from './Components/Pages/Home';
import Mailbox from './Components/Pages/Mailbox';
import Dashboard from './Components/Pages/Dashboard';


function App() {
 
  return (
    <div>
    <Router>
      <Appbar />
      <Switch>
        <Route exact path='/'  component={Home} />
       
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/mailbox' component={Mailbox} />
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
