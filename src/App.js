import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Hotel from './Pages/hotel/hotel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
