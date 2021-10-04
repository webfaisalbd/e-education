// import files 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import AllServices from './component/AllServices/AllServices';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LiveSession from './component/LiveSession/LiveSession';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div>

      <Router>
        {/* this is our header where includes nav bar  */}
        <Header></Header>

        <Switch>

          {/* this is home page route when get exactly '/' , it redirects home page  */}
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* this is home page route  when get  '/home' , it redirects home page  */}
          <Route path="/home">
            <Home></Home>
          </Route>

          {/* this is about page route  when get  '/about' , it redirects about page  */}
          <Route path="/about">
            <About></About>
          </Route>

          {/* this is livesession page route  when get  '/livesession' , it redirects livesession page  */}
          <Route path="/livesession">
            <LiveSession></LiveSession>
          </Route>

          {/* this is allservices page route  when get  '/allservices' , it redirects allservices page   */}
          <Route path="/allservices">
            <AllServices></AllServices>
          </Route>


          {/* this is notfound  page route  when get  '/any garbage url' , it redirects notfound page  */}
          <Route path="*">
            <NotFound></NotFound>

          </Route>


        </Switch>


        {/* this is our footer  */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
