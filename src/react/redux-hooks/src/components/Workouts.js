import React, { useState } from "react";
import Activity from "./Activity";
import { useSelector } from "react-redux";
import AddActivity from "./AddActivitiy";

const Workouts = () => {
  const activitiesList = useSelector((state) => {
    return state.activities;
  });

  const [add, setAdd] = useState(false);

  return (
    <div>
      <h2>My Workouts</h2>
      <button onClick={() => setAdd(!add)}>Add Activity</button>
      {add && <AddActivity />}
      {activitiesList.map((activity) => {
        return <Activity {...activity} key={activity.id} />;
      })}
    </div>
  );
};

export default Workouts;
