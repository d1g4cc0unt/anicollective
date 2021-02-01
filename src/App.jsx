import React, { useEffect } from 'react'
import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import Root from './Root';
import NewAlbum from './components/Album/NewAlbum';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Root}/>
      <Route path="/Anicollective-Neo" component={NewAlbum}/>
    </BrowserRouter>
  );
}

export default App;
