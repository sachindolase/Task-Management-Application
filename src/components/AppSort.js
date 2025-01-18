import React from "react";

const Sort = ({ setSortOption }) => {
  return (
    <div>
      <button onClick={() => setSortOption("date")}>Sort by Date</button><br/><br/>
      <button onClick={() => setSortOption("priority")}>Sort by Priority</button>
    </div>
  );
};

export default Sort;
