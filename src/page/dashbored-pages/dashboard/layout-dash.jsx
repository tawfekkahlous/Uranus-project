import Sidebar from "../../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const LayoutDashbored = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex items-start  grow flex-col  mx-[48px] container  my-[60px]">
        <Outlet />
      </div>
    </div>

    // <>
    //   <Sidebar />
    //   <Outlet />
    // </>
  );
};

export default LayoutDashbored;
