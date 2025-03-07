import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function AddNewProjectComponent({setProjects}) {
  const [projectName, setProjectName] = useState('');  
  const [projectDate, setProjectDate] = useState('');  
  const [projectProgress, setProjectProgress] = useState('Select Progress');
  const [projectDescription, setProjectDescription] = useState('');   
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // validation
    if (!projectName) {
      newErrors.projectName = '* Project Name is required';
    }
    if (!projectDate) {
      newErrors.projectDate = '* Please choose the deadline of your project.';
    }else if (new Date(projectDate) < new Date()) {
      newErrors.projectDate = '* Due Date must be in the future';
    }
    if (projectProgress === 'Select Progress') {
      newErrors.projectProgress = '* Please select your project progress.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    const newProject = {  
      id: Date.now(), 
      projectName,  
      dueDate: projectDate,  
      progress: projectProgress,
      description: projectDescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl non nunc fringilla aliquam.',
    };
    setProjects((prevProjects) => [...prevProjects, newProject]); 

    setProjectName('');
    setProjectDate('');
    setProjectProgress('Select Progress');
    setProjectDescription('');
    setErrors({});

  };


  return (
    <div>
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className=" text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500  font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500  dark:focus:ring-custom-sky-blue-500  flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Project
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="projectName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="projectName"
                        id="projectName"
                        value={projectName}
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                          errors.projectName ? 'border-red-600 text-red-600' : 'border-gray-300'
                        }`}
                        placeholder="Type Project Name"
                        onChange={(e) => setProjectName(e.target.value)}
                      />
                      {errors.projectName && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                          {errors.projectName}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="dueDate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Due Date
                      </label>
                      <input
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                          errors.projectDate ? 'border-red-600' : 'border-gray-300'
                        }`}
                        value={projectDate}
                        onChange={(e) => setProjectDate(e.target.value)}
                      />
                      {errors.projectDate && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                          {errors.projectDate}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="progress"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Progress
                      </label>
                      <select
                        id="progress"
                        className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                          errors.projectProgress ? 'border-red-600' : 'border-gray-300'
                        }`}
                        value={projectProgress}
                        onChange={(e) => setProjectProgress(e.target.value)}
                      >
                        <option value="">Select Progress</option>
                        <option value="100">100%</option>
                        <option value="75">75%</option>
                        <option value="50">50%</option>
                        <option value="25">25%</option>
                      </select>
                      {errors.projectProgress && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                          {errors.projectProgress}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write project description here"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl non nunc fringilla aliquam.`)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
      </div>
    </div>
  );
}
