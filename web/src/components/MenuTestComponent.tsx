import {
  BUTTON_COLORS,
  DROP_BALL_SIZING_BUTTON,
  EXCEPTSLOT,
} from "./patternConfig";

const mockComponent = ({
  isRandomSlot,
  setIsRandomSlot,
  isDropping,
  isRandomVarian,
  setIsRandomVarian,
  selectedSlot,
  setBalls,
  setSelectedSlot,
  selectedPattern,
  setSelectedPattern,
  setResults,
  setStats,
  isRunning,
  balls,
  startTest,
  currentDrop,
  TOTAL_DROPS,
  dropMultipleBalls,
}) => {
  return (
    <>
      <div className="flex gap-4">
        <div className="text-white">
          ช่องที่เป็นพื้น :{" "}
          {EXCEPTSLOT?.map((item) => (
            <span className="text-red-500" key={item}>
              {item},
            </span>
          ))}
        </div>

        <div className="text-white">เลือก Mode ปล่อยบอล</div>
        <select
          value={isRandomSlot ? "randomSlot" : "fixSlot"}
          onChange={(e) => {
            setIsRandomSlot(e.target.value === "randomSlot");
          }}
          className="rounded bg-gray-700 px-3 py-1 text-white"
          disabled={isDropping}
        >
          <option value="randomSlot">Random Slot</option>
          <option value="fixSlot">Fix Slot</option>
        </select>
      </div>

      {isRandomSlot && (
        <span className="font-semibold text-red-700">
          ถ้าหากเลือก Random Slot จะสุ่มช่องที่ลงและการเด้งของบอลจะเป็นการสุ่ม
        </span>
      )}

      {!isRandomSlot && (
        <>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 p-4">
              <div className="text-white">เลือก Variant การ ปล่อยบอล</div>
              <select
                value={isRandomVarian ? "random" : "fix"}
                onChange={(e) => {
                  setIsRandomVarian(e.target.value === "random");
                }}
                className="rounded bg-gray-700 px-3 py-1 text-white"
                disabled={isDropping}
              >
                <option value="random">Random variant </option>
                <option value="fix">Fix variant</option>
              </select>
            </div>
          </div>

          {isRandomVarian ? (
            <span className="font-semibold text-red-700">
              ถ้าหากเลือก Random Variant การเด้งของลูกบอลเมื่อชน pin
              จะสุ่มและมีโอกาสไม่ลง Slot ที่เลือก
            </span>
          ) : (
            <span className="font-semibold text-red-700">
              ถ้าหากเลือก Fix Variant การเด้งของลูกบอลจะเป็น pattern
              เดิมและลงช่องที่เลือกเสมอ
            </span>
          )}

          <div className="mb-4 flex items-center gap-4">
            <div className="text-white">เลือกช่องที่ต้องการ:</div>
            <select
              value={selectedSlot}
              onChange={(e) => {
                setBalls([]);
                setSelectedSlot(Number(e.target.value));
              }}
              className="rounded bg-gray-700 px-3 py-1 text-white"
              disabled={isDropping}
            >
              {Array.from({ length: 21 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  ช่อง {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <div className="text-white">เลือก Pattern ที่ต้องการ</div>
            <select
              value={selectedPattern}
              onChange={(e) => {
                e.preventDefault();
                setSelectedPattern(Number(e.target.value));
                setBalls([]);
                setResults({});
                setStats(null);
              }}
              className="rounded bg-gray-700 px-3 py-1 text-white"
              disabled={isRunning}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i}>
                  Pattern {i + 1}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <button>
        Ball :{" "}
        {balls && balls?.length > 0 && <span>{balls[0]?.bounceCount}</span>}
      </button>
      <>
        <button
          onClick={startTest}
          disabled={isRunning}
          className={`rounded px-6 py-2 ${
            isRunning ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isRunning ? "Testing..." : "Start Test"}
        </button>

        {isRunning && (
          <div className="mb-4">
            Testing Progress: {currentDrop}/{TOTAL_DROPS} drops
          </div>
        )}
      </>
      <div className="mb-4 flex gap-2">
        {DROP_BALL_SIZING_BUTTON?.map((item) => {
          return (
            <button
              key={"buttonSize" + item}
              onClick={() => dropMultipleBalls(item)}
              disabled={isDropping}
              className={`rounded px-4 py-2 text-white ${
                isDropping
                  ? "cursor-not-allowed bg-gray-500"
                  : BUTTON_COLORS[item]
              }`}
            >
              ปล่อย {item} ลูก
            </button>
          );
        })}
      </div>
    </>
  );
};

export default mockComponent;
