import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import HeadPage from "./page/HeadPage";
import About from "./page/About";
import Cabinet from "./page/Cabinet";
import Contacts from "./page/Contacts";
import NotFound from "./page/NotFound";
import MainLayout from "./layouts/MainLayout";
import items from "./../src/data/staffs.json";
import AllItems from "./page/AllItems";

function App() {
  const [currentItems, setCurrentItems] = useState([...items]);
  const [showFullItems, setShowFullItems] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter((el) => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItems(!showFullItems);
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <HeadPage
                  chooseCategory={chooseCategory}
                  onShowItem={onShowItem}
                  currentItems={currentItems}
                  item={fullItem}
                />
              }
            />
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
