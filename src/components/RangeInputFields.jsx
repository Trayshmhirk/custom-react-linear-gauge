// import React from "react";

const RangeInputFields = ({
   drugs,
   handleRangeChange,
   handleCategoryChange,
   handlePointerChange,
   addRange,
   removeRange,
}) => {
   return (
      <div className="range-inputs">
         {drugs.map((drug, drugIndex) => (
            <div key={drugIndex}>
               {drug.ranges.map((range, rangeIndex) => (
                  <div key={rangeIndex} className="range-input">
                     <label>
                        Range {rangeIndex + 1} for {drug.name}:
                     </label>
                     <input
                        type="number"
                        value={range.start}
                        onChange={(e) =>
                           handleRangeChange(
                              drugIndex,
                              rangeIndex,
                              "start",
                              e.target.value
                           )
                        }
                     />
                     <span>-</span>
                     <input
                        type="number"
                        value={range.end}
                        onChange={(e) =>
                           handleRangeChange(
                              drugIndex,
                              rangeIndex,
                              "end",
                              e.target.value
                           )
                        }
                     />
                     <select
                        value={range.category}
                        onChange={(e) =>
                           handleCategoryChange(
                              drugIndex,
                              rangeIndex,
                              e.target.value
                           )
                        }
                     >
                        <option value="good">Good</option>
                        <option value="mid">Mid</option>
                        <option value="bad">Bad</option>
                     </select>
                     <button onClick={() => removeRange(drugIndex, rangeIndex)}>
                        Remove
                     </button>
                  </div>
               ))}
               <button onClick={() => addRange(drugIndex)}>
                  Add Range for {drug.name}
               </button>

               {/* Inputs for Pointers */}
               {drug.pointers.map((pointer, pointerIndex) => (
                  <div key={pointerIndex} className="pointer-input">
                     <label>Pointer Value for {drug.name}:</label>
                     <input
                        type="number"
                        value={pointer.value}
                        onChange={(e) =>
                           handlePointerChange(
                              drugIndex,
                              pointerIndex,
                              e.target.value,
                              "value"
                           )
                        }
                     />
                     <label>Range Type for {drug.name}:</label>
                     <select
                        value={pointer.rangeType}
                        onChange={(e) =>
                           handlePointerChange(
                              drugIndex,
                              pointerIndex,
                              e.target.value,
                              "rangeType"
                           )
                        }
                     >
                        <option value="Neutral">Neutral</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Unhealthy">Unhealthy</option>
                     </select>
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
};

export default RangeInputFields;
