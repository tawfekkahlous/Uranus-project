import { useNavigate } from "react-router-dom";
import "./unverified.css"
const Unverified = () => {

  const navigate=useNavigate()
   const header = [
     "Name",
     "Residency",
     "Email",
     "Phone",
     "car rental income",
   ];

  return (
    <div className="Unverified w-[100%]">
      <h1 className="title">New unverified users</h1>

      <table className="table  rounded-tl-[21px] rounded-tr-[21px] overflow-hidden w-[100%]">
        <thead>
          <tr>
            {header.map((item, key) => (
              <th key={key}> {item} </th>
            ))}
          </tr>
        </thead>
        <tbody className="body" >
          <tr onClick={() => navigate("user")} className="cursor-pointer">
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
        </tbody>
      </table>
    </div>
  );
};

export default Unverified;
