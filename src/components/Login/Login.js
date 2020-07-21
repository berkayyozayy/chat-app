import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {authActions} from '../../redux/actions';

import "./LoginModule.css";
import { Button } from "reactstrap";
import firebase, { auth } from "firebase";
import fire from '../../db/app';

const Login = ({history}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const number = useSelector(state => state.authReducer.number);

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

  function apiCall(){

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
      {/*}
        <b>{number}</b>
      <Button className="login-button" color="success" onClick={() => dispatch(authActions.increment())}>Sayıyı Arttır</Button>
        <Button className="login-button" color="success" onClick={() => dispatch( authActions.decrement() )}>Sayıyı Azalt</Button>*/}

      <Button className="login-button" color="success" onClick={() => onLogin()}>Login</Button>
    </div>
  );
};

export default Login;
