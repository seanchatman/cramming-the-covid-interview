import React from "react";

const Activity = ({ id, name, duration }) => {
  return (
    <div>
      <p>
        Id: {id}, Activity: {name}, Duration: {duration}
      </p>
      <button>Delete</button>
    </div>
  );
};

export default Activity;
