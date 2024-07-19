import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import Main from './component/main';
import Blog from './Pages/blog';
import Ceremony from './Pages/ceremony';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/ceremony' element={<Ceremony />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
