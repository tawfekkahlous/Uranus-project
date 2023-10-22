import headerLogo from "../../assets/Logo.png"
import "./header.css"
import star from "../../assets/star.svg"
import search from "../../assets/search.svg"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className=" header ">
      <div className=" container mx-auto  flex items-center justify-between h-[50px] px-[20px]">
        <div className="flex items-center   ">
          <img
            src={headerLogo}
            alt="header-logo"
            className="w-[80px] h-[38px]  mr-[13px] "
          />
          <p className="title"> URANUS RENT A CAR L.L.C</p>
        </div>
        <ul className="flex gap-x-[60px]  ">
          <NavLink to="home">
            <li className="active"> Home </li>
          </NavLink>
          <NavLink to="cars">
            <li> Cars </li>
          </NavLink>
          <NavLink to="profile">
            <li> Profile </li>
          </NavLink>
        </ul>
        <div className="flex justify-between gap-[10px]">
          <img src={star} alt="star" className="h-[20px]" />
          <img src={search} alt="search" className="h-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default Header;