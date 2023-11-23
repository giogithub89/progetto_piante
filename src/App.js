import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Esplora from "./pages/Esplora";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import InsertNewCard from "./Component/InsertNewCard/InsertNewCard";
import Animals from "./pages/Animals";
import Plants from "./pages/Plants";
import Places from "./pages/Places";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="esplora" element={<Esplora />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="add-new-item" element={<InsertNewCard />} />
          <Route path="animals/:id" element={<Animals />} />
          <Route path="plants/:id" element={<Plants />} />
          <Route path="places/:id" element={<Places />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
