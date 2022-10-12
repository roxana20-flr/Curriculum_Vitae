import React from "react";
import "./Page.css";
import SocialFlow from "./SocialFlow.js";
import Navbar from "../sidebar/Navbar";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reporst';
import Products from '../pages/Products';

function Page() {
    return (
      <div className="Page">
            <div className="line"></div>
            <Router>
        <Navbar />
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
            <h1 className="name">Savu Roxana Florina</h1>
            <SocialFlow/>
      </div>
    );
  }
  
  export default Page;
  