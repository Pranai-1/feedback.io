// "use client";

// import React, { useEffect, useState } from "react";

// const FrameRenderLogger: React.FC = () => {
//   const [frameTime, setFrameTime] = useState<number | null>(null); // To store time of frame render
//   const [prevTime, setPrevTime] = useState<number | null>(null); // To store previous frame time for comparison

//   useEffect(() => {
//     // This will track time between frames
//     let animationFrameId: number;

//     const logFrameTime = (time: number) => {
//       // First frame render: log the time of the first frame
//       if (prevTime === null) {
//         console.log("First frame rendered at:", time);
//       } else {
//         console.log("Subsequent frame rendered at:", time);
//       }

//       // Store the time for subsequent frames
//       setPrevTime(time);
//       setFrameTime(time); // Update the frameTime state with the current frame time

//       // Schedule the next frame render
//       animationFrameId = requestAnimationFrame(logFrameTime);
//     };

//     // Start the animation frame loop
//     animationFrameId = requestAnimationFrame(logFrameTime);

//     // Clean up to cancel the animation frame when the component unmounts
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div>
//       <h1>React Frame Render Logger</h1>
//       <p>First Frame Time: {frameTime}</p>
//       <p>Subsequent Frame Time: {prevTime}</p>
//     </div>
//   );
// };

// export default FrameRenderLogger;
export default function FrameTime(){
    return(
        <>
        <p>Helloo</p>
        </>
    )
}