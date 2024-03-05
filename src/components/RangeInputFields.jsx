// import React from "react";

const RangeInputFields = ({
   drugs,
   handleRangeChange,
   handleCategoryChange,
   handlePointerChange,
   addRange,
   removeRange,
   addPointer,
   removePointer,
}) => {
   return (
      <div className="">
         {drugs.map((drug, drugIndex) => (
            <div key={drugIndex} className="flex flex-col gap-5 items-start">
               {drug.ranges.map((range, rangeIndex) => (
                  <div key={rangeIndex} className="flex gap-3 items-center">
                     <label>
                        Range {rangeIndex + 1} for {drug.name}:
                     </label>
                     <input
                        type="number"
                        className="input-field"
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
                        className="input-field"
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
                        className="select appearance-none w-28 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={range.category}
                        onChange={(e) =>
                           handleCategoryChange(
                              drugIndex,
                              rangeIndex,
                              e.target.value
                           )
                        }
                     >
                        <option value="good" className="text-green-500">
                           Good
                        </option>
                        <option value="mid" className="text-yellow-500">
                           Mid
                        </option>
                        <option value="bad" className="text-red-500">
                           Bad
                        </option>
                     </select>
                     <button
                        className="remove-btn"
                        onClick={() => removeRange(drugIndex, rangeIndex)}
                     >
                        Remove
                     </button>
                  </div>
               ))}
               <button onClick={() => addRange(drugIndex)} className="add-btn">
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
                     <label>Pointer Color for {drug.name}:</label>
                     <input
                        type="text"
                        value={pointer.color}
                        onChange={(e) =>
                           handlePointerChange(
                              drugIndex,
                              pointerIndex,
                              e.target.value,
                              "color"
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
                        <option value="">Select</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Unhealthy">Unhealthy</option>
                     </select>
                     <button
                        onClick={() => removePointer(drugIndex, pointerIndex)}
                     >
                        Remove
                     </button>
                  </div>
               ))}

               <button
                  onClick={() => addPointer(drugIndex)}
                  className="add-btn"
               >
                  Add Pointer for {drug.name}
               </button>
            </div>
         ))}
      </div>
   );
};

export default RangeInputFields;
//
