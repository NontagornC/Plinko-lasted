/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import {
  BALL_SIZE,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  groupSlot,
  PIN_SIZE,
  TOTAL_SLOTS,
} from "./patternConfig";
import styled from "styled-components";
import Bar from "@/assets/bar.png";
import RewardBoxUI from "./Reward";
import ViewModel from "./ViewModel";
import { fetchNui } from "@/utils/fetchNui";
import { IReturnValidateMoneyProps } from "./type";
import RewardModal from "./RewardModal";
// For testing
// import TestSummary from "./Chart/View";
// import TestComponent from "./MenuTestComponent";

const PlinkoGame = ({
  selectedSlot,
  selectedPattern,
  currentConfig,
  isRandomVarian,
  isRandomSlot,
  numberOfBalls,
  setNumberOfBalls,

  // สำหรับ test เปิด chart ผลลัพธ์
  // setSelectedSlot,
  // setSelectedPattern,
  // setIsRandomVarian,
  // setIsRandomSlot,
}: {
  selectedSlot: number;
  selectedPattern: number;
  currentConfig: { slot: number; pattern: number };
  isRandomVarian: boolean;
  isRandomSlot: boolean;
  numberOfBalls: number;
  setNumberOfBalls: (number: number) => void;
  // สำหรับ test เปิด chart ผลลัพธ์
  // setSelectedSlot: (slot: number) => void;
  // setSelectedPattern: (pattern: number) => void;
  // setIsRandomVarian: (isRandom: boolean) => void;
  // setIsRandomSlot: (isRandom: boolean) => void;
}) => {
  const selectedSlotRef = useRef(selectedSlot);
  const selectedPatternRef = useRef(selectedPattern);
  const configRef = useRef(currentConfig);

  useEffect(() => {
    configRef.current = currentConfig;
  }, [currentConfig]);

  useEffect(() => {
    selectedSlotRef.current = selectedSlot;
  }, [selectedSlot]);

  useEffect(() => {
    selectedPatternRef.current = selectedPattern;
  }, [selectedPattern]);

  const {
    dropMultipleBalls,
    getPinPositions,
    balls,
    landedSlots,
    isOpenRewardModal,
    handleOpenRewardModal,
    handleCloseOpenRewardModal,
    // isDropping,
    // stats,
    // isRunning,
    // setBalls,
    // setResults,
    // setStats,
    // startTest,
    // currentDrop,
    // TOTAL_DROPS,
  } = ViewModel(
    selectedSlot,
    selectedPattern,
    isRandomVarian,
    isRandomSlot,
    configRef,
    numberOfBalls,
    setNumberOfBalls,
  );

  // Five M function
  const onClickDropball = async (ball: number) => {
    const response = (await fetchNui("validateMoneyForPlayingGame", {
      dropballNumber: ball,
    }).catch((e) => {
      console.error("validateMoneyForPlayingGame", e);
      return { numberOfDroppballs: 0 };
    })) as IReturnValidateMoneyProps;
    if (response?.numberOfDroppballs) {
      dropMultipleBalls(response.numberOfDroppballs);
      setNumberOfBalls(response.numberOfDroppballs);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <RewardModal
        isOpenModal={isOpenRewardModal}
        onClose={handleCloseOpenRewardModal}
      />

      {/* <TestComponent
        isRandomSlot={isRandomSlot}
        setIsRandomSlot={setIsRandomSlot}
        isDropping={isDropping}
        isRandomVarian={isRandomVarian}
        setIsRandomVarian={setIsRandomVarian}
        selectedSlot={selectedSlot}
        setBalls={setBalls}
        setSelectedSlot={setSelectedSlot}
        selectedPattern={selectedPattern}
        setSelectedPattern={setSelectedPattern}
        setResults={setResults}
        setStats={setStats}
        isRunning={isRunning}
        balls={balls}
        startTest={startTest}
        currentDrop={currentDrop}
        TOTAL_DROPS={TOTAL_DROPS}
        dropMultipleBalls={dropMultipleBalls}
      /> */}

      <div className="Box relative flex h-full min-w-[960px] justify-center">
        <div className="DropballBox absolute -right-[320px] top-1/2 z-50 flex min-h-[200px] min-w-[170px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center pt-[68px]">
          <div className="relative flex h-full w-full flex-col items-center gap-[2px]">
            <button
              onClick={() => {
                onClickDropball(1);
                // dropMultipleBalls(1);
                // setNumberOfBalls(1);
              }}
              disabled={
                numberOfBalls !== 0 && landedSlots?.length < numberOfBalls
              }
              className="DropballButton flex h-[35px] w-[100px] items-center justify-center text-[16px] text-white disabled:text-gray-600"
            >
              1 ครั้ง
            </button>
            <button
              onClick={() => {
                onClickDropball(5);
                // dropMultipleBalls(5);
                // setNumberOfBalls(5);
              }}
              disabled={
                numberOfBalls !== 0 && landedSlots?.length < numberOfBalls
              }
              className="DropballButton flex h-[35px] w-[100px] items-center justify-center text-[16px] text-white disabled:text-gray-600"
            >
              5 ครั้ง
            </button>
            <button
              onClick={() => {
                onClickDropball(10);
                // dropMultipleBalls(10);
                // setNumberOfBalls(10);
              }}
              disabled={
                numberOfBalls !== 0 && landedSlots?.length < numberOfBalls
              }
              className="DropballButton flex h-[35px] w-[100px] items-center justify-center text-[16px] text-white disabled:text-gray-600"
            >
              10 ครั้ง
            </button>

            <span className="absolute -top-[62px] left-1/2 -translate-x-1/2 transform truncate text-[14px] leading-6 text-white">
              จำนวนเหรียญที่คุณมี : 999
            </span>
          </div>
        </div>

        <SvgBox width={BOARD_WIDTH} height={BOARD_HEIGHT}>
          {/* Enhanced pins */}
          {getPinPositions().map((pin, index) => (
            <g key={`pin-${index}`} className="z-10">
              <circle
                cx={pin.x}
                cy={pin.y}
                r={PIN_SIZE}
                fill="#FFAC00"
                opacity="0.8"
              />
              <circle cx={pin.x} cy={pin.y} r={PIN_SIZE - 2} fill="#FFAC00" />
            </g>
          ))}

          {Object.entries(groupSlot).map(([group, slots]) => {
            const marginX = 80;
            const availableWidth = BOARD_WIDTH - marginX * 2;
            const slotWidth = availableWidth / TOTAL_SLOTS;

            const startX = marginX + (slots[0] - 1) * slotWidth;
            const groupWidth = slotWidth * slots.length;

            return (
              <>
                <g key={`group-${group}`}>
                  <rect
                    x={startX}
                    y={BOARD_HEIGHT - 20}
                    width={groupWidth}
                    height={10}
                    fill="none"
                    stroke={"#FFFF"}
                    strokeWidth="0.5"
                    opacity={0.3}
                  />
                  <image
                    x={startX}
                    y={BOARD_HEIGHT - 20}
                    width={groupWidth}
                    height={10}
                    href={Bar}
                    opacity={1}
                    preserveAspectRatio="none"
                  />
                </g>
              </>
            );
          })}

          {/* ลูกบอล */}
          {balls.map((ball, index) => (
            <circle
              key={`ball-${index}`}
              cx={ball.x}
              cy={ball.y}
              r={BALL_SIZE}
              fill="#665858"
              stroke={"#FFFF"}
              strokeWidth="1"
              opacity={0.9}
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))",
              }}
            />
          ))}
        </SvgBox>

        {/* Group item */}
        <RewardBoxUI handleOpenRewardModal={handleOpenRewardModal} />
      </div>
      {/* Test Summary Box */}
      {/* {!isRunning && landedSlots?.length > 0 && (
        <TestSummary landedSlots={landedSlots} />
      )} */}
    </div>
  );
};

const SvgBox = styled.svg`
  scale: 0.82;
`;

export default PlinkoGame;
