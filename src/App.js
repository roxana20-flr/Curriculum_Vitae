import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from "./components/sidebar/Navbar";
import Story from './components/pages/story/Story';
import Hobby from './components/pages/hobby/Hobby';
import MyWork from './components/pages/myWork/MyWork';
import Page from "./components/main_page/Page"

function App() {
  return (
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
          <Route path='/story' element={<Story />} />
          <Route path='/hobby' element={<Hobby />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
