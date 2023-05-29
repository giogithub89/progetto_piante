import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Esplora from "./pages/Esplora";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="esplora" element={<Esplora/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
