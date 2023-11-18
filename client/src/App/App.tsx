
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Page_01 from './pages/page_01/Page_01';
import Page_02 from './pages/page_02/Page_02';
import Page_03 from './pages/page_03/Page_03';
import Page_04 from './pages/page_04/Page_04';



const App = () => {
  return (
  <div className="App">
    <main>
      <Router>
        <Routes>
          <Route path="/" index element={<Page_01 />}></Route>
          <Route path="developers" element={<Page_02 />} />
          <Route path="customers" element={<Page_03 />} />
          <Route path="blog" element={<Page_04 />} />
        </Routes>
      </Router>
    </main>
  </div>
  );
}

export default App;
