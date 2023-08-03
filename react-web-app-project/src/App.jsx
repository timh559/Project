import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import AdvancedSearch from "./pages/AdvancedSearch";

function App() {
  
  return (
    <div style={{
      height: '100vh'
    }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/search2" element={<AdvancedSearch/>}/>
      </Routes>
      
    </div>
  )
}

export default App
