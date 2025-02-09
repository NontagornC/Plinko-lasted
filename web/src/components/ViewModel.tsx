/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import {
  BALL_SIZE,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  BOUNCE_ELASTICITY,
  COLS,
  EXCEPTSLOT,
  FRICTION,
  GRAVITY,
  groupSlot,
  MIN_SPEED,
  patternsConfig,
  PIN_SIZE,
  ROWS,
  TIME_SCALE,
  TOTAL_SLOTS,
} from "./patternConfig";
import { fetchNui } from "@/utils/fetchNui";
import { IGroupRewards, ILandedSlotProps } from "./type";

const ViewModel = (
  selectedSlot,
  selectedPattern,
  isRandomVarian,
  isRandomSlot,
  configRef,
  numberOfBalls,
  setNumberOfBalls,
) => {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState([]);
  const [lastSlot, setLastSlot] = useState("");
  const [isDropping, setIsDropping] = useState(false);

  const [isRunning, setIsRunning] = useState(false);
  const [currentDrop, setCurrentDrop] = useState(0);
  const [results, setResults] = useState<object>({});
  const [stats, setStats] = useState(null);
  const [landedSlots, setLandedSlots] = useState<ILandedSlotProps[]>([]);
  const TOTAL_DROPS = 1000;
  const DROP_INTERVAL = 50;
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | undefined>(undefined);

  const startTest = () => {
    setLandedSlots([]);
    setIsRunning(true);
    setCurrentDrop(0);
    setResults({});
    setBalls([]);
  };

  // const selectGroup = () => {
  //   const random = Math.random();
  //   let cumulativeProbability = 0;

  //   for (const [group, probability] of Object.entries(groupProbabilities)) {
  //     cumulativeProbability += probability;
  //     if (random < cumulativeProbability) {
  //       return group;
  //     }
  //   }
  // };

  //! เอา group random จาก server
  const getRandomGroup = async () => {
    const response = await fetchNui<{ group: string }>("getRandomGroup", {});
    return response.group;
  };

  const dropMultipleBalls = (count) => {
    let droppedCount = 0;

    const dropWithDelay = () => {
      if (droppedCount < count) {
        dropBall();
        droppedCount++;
        setTimeout(dropWithDelay, 100);
      } else {
        setIsDropping(false);
      }
    };

    dropWithDelay();
  };

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const selectGroup = async () => {
    return await getRandomGroup();
  };

  const getPinPositions = () => {
    const pins = [];
    const marginX = 80;
    const marginY = 60;
    const availableWidth = BOARD_WIDTH - marginX * 2;
    const pinSpacingX = availableWidth / (COLS - 1);
    const pinSpacingY = (BOARD_HEIGHT - marginY * 2 - 100) / (ROWS - 1);

    for (let row = 0; row < ROWS; row++) {
      const offsetX = (row % 2) * (pinSpacingX / 2);
      for (let col = 0; col < (row % 2 === 0 ? COLS : COLS - 1); col++) {
        pins.push({
          x: marginX + offsetX + col * pinSpacingX,
          y: marginY + row * pinSpacingY,
          row: row,
        });
      }
    }
    return pins;
  };

  const getScoreSlots = () => {
    const slots = [];
    const marginX = 80;
    const availableWidth = BOARD_WIDTH - marginX * 2;
    const slotWidth = availableWidth / TOTAL_SLOTS;

    for (let i = 0; i < TOTAL_SLOTS; i++) {
      slots.push({
        x: marginX + i * slotWidth + slotWidth / 2,
        points: calculateSlotPoints(i),
        label: `${i + 1}`,
      });
    }
    return slots;
  };

  const calculateSlotPoints = (index) => {
    const middle = TOTAL_SLOTS / 2;
    const distance = Math.abs(index + 0.5 - middle);
    return Math.round(100 - distance * 10);
  };

  const checkPinCollision = (ball, pin) => {
    const dx = ball.x - pin.x;
    const dy = ball.y - pin.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = BALL_SIZE + PIN_SIZE;

    if (distance < minDistance) {
      const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
      if (speed < MIN_SPEED) return;

      const pattern = ball.pattern;

      // ใช้ collision response ของ Matter.js
      const bounceDirection =
        pattern.bounces[ball.bounceCount % (pattern?.bounces?.length || 1)];
      const bounceForce = 1.4;
      const force = bounceDirection * bounceForce * BOUNCE_ELASTICITY;

      // คำนวณ normal vector
      const nx = dx / distance;
      const ny = dy / distance;

      // แยก velocity เป็น normal และ tangential components
      const dotProduct = ball.vx * nx + ball.vy * ny;
      const normalVx = nx * dotProduct;
      const normalVy = ny * dotProduct;
      const tangentVx = ball.vx - normalVx;
      const tangentVy = ball.vy - normalVy;

      // สะท้อนเฉพาะ normal component
      ball.vx = force - normalVx + tangentVx * FRICTION;
      ball.vy = -normalVy + tangentVy * FRICTION;

      // ย้ายลูกบอลออกนอกพื้นที่ชน
      ball.x = pin.x + nx * (minDistance + 1);
      ball.y = pin.y + ny * (minDistance + 1);

      ball.bounceCount++;
    }
  };

  const updateBallPositions = (deltaTime: number) => {
    const pins = getPinPositions();
    const slots = getScoreSlots();
    const marginX = 80;
    const MAX_SPEED = 8;

    setBalls((prevBalls) => {
      return prevBalls
        .map((ball) => {
          // Apply physics
          ball.vy += GRAVITY * deltaTime;
          ball.vx *= FRICTION;

          // Limit maximum speed
          const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
          if (speed > MAX_SPEED) {
            const ratio = MAX_SPEED / speed;
            ball.vx *= ratio;
            ball.vy *= ratio;
          }

          // Update position
          ball.x += ball.vx * deltaTime;
          ball.y += ball.vy * deltaTime;

          if (ball.y >= BOARD_HEIGHT - 50) {
            const slotWidth = (BOARD_WIDTH - marginX * 2) / TOTAL_SLOTS;
            const currentSlot = Math.floor((ball.x - marginX) / slotWidth) + 1;

            // check พื้น
            if (EXCEPTSLOT?.includes(currentSlot)) {
              const pattern = ball.pattern;
              if (ball.groundBounceCount === undefined) {
                ball.groundBounceCount = 0;
              }
              const bounceDirection =
                pattern.groundBounces[
                  ball.groundBounceCount % (pattern?.groundBounces?.length || 1)
                ];

              const horizontalForce = 3;
              const verticalForce = 0.8;

              ball.vx = bounceDirection * horizontalForce * BOUNCE_ELASTICITY;
              ball.vy = -Math.abs(ball.vy) * BOUNCE_ELASTICITY * verticalForce;
              ball.y = BOARD_HEIGHT - 50;

              ball.x += bounceDirection * 2;
              ball.groundBounceCount++;

              return ball;
            }
          }

          if (ball.x < marginX + BALL_SIZE) {
            ball.x = marginX + BALL_SIZE;
            ball.vx = Math.abs(ball.vx) * BOUNCE_ELASTICITY * 0.9;
          }
          if (ball.x > BOARD_WIDTH - marginX - BALL_SIZE) {
            ball.x = BOARD_WIDTH - marginX - BALL_SIZE;
            ball.vx = -Math.abs(ball.vx) * BOUNCE_ELASTICITY * 0.9;
          }

          pins.forEach((pin) => {
            checkPinCollision(ball, pin);
          });

          return ball;
        })
        .filter((ball) => {
          if (ball.y <= BOARD_HEIGHT - 50) {
            return true;
          }
          if (ball.recorded) {
            return false;
          }
          const slot = slots.reduce((closest, slot) => {
            const currentDistance = Math.abs(ball.x - slot.x);
            const closestDistance = Math.abs(ball.x - closest.x);
            return currentDistance < closestDistance ? slot : closest;
          });

          const slotNumber = parseInt(slot.label);
          if (EXCEPTSLOT?.includes(slotNumber)) {
            return true;
          }

          ball.recorded = true;
          setScore((prev) => prev + slot.points);
          setLastSlot(`ช่อง ${slot.label} (${slot.points} คะแนน)`);

          if (isRunning) {
            setResults((prev) => {
              const newResults = { ...prev };
              newResults[slotNumber] = (newResults[slotNumber] || 0) + 1;
              return newResults;
            });
          }

          setLandedSlots((prev) => [
            ...prev,
            {
              slotNumber: slotNumber,
              points: slot.points,
              timestamp: new Date().toISOString(),
              selectedSlot,
              selectedPattern,
            },
          ]);

          return false;
        });
    });
  };

  // useEffect(() => {
  //   const animate = (time) => {
  //     if (previousTimeRef.current !== undefined) {
  //       updateBallPositions(0.67);
  //     }
  //     previousTimeRef.current = time;
  //     requestRef.current = requestAnimationFrame(animate);
  //   };

  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => {
  //     if (requestRef.current) {
  //       cancelAnimationFrame(requestRef.current);
  //     }
  //   };
  // }, [isRandomVarian || isRandomSlot]);

  useEffect(() => {
    let frameCount = 0;
    let accumulatedTime = 0;
    const animate = (time) => {
      frameCount++;

      if (previousTimeRef.current !== undefined) {
        // สะสมเวลาตาม TIME_SCALE
        accumulatedTime += TIME_SCALE;

        // update physics ตามจำนวนครั้งที่สะสมได้
        while (accumulatedTime >= 1) {
          updateBallPositions(0.67);
          accumulatedTime -= 1;
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isRandomVarian || isRandomSlot]);

  const dropBall = async () => {
    if (!isRunning) {
      setIsDropping(true);
    }

    if (isRunning) {
      if (currentDrop >= TOTAL_DROPS) {
        setIsRunning(false);
        return;
      }
      setCurrentDrop((prev) => prev + 1);
    }

    let pattern = null;
    let startX;

    if (isRandomSlot && pattern === null) {
      const selectedGroup = await selectGroup();
      const slotsInGroup = selectedGroup ? groupSlot[selectedGroup] : [];
      const randomSlot =
        slotsInGroup[Math.floor(Math.random() * slotsInGroup.length)];
      const randomPattern = getRandomNumber(
        0,
        patternsConfig[randomSlot].length - 1,
      );
      pattern = patternsConfig[randomSlot][randomPattern];
      startX = pattern.startX;
    } else if (!isRandomSlot) {
      pattern =
        patternsConfig[configRef.current.slot][configRef.current.pattern];
      startX = pattern.startX;
    }

    setBalls((prev) => [
      ...prev,
      {
        x: startX,
        y: BALL_SIZE,
        vx: 0,
        vy: 0,
        bounceCount: 0,
        pattern: pattern,
      },
    ]);

    if (!isRunning) {
      setTimeout(() => {
        setIsDropping(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (isRunning && currentDrop < TOTAL_DROPS) {
      const timer = setTimeout(() => {
        dropBall();
      }, DROP_INTERVAL);

      return () => clearTimeout(timer);
    } else if (isRunning && currentDrop >= TOTAL_DROPS) {
      setIsRunning(false);
      // Calculate statistics
      const total = Object.values(results).reduce(
        (sum, count) => sum + count,
        0,
      );
      const targetSuccess = results[selectedSlot] || 0;
      const successRate = ((targetSuccess / total) * 100).toFixed(2);
      setStats({
        totalDrops: total,
        successCount: targetSuccess,
        successRate: successRate,
        distribution: Object.entries(results).map(([slot, count]) => ({
          slot: `ช่อง ${slot}`,
          count: count,
          percentage: ((count / total) * 100).toFixed(2),
        })),
      });
    }
  }, [isRunning, currentDrop, results]);

  // Progress reward this area krubb
  useEffect(() => {
    if (landedSlots && landedSlots.length > 0 && stats !== 0) {
      if (landedSlots?.length >= numberOfBalls) {
        handleResult(landedSlots);

        // reset value
        setStats(null);
        setNumberOfBalls(0);
        setLandedSlots([]);
      }
    }
  }, [landedSlots, stats]);

  const getGroupBySlot = (slotNumber: number): string | null => {
    for (const [group, slots] of Object.entries(groupSlot)) {
      if (slots.includes(slotNumber)) {
        return group;
      }
    }
    return null;
  };

  const handleResult = async (data: ILandedSlotProps[]) => {
    const groupRewards = data.reduce((acc: IGroupRewards, ball) => {
      const group = getGroupBySlot(ball.slotNumber);
      if (group) {
        acc[group] = (acc[group] || 0) + 1;
      }
      return acc;
    }, {});

    try {
      const response = await fetchNui<{ success: boolean }>(
        "processGameResults",
        {
          groupRewards,
        },
      );
      if (response?.success) {
        console.log("Results processed:", groupRewards);
      }
    } catch (error) {
      console.error("Failed to process results:", error);
    }
  };

  return {
    dropMultipleBalls,
    getPinPositions,
    balls,
    isRunning,
    landedSlots,
    isDropping,
    stats,
    score,
    lastSlot,
    setBalls,
    setResults,
    setStats,
    startTest,
    currentDrop,
    TOTAL_DROPS,
  };
};

export default ViewModel;
