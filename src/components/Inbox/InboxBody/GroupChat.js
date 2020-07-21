import React, {useState} from 'react'
import { Checkbox } from "semantic-ui-react";



const GroupChat = ({ data }) => {
    const [state, setState] = useState(data);

    const handleCheck = idx => {
      let val = state[idx];
      val["checked"] = !val["checked"];
      let updatedState = { ...state };
      updatedState[idx] = val;
      setState(updatedState);
    };
    const users = () => {
      let d = [];
      if (state.length === 0) {
        return [];
      }
      for (const [key, value] of Object.entries(state)) {
        d.push(
          <Checkbox
            key={key}
            label={value["name"]}
            name={value["name"]}
            checked={value["checked"]}
            onChange={() => handleCheck(key)}
          />
        );
      }
      return d;
    };
  
    return (
      <div>
        {users()}
      </div>
    );
  };

export default GroupChat; 
  