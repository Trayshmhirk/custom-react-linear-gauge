// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const LinearGauge = ({ ranges, pointers }) => {
   const [activePointerIndex, setActivePointerIndex] = useState(null);

   const handleDisplayTooltip = (index) => {
      setActivePointerIndex(index === activePointerIndex ? null : index);
   };

   // Function to render ranges
   const renderRanges = () => {
      const totalRange = ranges[ranges.length - 1].end - ranges[0].start;
      return ranges.map((range, index) => (
         <div
            key={index}
            className="range"
            style={{
               width: `${((range.end - range.start) / totalRange) * 100}%`,
               left: `${((range.start - ranges[0].start) / totalRange) * 100}%`,
               backgroundColor: getCategoryColor(range.category),
            }}
         ></div>
      ));
   };

   // Function to get color based on category
   const getCategoryColor = (category) => {
      switch (category) {
         case "good":
            return "green";
         case "mid":
            return "orange";
         case "bad":
            return "red";
         default:
            return "gray";
      }
   };

   return (
      <div className="linear-gauge-container">
         {/* Linear Gauge */}
         <div className="linear-gauge">
            {/* Ranges */}
            <div className="range-container">{renderRanges()}</div>

            {/* Pointers */}
            {pointers.map((pointer, index) => {
               // Calculate pointer position relative to total range
               const pointerPosition =
                  ((pointer.value - ranges[0].start) /
                     (ranges[ranges.length - 1].end - ranges[0].start)) *
                  100;
               // Ensure pointer position is within the gauge
               const adjustedPointerPosition = Math.max(
                  0,
                  Math.min(pointerPosition, 100)
               );
               return (
                  <div
                     key={index}
                     className="pointer"
                     style={{
                        left: `${adjustedPointerPosition}%`,
                        borderBottomColor: `${pointer.color}`,
                     }}
                     data-value={pointer.value}
                     onClick={() => handleDisplayTooltip(index)}
                  >
                     {activePointerIndex === index && (
                        <div className="tooltip">
                           <div className="pointer-triangle"></div>
                           <div>
                              <b>{pointer.value}</b> g/ml
                           </div>
                           <div
                              className="range-type"
                              style={{
                                 background: `${pointer.rangeTypeColor}`,
                              }}
                           >
                              {pointer.rangeType}
                           </div>
                           <div className="range-category">
                              NORMAL RANGE
                              <b className="range-value">
                                 {
                                    ranges.find(
                                       (range) => range.category === "good"
                                    ).start
                                 }{" "}
                                 -{" "}
                                 {
                                    ranges.find(
                                       (range) => range.category === "good"
                                    ).end
                                 }
                              </b>
                           </div>
                        </div>
                     )}
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default LinearGauge;
