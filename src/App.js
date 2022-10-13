import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from "./components/sidebar/Navbar";
import Home from './components/pages/Home';
import Reports from './components/pages/Reporst';
import Products from './components/pages/Products';
import MyWork from './components/pages/myWork/MyWork';
import Page from "./components/main_page/Page"

function App() {
  return (
    // TODO: add router, and import <App /> in index.js
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
        {/* <Route
                path="/"
                render={() => {
                    return (
                      <Redirect to="/" /> 
                    )
                }}
              /> */}
          <Route path='/' exact element={<Page />} />
          <Route path='/mywork' element={<MyWork />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
