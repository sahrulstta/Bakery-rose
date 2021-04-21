import React from 'react'
import GlobalStyled from './GlobalStyled'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Component/NavBar/NavBar'
import Foter from './Component/Footer/Foter'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Product from './Pages/Product/Product'
import Contact from './Pages/Contact/Contact'
import ScrolToTop from './Component/ScrolToTop'


function App() {
  return (
    <Router>
      <GlobalStyled/>
      <ScrolToTop/>
      <NavBar />
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/product' exact component={Product}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <Foter/>
    </Router>
  );
}

export default App;
