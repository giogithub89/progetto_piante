import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Layout from "./pages/Layout";
import Categories from "./pages/categories/Categories";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Homepage />} />
          <Route path={"categories"} element={<Categories />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
