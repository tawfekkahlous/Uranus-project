import { useState } from "react";
import "./App.css";
import LoginAdmin from "./page/dashbored-pages/login/Login";
import AddCar from "./page/dashbored-pages/addCar/addCar";
import Automotives from "./page/dashbored-pages/automotives/automotives";
import Car from "./page/dashbored-pages/car/car";
import Contracts from "./page/dashbored-pages/contracts/contracts";
import LayoutDashbored from "./page/dashbored-pages/dashboard/layout-dash";
import EditCar from "./page/dashbored-pages/editCar/editCar";
import Unverified from "./page/dashbored-pages/unverified/unverified";
import User from "./page/dashbored-pages/user/user";
import Users from "./page/dashbored-pages/users/users";
import Welcome from "./page/users-pages/welcome/welcome";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayoutUser from "./components/layout-user/layout";
import Signup from "./page/users-pages/signup/signup";
import Name from "./page/users-pages/name/name";
import Validate from "./page/users-pages/validate/validate";
import ValidatePictures from "./page/users-pages/validate-pictures/validatePictuers";
import LoginUser from "./page/users-pages/login/login";
import Home from "./page/users-pages/home/home";
import Cars from "./page/users-pages/cars/cars";
import CarInfo from "./page/users-pages/carInfo/carInfo"
import MyCar from "./page/users-pages/myCar/myCar";
import RentConfirm from "./page/users-pages/rent-confirm/rentConfirm";
import RentPayment from "./page/users-pages/rent-payment/rentPayment";
import Profile from "./page/users-pages/profile/profile";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return isLogged ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<LayoutDashbored />}>
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="users/unverified" element={<Unverified />} />
          <Route path="users/unverified/user" element={<User />} />
          <Route path="automotives" element={<Automotives />} />
          <Route path="automotives/car" element={<Car />} />
          <Route path="automotives/add-car" element={<AddCar />} />
          <Route path="automotives/car/edit-car" element={<EditCar />} />
          <Route path="contracts" element={<Contracts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route path="/" element={<Welcome />} />
          <Route path="login" element={<LoginUser />} />
          <Route path="login/home" element={<Home />} />
          <Route path="login/cars" element={<Cars />} />
          <Route path="login/profile" element={<Profile />} />
          <Route path="login/profile/my-car" element={<MyCar />} />
          <Route path="login/car-info" element={<CarInfo />} />
          <Route
            path="login/car-info/rent-proccess-confirmation"
            element={<RentConfirm />}
          />
          <Route
            path="login/car-info/rent-proccess-confirmation/rent-proccess-payment"
            element={<RentPayment />}
          />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/name" element={<Name />} />
          <Route path="signup/name/validate" element={<Validate />} />
          <Route
            path="signup/name/validate/validatePictures"
            element={<ValidatePictures />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
