import React from "react";

const AppFilter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button><br/><br/>
      <button onClick={() => setFilter("Completed")}>Completed</button><br/><br/>
      <button onClick={() => setFilter("Incomplete")}>Incomplete</button>
    </div>
  );
};

export default AppFilter;
