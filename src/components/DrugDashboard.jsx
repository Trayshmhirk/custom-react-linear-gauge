// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import LinearGauge from "./LinearGuage";
import RangeInputFields from "./RangeInputFields";

const DrugDashboard = () => {
   const [drugs, setDrugs] = useState([
      {
         name: "Drug 1",
         ranges: [
            { start: 0, end: 300, category: "good" },
            { start: 300, end: 570, category: "mid" },
            { start: 570, end: 1000, category: "bad" },
         ],
         pointers: [],
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

   const handlePointerChange = (drugIndex, pointerIndex, value, prop) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].pointers[pointerIndex][prop] =
         prop === "value" ? parseInt(value) : value;
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

   const addPointer = (drugIndex) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].pointers.push({
         value: 0,
         color: "",
         rangeType: "",
      });
      setDrugs(updatedDrugs);
   };

   const removePointer = (drugIndex, pointerIndex) => {
      const updatedDrugs = [...drugs];
      updatedDrugs[drugIndex].pointers.splice(pointerIndex, 1);
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
               },
            ],
         },
      ]);
   };

   return (
      <div className="flex flex-col gap-10">
         <div className="flex flex-col gap-10">
            <button onClick={addDrug} className="btn">
               Add Drug
            </button>
            <RangeInputFields
               drugs={drugs}
               handleRangeChange={handleRangeChange}
               handleCategoryChange={handleCategoryChange}
               handlePointerChange={handlePointerChange}
               addRange={addRange}
               removeRange={removeRange}
               addPointer={addPointer}
               removePointer={removePointer}
            />
         </div>
         <div>
            {drugs.map((drug, index) => (
               <LinearGauge
                  key={index}
                  name={drug.name}
                  ranges={drug.ranges}
                  pointers={drug.pointers}
               />
            ))}
         </div>
      </div>
   );
};

export default DrugDashboard;
