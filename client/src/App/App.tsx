
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import PageOne from './pages/page_01/Page_01';
import PageTwo from './pages/page_02/Page_02';
import PageThree from './pages/page_03/Page_03';
import PageFour from './pages/page_04/Page_04';



const App = () => {
  return (
  <div className="App">
    <main>
      <Router>
        <Routes>
          <Route path="/" index element={<PageOne />}></Route>
          <Route path="developers" element={<PageTwo />} />
          <Route path="customers" element={<PageThree />} />
          <Route path="blog" element={<PageFour />} />
        </Routes>
      </Router>
    </main>
  </div>
  );
}

export default App;
