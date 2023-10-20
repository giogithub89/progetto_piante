import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Esplora from "./pages/Esplora";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import InsertNewCard from "./Component/InsertNewCard/InsertNewCard";
import Product from "./pages/Product";
import Plants from "./pages/Plants";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="esplora" element={<Esplora />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="InsertNewCards" element={<InsertNewCard />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="plants/:id" element={<Plants />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
