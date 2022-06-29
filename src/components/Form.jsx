import React from "react";
import Input from "./Input";
import List from "./List";
import './Form.css'

const Form = () => {
  const [data, Setdata] = React.useState([]);
  const getdata=()=>{
    fetch(`http://localhost:3001/data`)
    .then((res)=>res.json())
    .then((res)=>Setdata(res))
  }
  const AddData = (name, age, address, dept, sal, m_s) => {
    const Data = {
      Name: name,
      Age: age,
      Address: address,
      Department: dept,
      Salary: sal,
      marital_state: m_s
    };
    fetch(`http://localhost:3001/data`,{
        method:"POST",
        body:JSON.stringify(Data),
        headers:{
            "content-type": "application/json"
          }
    }).then((res)=>res.json()).then((res)=>getdata()).catch((err)=>console.log(err))
  };
 React.useEffect(()=>{
    getdata();
 },[])
  console.log("Array of data", data);
  return (
    <div>
      <Input AddData={AddData} />
      <List data={data} />
    </div>
  );
};
export default Form;
