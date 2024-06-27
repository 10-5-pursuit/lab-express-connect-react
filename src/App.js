// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";

// COMPONENTS
import NavBar from "./components/NavBar";

function App() {
  return (
   <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Index />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/new" element={<New />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
          </Routes>
      </main> 
    </Router>
   </div>
  )
}

export default App;
