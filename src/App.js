import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import View from './components/View';

function App() {
  return (
    <Router>
        <Switch>

            <Route path='/view'>
              <Header />
              <View />
            </Route>

            <Route path='/'>
                <Header  />
                <Home  />
            </Route>


        </Switch>
    </Router>
  );
}

export default App;
