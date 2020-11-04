import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from '../Album/Album'
import Artist from '../Artists/Artist'
import ArtistList from '../Artists/ArtistList'
import Home from '../Home/Home'
import Login from '../Login/Login';

class Router extends React.Component {
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/artists" component={ArtistList}></Route>
          <Route exact path="/artists/:artistId" component={Artist}></Route>
          <Route exact path="/artists/:artistId/:albumId" component={Album}></Route>
          <Route exact path="/callback" component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default Router;