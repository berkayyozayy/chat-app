import React, { useState, useEffect } from "react";
import "./LoginModule.css";
import { Button } from "reactstrap";
import firebase from "firebase";
import fire from '../../db/app';

const Login = ({history}) => {
  const [selectedCoachId, setSelectedCoachId] = useState("K1")
  const [coaches] = useState([
    {
      label: "Beril Albaş",
      value: "K1",
    },
    {
      label: "Merve Şahin",
      value: "K2",
    },
    {
      label: "Yağmur Cantekin",
      value: "K3",
    },
    {
      label: "Beliz Baylan",
      value: "K4",
    },
  ]);
  const path = "Messages";

  function onChange(e){
      let value = e.target.value;
      setSelectedCoachId(value);
  }

  function onLogin(){
    history.push('inbox', {
      coachId: selectedCoachId
    })
  }

  return (
    <div className="login-container">
      <select onChange={e => onChange(e)}  style={{width: 150}}>
        {coaches.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <Button className="login-button" color="success" onClick={() => onLogin()}>Login</Button>
    </div>
  );
};

export default Login;
