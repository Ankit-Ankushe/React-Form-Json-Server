const List = ({ data }) => {
    console.log("data", data);
    return (
      <div>
        <div>
          <table>
            <thead>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Marital Status</th>
            </thead>
          </table>
          {data.map((el) => (
            <tbody>
              <th>
                <tr>{el.Name}</tr>
              </th>
              <th>
                <tr>{el.Age}</tr>
              </th>
              <th>
                <tr>{el.Address}</tr>
              </th>
              <th>
                <tr>{el.Department}</tr>
              </th>
              <th>
                <tr>{el.Salary}</tr>
              </th>
              <th>
                <tr>{el.marital_state}</tr>
              </th>
            </tbody>
          ))}
        </div>
      </div>
    );
  };
  export default List;
  