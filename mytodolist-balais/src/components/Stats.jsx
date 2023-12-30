import React from 'react'

const Stats = ({ toDoList }) => {
    let countList = toDoList.length;
  return (
    <div className="stats">
        <p className="notify">
        {countList ===0 
        ? 'There Are No Tasks Listed Yet' 
        : `You have ${countList} tasks on your list!`}
        </p>
    </div>
  );
};

export default Stats;
