import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Hotel from './Pages/hotel/hotel'
import List from './Pages/list/list'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/hotel/list" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
