import React from "react";

export default function FilterComponent({ onSortChange }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <select
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray appearance-none"
          onChange={handleSortChange}
          defaultValue=""
        >
          <option value="" hidden>
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}