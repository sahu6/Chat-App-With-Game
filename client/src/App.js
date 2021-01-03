import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/join';
import Chat from './components/chat';
import Game from './components/game';

const App = () =>{
    return(
    <Router>
        <Route path="/" exact component={Join}></Route>
        <Route path="/JoinChat" component={Chat}></Route>
        <Route path="/JoinGame" component={Game}></Route>
   </Router>
)};

export default App;