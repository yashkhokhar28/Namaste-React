import { useState } from "react";

const User = ({ name }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h2>Count 1: {count1}</h2>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setCount1((count1) => count1 + 1);
        }}
      >
        Update Count 1
      </button>
      <h2>Count 2: {count2}</h2>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          setCount2((count2) => count2 + 1);
        }}
      >
        Update Count 2
      </button>
      <h3>Loaction : Rajkot</h3>
      <h4>Contact : @yashkhokhar28</h4>
    </div>
  );
};

export default User;
