import React, { useState } from "react";  
import { Star } from "lucide-react";  
import FilterComponent from "./FilterComponent";  
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {  
  const [materials, setMaterials] = useState([...learningMaterials]);
  const [sortOrder, setSortOrder] = useState("");  

  const toggleFavorite = (id) => { 
    setMaterials(() =>  
      materials.map((material) =>  
        material.id === id ? { ...material, isFavorite : !material.isFavorite } : material  
      )  
    );
  };  

  const sortedMaterials = [...materials].sort((a, b) => {
    if (sortOrder === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "Z-A") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  return (  
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] w-[350px] hide-scrollbar">  
      <div className="sticky top-0 bg-white z-10 overflow-hidden">
        <FilterComponent onSortChange={handleSortChange} />  
        <div className="p-4 flex justify-between items-center">  
          <h2 className="text-xl font-semibold">Learning Materials</h2>  
          <img src="/more.svg" alt="More options" width={30} height={30} />  
        </div>  
      </div>

      <div className="space-y-3 px-4 pb-4">  
        {sortedMaterials.map((material) => (  
          <div key={material.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center rounded-lg">  
            <img 
              src={material.image} 
              alt={material.title} 
              width={50} 
              height={50} 
              className="rounded-xl object-cover" 
            />  

            <div className="flex-1">  
              <div className="flex justify-between items-center">  
                <p className="text-base font-medium">{material.title}</p>  
                <button 
                  onClick={() => toggleFavorite(material.id)} 
                  aria-label={`Toggle favorite for ${material.title}`}
                >  
                  <Star 
                    size={20} 
                    fill={material.isFavorite ? "orange" : "none"} 
                    color={material.isFavorite ? "orange" : "black"} 
                  />  
                </button>  
              </div>  
              <p className="text-gray-400 text-sm">
              Posted at: {new Date(material.postedAt).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}  
              </p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}