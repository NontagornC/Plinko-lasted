/* eslint-disable @typescript-eslint/no-unused-vars */
// import { fetchNui } from "@/utils/fetchNui";
// import { useNuiEvent } from "@/hooks/useNuiEvent";
import React, { useEffect, useState } from "react";
import { debugData } from "@/utils/debugData";
import Plinko from "./components/View";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

// interface ReturnData {
//   x: number;
//   y: number;
//   z: number;
// }

const App: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState(21);
  const [selectedPattern, setSelectedPattern] = useState(0);
  const [currentConfig, setCurrentConfig] = useState({
    slot: selectedSlot,
    pattern: selectedPattern,
  });

  const [isRandomVarian, setIsRandomVarian] = useState(false);
  const [isRandomSlot, setIsRandomSlot] = useState(true);
  const [numberOfBalls, setNumberOfBalls] = useState(0);

  useEffect(() => {
    setCurrentConfig({
      slot: selectedSlot,
      pattern: selectedPattern,
    });
  }, [selectedSlot, selectedPattern]);

  return (
    <div className="">
      <Plinko
        selectedPattern={selectedPattern}
        selectedSlot={selectedSlot}
        currentConfig={currentConfig}
        isRandomVarian={isRandomVarian}
        isRandomSlot={isRandomSlot}
        numberOfBalls={numberOfBalls}
        setNumberOfBalls={setNumberOfBalls}
        // สำหรับ test เปิด chart ผลลัพธ์
        // setSelectedSlot={setSelectedSlot}
        // setSelectedPattern={setSelectedPattern}
        // setIsRandomVarian={setIsRandomVarian}
        // setIsRandomSlot={setIsRandomSlot}
      />
    </div>
  );
};

export default App;
