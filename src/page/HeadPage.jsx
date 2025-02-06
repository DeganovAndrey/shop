import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Items from "../components/Items/Items";
import ShowFullItem from "../components/ShowFullItem/ShowFullItem";
import Footer from "../components/Footer/Footer";

import "./../index.css";

const HeadPage = ({
  chooseCategory,
  onShowItem,
  currentItems,
  showFullItems,
  fullItem,
}) => {
  return (
    <div>
      <Header />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} />
      {showFullItems && (
        <ShowFullItem item={fullItem} onShowItem={onShowItem} />
      )}
      <Footer />
    </div>
  );
};

export default HeadPage;
