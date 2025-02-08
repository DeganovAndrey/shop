import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeadPage from "./page/HeadPage";
import About from "./page/About";
import Cabinet from "./page/Cabinet";
import Contacts from "./page/Contacts";
import NotFound from "./page/NotFound";
import MainLayout from "./layouts/MainLayout";
import AllItems from "./page/AllItems";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HeadPage />} />
            <Route path="all" element={<AllItems />} />
            <Route path="about" element={<About />} />
            <Route path="cabinet" element={<Cabinet />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
