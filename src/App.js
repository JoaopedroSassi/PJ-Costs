import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>

      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/newproject">
          <NewProject />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
