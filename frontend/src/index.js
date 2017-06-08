import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import HomeEndPoint from './EndPoints/Home';
import AboutEndPoint from './EndPoints/About';
import AddStockEndPoint from './EndPoints/AddStock';
import './index.css';
import TopBar from './Navigation/TopBar';
import VerticalBar from './Navigation/VerticalBar';



ReactDOM.render( (
    <Router>
    <div>
      <TopBar projectName="Stocks Explorer" navLinks={ [{text:'Login',href:'./login'},{text:'About',href:'/about'}] }/>
      <VerticalBar navLinks={ [{text:'DashBoard',href:'./'},{text:'Historical Graphs',href:'./history'},{text:'Live Graphs',href:'./live'},{text:'Add Stocks',href:'/add'},{text:'Manage Stocks',href:'/manage'},{text:'Evaluate Stocks',href:'/stockeval'},{text:'Algorithms Evaluator',href:'/algoeval'}] } />

      <Route exact path="/" component={HomeEndPoint}/>
      <Route exact path="/add" component={AddStockEndPoint}/>
      <Route path="/about" component={AboutEndPoint}/>
    </div>
  </Router>
),
  document.getElementById('root')
);
 