import "./App.css";
import { useState,useEffect } from "react";
import DashboardComponent from "./components/DashboardComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import CardComponent from "./components/CardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SideBarComponent from "./components/SideBarComponent";
import TopNavBarComponent from "./components/TopNavBarComponent";

import { learningMaterials } from "./data/learningMaterials";
import { dashboard } from "./data/dashboard";


function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = projects.filter((project) =>
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [searchTerm, projects]);

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <main>
      <div className="flex gap-4 overflow-y-hidden">
        <SideBarComponent/>
        {/* middle-Container */}
        <div className="flex flex-col gap-4 w-full my-4 pl-6">
          <TopNavBarComponent 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearchSubmit={handleSearchSubmit}
          />
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-col w-full">
              <DashboardComponent dashboard={dashboard} items={projects}/>
              <div className="flex flex-row justify-between py-6 flex-wrap">
                <AssignmentsComponent />
                <AddNewProjectComponent setProjects={setProjects}/>
              </div>
              <div className="">
                <CardComponent projects={filteredProjects}/>
              </div>
            </div>
            <div className="mx-10">
              <LearningMaterialsComponent learningMaterials={learningMaterials}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
