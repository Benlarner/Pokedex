import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch,} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Nav from './Components/Nav/Nav';
import Pokelist from './Components/Pokelist/Pokelist';
import Pokehome from './Components/Pokehome/Pokehome';

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component ={Homepage}></Route>
        <Route path="/pokedex" component ={Pokehome} ></Route>
        <Route path="/pokelist" component ={Pokelist} ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
