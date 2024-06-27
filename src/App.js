// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Index from "./pages/Index";

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

        </Routes>
      </main> 
    </Router>
   </div>
  )
}

export default App;
