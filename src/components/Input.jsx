import React from "react";

const Input = ({ AddData }) => {
  const [name, setname] = React.useState("");
  const [age, setage] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [dept, setdept] = React.useState("");
  const [sal, setsal] = React.useState("");
  const [m_s, setm_s] = React.useState("");

  return (
    <>
      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        placeholder="name"
        type="text"
      />
      <input
        onChange={(e) => setage(e.target.value)}
        value={age}
        placeholder="age"
        type="number"
      />
      <input
        onChange={(e) => setaddress(e.target.value)}
        value={address}
        placeholder="address"
        type="text"
      />
      <input
        onChange={(e) => setdept(e.target.value)}
        value={dept}
        placeholder="dept"
        type="text"
      />
      <input
        onChange={(e) => setsal(e.target.value)}
        value={sal}
        placeholder="salary"
        type="number"
      />
      <input
        onChange={(e) => setm_s(e.target.value)}
        value={m_s}
        placeholder="marital status"
        type="text"
      />
      <button onClick={() => AddData(name, age, address, dept, sal, m_s)}>
        Add Data
      </button>
    </>
  );
};
export default Input;
