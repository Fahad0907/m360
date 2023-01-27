import ShowAlldata from "./components/ShowAllData/ShowAllData";
import ShowSingleData from "./components/ShowSingleData/ShowSingleData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowAlldata />}></Route>
          <Route path="/details/:id" element={<ShowSingleData />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
