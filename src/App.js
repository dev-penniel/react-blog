import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetails';
import NotFound from './NotFound';

function App() {
  // const hello = 'Hello World';
  // const likes = Math.floor(Math.random() * 50);
  // const link = "https://www.facebook.com/";

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
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <Blogdetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
