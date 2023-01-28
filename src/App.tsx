import ShowAlldata from "./components/ShowAllData/ShowAllData";
import ShowSingleData from "./components/ShowSingleData/ShowSingleData";
import Search from "./components/ShowAllData/Search";
import FilterData from "./components/ShowAllData/FilterData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowAlldata />}></Route>
          <Route path="/details/:id" element={<ShowSingleData />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/filter" element={<FilterData />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
