import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ACTIVITY } from "../constants";

const AddActivity = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    event.persist();

    setData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  console.log(`data: ${JSON.stringify(data)}`);

  const addActivity = () => {
    dispatch({
      type: ADD_ACTIVITY,
      payload: {
        name: data.name,
        duration: data.duration,
      },
    });
  };

  return (
    <div>
      <div>
        <p>Activity:</p>
        <input
          type="text"
          onChange={handleChange}
          name={"name"}
          placeholder={"Activity Name..."}
        />
      </div>
      <div>
        <p>Duration:</p>
        <input
          type="text"
          onChange={handleChange}
          name={"duration"}
          placeholder={"Duration..."}
        />
      </div>
      <button onClick={addActivity}>Submit</button>
    </div>
  );
};

export default AddActivity;
