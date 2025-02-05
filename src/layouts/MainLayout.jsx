import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";

const MainLayout = ({ orders, onDelete }) => {
  return (
    <>
      <Menu orders={orders} onDelete={onDelete} />
      <Outlet />;
    </>
  );
};

export default MainLayout;
