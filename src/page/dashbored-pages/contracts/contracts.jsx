import "./contracts.css"
const Contracts = () => {

    const header=["User","Car","Brand","duration","From","To","Total Price"]
  return (
    <div className="contracts w-[100%]">
      <p className=" title">Automotives</p>
      <table className="table w-[100%] rounded-tl-[21px] rounded-tr-[21px] rounded-br-[21px] rounded-bl-[21px] overflow-hidden">
        <thead>
          <tr>
            {header.map((item, key) => (
              <th key={key}> {item} </th>
            ))}
          </tr>
        </thead>
        <tbody className="body">
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 2</td>
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
            <td>Data 2</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 2</td>
            <td>Data 2</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contracts