import "./users.css";
import person from "../../../assets/person.svg";
import arrowRight from "../../../assets/arrowRigth.svg";
import { Link } from "react-router-dom";
const Users = () => {
  const header = ["Name", "Brand", "Year", "Distance", "Color"];


  return (
    <div className="users w-[100%]">
      <h1 className="title">Users</h1>

      <Link to="unverified">
        <div className="w-[100%]  unverified  flex justify-between  items-center mb-[44px] px-[15px] py-[15px] cursor-pointer ">
          <div className="flex ml-[10px]">
            <img
              src={person}
              alt="person"
              className="w-[25px] mr-[10px]"
            />
            <p className="person">New unverified users</p>
          </div>
          <div className="flex mr-[10px]">
            <p className="mr-[8px] arrow flex items-center justify-center">
              9 new
            </p>
            <img
              src={arrowRight}
              alt="arrowRight"
              className="w-[25px]  "
            />
          </div>
        </div>
      </Link>

      <table className="table w-[100%] rounded-tl-[21px] rounded-tr-[21px] rounded-br-[21px] rounded-bl-[21px] overflow-hidden">
        <thead className="">
          <tr>
            {header.map((item, key) => (
              <th key={key}> {item} </th>
            ))}
          </tr>
        </thead>
        <tbody className="body">
          <tr >
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 2</td>
            <td>Data 2</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
