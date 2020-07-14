import React, { useState, useEffect } from "react";
import "./LoginModule.css";
import { Button } from "reactstrap";
import firebase from "firebase";
import fire from '../../db/app';

const Login = () => {
  const [coaches] = useState([
    {
      label: "K-1",
      value: "K-1",
    },
    {
      label: "K-2",
      value: "K-3",
    },
    {
      label: "K-3",
      value: "K-3",
    },
    {
      label: "K-4",
      value: "K-4",
    },
  ]);
  const path = "Messages";

  // useEffect(() => {
  //     const coachesRef = fire
  //     .database()
  //     .ref(path)
  //     .once("value", (snapshot) => {
  //       let coachesData = snapshot.val();
  //       console.log(coachesData);
  //     })
  // }, [])

  return (
    <div className="login-container">
      <select>
        {coaches.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <Button className="login-button" color="success">Login</Button>
    </div>
  );
};

export default Login;
