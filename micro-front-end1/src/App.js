import React,  { Suspense }  from 'react';
import MoviePart from './components/MoviePart';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component= {MoviePart}/>
              <Route exact path="/movie/:movieId" component= {MovieDetail}/>
          </Switch>
      </Router>
  );
}

export default App;