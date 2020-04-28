import React from 'react';
import './App.css';
import {Switch,Route, Redirect} from 'react-router-dom';
import Home from './Home';
import sHome from './student/sHome';
import tHome from './teacher/tHome';
import sRegister from './student/sRegister';
import tShow from './teacher/tShow';
import error from './error';

function App() {

  // const [name, setName] = useState("")


  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/sHome' component={sHome} />
          <Route exact path='/tHome' component={tHome}/>
          <Route exact path='/sRegister' component={sRegister}/>
          <Route exact path='/tShow' component={tShow}/>
          <Route exact path='/error' component={error}/>;
          <Redirect to='/error'/>
        </Switch>
    </div>
  );
}

export default App;
