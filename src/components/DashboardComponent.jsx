import React, { useState } from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent({items = []}) {
  // count only totalAss and inProgress
  const getTaskCount = (label) => {
    if (label === "Total Assignments" || label === "In Progress") {
      return items.length;
    }

    const task = dashboard.find((item) => item.label === label);
    return task ? task.totalTasks : 0;
  };

  return (
    <div>  
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>  

      {/* display summary on each card */}  
      <div className="flex gap-5 justify-between mb-4 flex-wrap">  
        {dashboard.map(({ id, icon, totalTasks, label, color }) => (  
          <div key={id} className="flex bg-white gap-5 py-3.5 px-4 rounded-xl shadow-sm w-[245px]">  
            <div className={`p-3 rounded-xl ${color}`}>  
              <img src={icon} alt="file icon" />  
            </div>  
            <div>  
              <p className="text-xl font-semibold">{getTaskCount(label)}</p>  
              <p className="text-gray-400">{label}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>
  );
}
