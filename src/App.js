import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import AllServices from './component/AllServices/AllServices';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LiveSession from './component/LiveSession/LiveSession';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div>

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>

          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/livesession">
            <LiveSession></LiveSession>

          </Route>

          <Route path="/allservices">
            <AllServices></AllServices>

          </Route>



          <Route path="*">
            <NotFound></NotFound>

          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
