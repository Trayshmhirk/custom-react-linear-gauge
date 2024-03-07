// import React from "react";

const RangeInputFields = ({
   drug,
   drugIndex,
   handleRangeChange,
   handleCategoryChange,
   handlePointerChange,
   addRange,
   removeRange,
   addPointer,
   removePointer,
}) => {
   return (
      <>
         <div className="flex flex-col gap-3 items-start">
            <div className="flex flex-col gap-2 items-start">
               {drug.ranges.map((range, rangeIndex) => (
                  <div key={rangeIndex} className="flex gap-2 items-center">
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
                     <div className="relative">
                        <select
                           className="appearance-none w-[100px] h-[40px] bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                           <svg
                              className="h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>
                     </div>

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
            </div>

            {/* Inputs for Pointers */}
            <div className="flex flex-col gap-2 items-start">
               {drug.pointers.map((pointer, pointerIndex) => (
                  <div key={pointerIndex} className="flex gap-2 items-center">
                     <label>Pointer Value:</label>
                     <input
                        type="number"
                        className="input-field"
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
                     <label>Color:</label>
                     <input
                        type="text"
                        className="color-input-field"
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
                     <label>Type:</label>
                     <div className="relative">
                        <select
                           className="appearance-none w-[120px] h-[40px] bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                           <svg
                              className="h-4 w-4 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>
                     </div>
                     <button
                        className="remove-btn"
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
         </div>
      </>
   );
};

export default RangeInputFields;
//
