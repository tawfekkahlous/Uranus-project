import { NavLink } from "react-router-dom";
import "./sidebar.css";
import Logo from "../../assets/sidebar-logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar h-[100vh] w-[250px] bg-[#353B42] sticky top-0 left-0 ">
      <div className="w-[180px]  h-[50px] mx-[auto] pt-[40px] ">
        <img src={Logo} alt="logo" width="100%" />
      </div>

      <ul>
        <NavLink
          to="users"
          className={
            "w-full flex items-center justify-center text-white py-4 h-[70px] hover:bg-[#E42E35] mt-[130px] text-[15px] font-[700] font-[Quicksand]"
          }
        >
          <li> Users </li>
        </NavLink>
        <NavLink
          to="automotives"
          className={
            "w-full flex items-center justify-center text-white py-4 h-[70px] hover:bg-[#E42E35] text-[15px] font-[700] font-[Quicksand]"
          }
        >
          <li> Automotives </li>
        </NavLink>
        <NavLink
          to="contracts"
          className={
            "w-full flex items-center justify-center text-white py-4 h-[70px] hover:bg-[#E42E35] text-[15px] font-[700] font-[Quicksand]"
          }
        >
          <li> Contracts </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
