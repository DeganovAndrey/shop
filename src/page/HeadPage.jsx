import { useSelector } from "react-redux";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Items from "../components/Items/Items";
import ShowFullItem from "../components/ShowFullItem/ShowFullItem";
import Footer from "../components/Footer/Footer";
import { selectShowFullItems } from "../redux/slices/allItemsSlice";

import "./../index.css";

const HeadPage = () => {
  const showFullItems = useSelector(selectShowFullItems);

  return (
    <div>
      <Header />
      <Categories />
      <Items />
      {showFullItems && <ShowFullItem />}

      <Footer />
    </div>
  );
};

export default HeadPage;
