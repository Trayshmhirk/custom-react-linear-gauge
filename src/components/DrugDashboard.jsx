import { useState } from "react";
import LinearGauge from "./LinearGuage";
import RangeInputFields from "./RangeInputFields";

const DrugDashboard = () => {
   const [drugs, setDrugs] = useState([
      {
         name: "Drug A",
         ranges: [
            { start: 0, end: 300, category: "good" },
            { start: 300, end: 570, category: "mid" },
            { start: 570, end: 1000, category: "bad" },
         ],
         pointers: [
            {
               value: 300,
               color: "#948c92",
               rangeType: "Neutral",
               rangeTypeColor: "orange",
            },
            {
               value: 500,
               color: "#3b61bb",
               rangeType: "Healthy",
               rangeTypeColor: "#4cdfbb",
            },
            {
               value: 750,
               color: "",
               rangeType: "UNHEALTHY",
               rangeTypeColor: "red",
            },
         ],
      },
   ]);

   const handleRangeChange = (drugIndex, rangeIndex, prop, value) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].ranges[rangeIndex][prop] = parseInt(value);
      setDrugs(updatedDrugs);
   };

   const handleCategoryChange = (drugIndex, rangeIndex, value) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].ranges[rangeIndex].category = value;
      setDrugs(updatedDrugs);
   };

   const handlePointerChange = (drugIndex, value) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].pointerValue = parseInt(value);
      setDrugs(updatedDrugs);
   };

   const addRange = (drugIndex) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].ranges.push({
         start: 0,
         end: 0,
         category: "good",
      });
      setDrugs(updatedDrugs);
   };

   const removeRange = (drugIndex, rangeIndex) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].ranges.splice(rangeIndex, 1);
      setDrugs(updatedDrugs);
   };

   const addDrug = () => {
      setDrugs([
         ...drugs,
         {
            name: `Drug ${drugs.length + 1}`,
            ranges: [{ start: 0, end: 0, category: "good" }],
            pointers: [
               {
                  value: 0,
                  color: "",
                  rangeType: "",
                  rangeTypeColor: "",
               },
            ],
         },
      ]);
   };

   return (
      <div className="drug-dashboard">
         <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <button
               style={{ padding: "8px", width: "100px" }}
               onClick={addDrug}
            >
               Add Drug
            </button>
            <RangeInputFields
               drugs={drugs}
               handleRangeChange={handleRangeChange}
               handleCategoryChange={handleCategoryChange}
               addRange={addRange}
               removeRange={removeRange}
            />
         </div>
         <div>
            {drugs.map((drug, index) => (
               <LinearGauge
                  key={index}
                  name={drug.name}
                  ranges={drug.ranges}
                  pointers={drug.pointers}
                  handlePointerChange={(value) =>
                     handlePointerChange(index, value)
                  }
               />
            ))}
         </div>
      </div>
   );
};

export default DrugDashboard;
