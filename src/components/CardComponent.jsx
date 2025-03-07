import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ projects }) {

  const daysLeft = (date) => {
    const today = new Date();
    const projectDate = new Date(date);
    const diffTime = projectDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return "Overdue";
    }

    if (diffDays <= 7) {
      return `${diffDays} day${diffDays === 1 ? '' : 's'} left`;
    } else if (diffDays <= 30) {
      const weeks = Math.ceil(diffDays / 7);
      return `${weeks} week${weeks === 1 ? '' : 's'} left`;
    } else if (diffDays <= 365) {
      const months = Math.ceil(diffDays / 30);
      return `${months} month${months === 1 ? '' : 's'} left`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years === 1 ? '' : 's'} left`;
    }
  };
  const getDateColor = (progress) => {
    const progressNum = parseInt(progress, 10);
    switch (progressNum) {
      case 100:
        return 'text-custom-sky-blue';
      case 75:
        return 'text-custom-carrot';
      case 50:
        return 'text-custom-yellow';
      case 25:
        return 'text-custom-pink';
      default:
        return 'text-custom-sky-blue';
    }
  };
  const getProgressColor = (progress) => {
    const progressNum = parseInt(progress, 10);
    switch (progressNum) {
      case 100:
        return 'bg-custom-sky-blue';
      case 75:
        return 'bg-custom-carrot';
      case 50:
        return 'bg-custom-yellow';
      case 25:
        return 'bg-custom-pink';
      default:
        return 'bg-custom-sky-blue';
    }
  };

  return (
    <div className="flex flex-row flex-wrap gap-y-4 gap-x-4 overflow-auto h-[62vh] hide-scrollbar">
      {projects && projects.length > 0 ? (projects.map(({ id, projectName, dueDate, progress, description }) => (
        <div
          key={id}
          className="w-[380px] max-h-[280px] p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 "
        >
          {/* Header with date and ellipsis */}
          <div className="flex justify-between mb-5">
            <p className={`${getDateColor(progress)} font-medium`}>{new Date(dueDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          {/* Project title */}
          <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {projectName}
          </h5>

          {/* Project description */}
          <p className="line-clamp-2 h-[48px] mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
            {description}
          </p>

          {/* Progress bar */}
          <div className="w-full flex justify-between font-medium mb-1">
            <p>Progress</p>
            <p>{progress}%</p>
          </div>
          <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`h-2.5 rounded-full ${getProgressColor(progress)}`}
              style={{ width: `${progress}%` }}
            ></div>

            {/* Progress markers */}
            {/* <div
              className="border-l-4 rounded-full border-l-custom-pink h-5 absolute -top-1 left-1/4"
              title="25%"
            ></div>
            <div
              className="border-l-4 rounded-full border-l-custom-yellow-500 h-5 absolute -top-1 left-2/4"
              title="50%"
            ></div>
            <div
              className="border-l-4 rounded-full border-l-custom-carrot h-5 absolute -top-1 left-3/4"
              title="75%"
            ></div> */}
          </div>

          {/* Deadline */}
          <div className="flex justify-end">
            <p className={`font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-50 text-center ${
              daysLeft(dueDate) === "Overdue" ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
            }`}>
              {daysLeft(dueDate)}
            </p>
          </div>
        </div>
      ))) : ( 
        <p className="text-gray-500">No projects available.</p>
      )}
    </div>
  );
}