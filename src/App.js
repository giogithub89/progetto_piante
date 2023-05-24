import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Layout from "./pages/Layout";
import Categories from "./pages/categories/Categories";

function App() {
  return (
    <div className="App">
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
