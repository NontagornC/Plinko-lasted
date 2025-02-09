export const TIME_SCALE = 1.7;
export const BOARD_WIDTH = 800;
export const BOARD_HEIGHT = 800;
export const PIN_SIZE = 8;
export const BALL_SIZE = 10;
export const GRAVITY = 0.03;
export const BOUNCE_ELASTICITY = 0.89;
export const FRICTION = 0.99;
export const MIN_SPEED = 0.001;
export const TOTAL_SLOTS = 21;
export const ROWS = 9;
export const COLS = 10;
export const EXCEPTSLOT = [4, 7, 11, 13, 19];
export const SLOTCOLOR = {
  1: "#ffff00",
  2: "#ffff00",
  3: "#ffff00",
  4: "#1F2838",
  5: "#00ff00",
  6: "#00ff00",
  7: "#1F2838",
  8: "#e62e00",
  9: "#e62e00",
  10: "#e62e00",
  11: "#1F2838",
  12: "#d500e4",
  13: "#1F2838",
  14: "#66ffff",
  15: "#66ffff",
  16: "#66ffff",
  17: "#66ffff",
  18: "#66ffff",
  19: "#1F2838",
  20: "#f98125",
  21: "#f98125",
};

export const groupProbabilities = {
  a: 0.2,
  b: 0.1,
  c: 0.2,
  d: 0.01,
  e: 0.4,
  f: 0.09,
};

export const groupSlot = {
  a: [1, 2, 3],
  b: [5, 6],
  c: [8, 9, 10],
  d: [12],
  e: [14, 15, 16, 17, 18],
  f: [20, 21],
};

export const DROP_BALL_SIZING_BUTTON = [1, 5, 10, 20, 50, 100, 300, 500, 1000];
export const BUTTON_COLORS = {
  1: "bg-blue-500 hover:bg-blue-600",
  5: "bg-green-500 hover:bg-green-600",
  10: "bg-yellow-500 hover:bg-yellow-600",
  20: "bg-purple-500 hover:bg-purple-600",
  50: "bg-pink-500 hover:bg-pink-600",
  100: "bg-red-500 hover:bg-red-600",
  300: "bg-orange-500 hover:bg-orange-600",
  500: "bg-teal-500 hover:bg-teal-600",
  1000: "bg-indigo-500 hover:bg-indigo-600",
};

export const startPositions = {
  leftMost: 80, // = 80 (ซ้ายสุด)
  leftQuarter: BOARD_WIDTH * 0.25, // = 200 (1/4 จากซ้าย)
  center: BOARD_WIDTH / 2, // = 400 (กลาง)
  rightQuarter: BOARD_WIDTH * 0.75, // = 600 (3/4 จากซ้าย)
  rightMost: BOARD_WIDTH - 40, // = 720 (ขวาสุด)

  // ตำแหน่งอื่นๆ ที่น่าสนใจ
  slightlyLeft: BOARD_WIDTH * 0.4, // = 320 (ซ้ายนิดหน่อย)
  slightlyRight: BOARD_WIDTH * 0.6, // = 480 (ขวานิดหน่อย)
  customPosition: 230, // กำหนดระยะห่างจากขอบซ้าย

  custom1: BOARD_WIDTH - 300,
  custom2: 120,
};

export const patternsConfig = {
  1: [
    // *1/1
    {
      startX: startPositions.leftMost,
      bounces: [0.8, 0.7, 0, -1.9, -0, -0.1, -0.1],
      groundBounces: [0.6, 0.6, -0.1],
    },
    // *1/2
    {
      startX: startPositions.leftQuarter,
      bounces: [-0.5, -0.5, -0.3, -0.3, -0.3, -0.3, -0.0],
      groundBounces: [0.6, 0.6, -0.1],
    },
    // *1/3
    {
      startX: startPositions.center,
      bounces: [-2, -1.2, -1.0, -0.6, -0.6, -0, -0],
      groundBounces: [-0.6],
    },
    // *1/4
    {
      startX: startPositions.rightQuarter - 100,
      bounces: [-2, -1.0, -1, -1.0, -0.8, -0.2, -0.4, -0.4, -0.3, -0.2],
      groundBounces: [-0.7, 0, 0],
    },
    // *1/5
    {
      startX: startPositions.leftMost + 20,
      bounces: [1, 1, 1.3, 2, -1.1, -0.8, -0, -1, -1, -1, -1, -1, -1],
      groundBounces: [-1.2],
    },
    // *1/6
    {
      startX: startPositions.center + 65,
      bounces: [
        1.2, 0.5, 0.5, 1, 0.8, 0.1, 0.2, -1, 0, 0, 0, 0, 0, 0, 0, -0.4, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      groundBounces: [0.5],
    },
    // *1/7
    {
      startX: startPositions.center + 65,
      bounces: [
        -1.2, -0.8, -0.8, -1, -0.8, -0.1, -0.2, -1, -1, -0.8, -0.5, -0.2,
      ],
      groundBounces: [-0.55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *1/8
    {
      startX: startPositions.rightQuarter,
      bounces: [-1.2, -0.5, -0.5, -1, -0.8, -0.1, -0.2, 3],
      groundBounces: [-0.5, -0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *1/9
    {
      startX: startPositions.center - 5,
      bounces: [-0.8, -0.5, -0.5, -1, -0.8, -0.1, -0.2],
      groundBounces: [-0.5, -0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *1/10
    {
      startX: startPositions.rightMost - 75,
      bounces: [-1, -1, -1, -0.3, 0.1, 0.2, 0, -0.2],
      groundBounces: [-0.65, -0.6, -0.8],
    },
  ],
  2: [
    // *2/1
    {
      startX: startPositions.rightQuarter - 100,
      bounces: [-2, -1.0, -1, -1.0, -0.8, -0.2, -0.4, -0.4, -0.3, -0.2],
      groundBounces: [-0.3, 0, 0],
    },
    // *2/2
    {
      startX: startPositions.center + 35,
      bounces: [-1.2, -0.8, -0.8, -1, -0.8, -0.1, -0.2, 3],
      groundBounces: [-0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *2/3
    {
      startX: startPositions.leftMost + 20,
      bounces: [0.12, -0.15, -0.1, -0.2, -0.2, -0.2, -0.2],
      groundBounces: [-0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *2/4
    {
      startX: startPositions.leftMost + 20,
      bounces: [0.4, 0.2, 0.15, 0.1, 0.1, 0.08, -0.1],
    },
    // *2/5
    {
      startX: startPositions.rightMost - 160,
      bounces: [-1.5, -1.5, -1.5, -1.5, -0.8, -0.5, -0.2],
      groundBounces: [-0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *2/6
    {
      startX: startPositions.center - 1,
      bounces: [
        -1.0, -1.0, -1.0, -1.0, 0.1, 0.2, 0.4, -1.0, -1.0, -1.0, -1.0, 0.1, 0.2,
        0.4, -1.0, -1.0, -1.7, -1.7,
      ],
    },
    // *2/7
    {
      startX: startPositions.center + 60,
      bounces: [-1.2, -1, -0.8, -0.5, -0.05, -0.05, 0.8],
      groundBounces: [-0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *2/8
    {
      startX: startPositions.leftMost + 20,
      bounces: [0.8, 0.2, -1, -0.8, -0.5, -0.4, -0.5],
      groundBounces: [-0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *2/9
    {
      startX: startPositions.leftMost,
      bounces: [0.5, 0.3, -1.3, -0.9, 0, -1.8, -1.2],
    },
    // *2/10
    {
      startX: startPositions.rightMost,
      bounces: [-0.5, -0.3, -1.3, -0.9, 0, -0.2, -1.2],
      groundBounces: [-0.8, -1.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
  3: [
    // *3/1
    {
      startX: startPositions.rightQuarter - 100,
      bounces: [-2, -1.0, -1, -1.0, -0.8, -0.2, -0.4, -0.4, -0.3, -0.2],
      groundBounces: [-0.098, 0, 0],
    },
    // *3/2
    {
      startX: startPositions.leftMost + 20,
      bounces: [1, 1, 1.3, 2, -1.1, -0.2, -0, -5, -5, -2, -5, -3, -5],
      groundBounces: [-0.7, -0.6, -0.1],
    },
    // *3/3
    {
      startX: startPositions.center + 35,
      bounces: [-1.2, -0.8, -0.8, -1, -0.8, -0.1, -0.2, 3],
      groundBounces: [-0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *3/4
    {
      startX: startPositions.center - 5,
      bounces: [
        -1.0, -1.0, -1.0, -1.0, 0.1, 0.2, 0.4, -1.0, -1.0, -1.0, -1.0, 0.1, 0.2,
        0.4, -1.0, -1.0, -1.7, -1.7,
      ],
    },
    // *3/5
    {
      startX: startPositions.rightQuarter - 170,
      bounces: [-2, -1.0, -1, -1.0, -0.5, 0.2, -0.2, -0.2],
      groundBounces: [-0.7, -0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *3/6
    {
      startX: startPositions.leftMost,
      bounces: [0.5, 0.5, 0.2, 0.1, -0.2, -0.2, 0],
      groundBounces: [
        -0.7, -0.9, -0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    // *3/7
    {
      startX: startPositions.rightQuarter,
      bounces: [-2, -1.3, -1.1, -0.9, 0, 0, 0, -0.2, -0.1, 0, 0.2, 0.1],
      groundBounces: [
        -1.1, -0.1, -0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    // *3/8
    {
      startX: startPositions.rightMost - 117,
      bounces: [-1.7, -1.2, -1.2, -1.1, -0.5, -0.5, -0.3],
      groundBounces: [
        -0.2, -0.1, -0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    // *3/9
    {
      startX: startPositions.rightMost - 63,
      bounces: [-1, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4],
      groundBounces: [
        -0.7, -0.1, -0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    // *3/10
    {
      startX: startPositions.rightMost,
      bounces: [-1, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4, -0.4],
      groundBounces: [
        -1.2, -0.5, -1, -1, -0.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
  ],
  4: [
    // พื้นว่าง
  ],
  5: [
    // *5/1
    {
      startX: startPositions.leftMost,
      bounces: [0.5, 0.5, 0.5, 0, -0.8, -0.4, -0.2, -0.1, 0, 0, 0],
      groundBounces: [-1.2, -0.3, 0],
    },
    // *5/2
    {
      startX: startPositions.leftQuarter - 40,
      bounces: [-0.1, -0.1, -0.1, -0.1, -0.3, -0.4, 0],
      groundBounces: [0.15, 0.1, 0.1],
    },
    // *5/3
    {
      startX: startPositions.leftQuarter - 5,
      bounces: [1, 1, 0, -1.5, -0.8, -1, -1.2],
      groundBounces: [-1.2, -0.3, 0.1],
    },
    // *5/4
    {
      startX: startPositions.center - 40,
      bounces: [
        -0.2, -0.2, -0.2, -0.1, 0, -0.1, -0.1, -0.3, -0.3, -0.3, -0.5, 0, 0.1,
        0.1, -0.3, -0.2,
      ],
      groundBounces: [0.3, 0.1, 0.1],
    },
    // *5/5
    {
      startX: startPositions.rightQuarter - 35,
      bounces: [-0.8, -0.5, -0.5, 0, 0.1, -0.3, -0.3, -0.1, -0.1],
      groundBounces: [-1.5, -1.5, 0.3],
    },
    // *5/6
    {
      startX: startPositions.rightQuarter + 10,
      bounces: [
        -0.7, -0.7, -1, -0.5, -0.5, -0.3, -0.1, 0, 0, 0, -0.7, -0.7, -1, -0.5,
        -0.5, -0.3, -0.1, 0.2, 0, 0,
      ],
      groundBounces: [-1.55, -1.5, 0.3],
    },
    // *5/7
    {
      startX: startPositions.rightMost - 20,
      bounces: [-1, -0.3, 0.2, 0.2, -2, -0.4, -0.6],
    },
    // *5/8
    {
      startX: startPositions.leftQuarter + 45,
      bounces: [
        1, 0.4, 0.1, 0, -0.2, -0.5, -0.5, 1, 0.4, 0.1, 0, -0.2, -0.7, -0.5,
      ],
      groundBounces: [-0.4, -1.5, 0.3],
    },
    // *5/9
    {
      startX: startPositions.rightMost - 40,
      bounces: [
        -0.5, -0.4, -0.1, -0.4, -0.2, -0.5, -0.5, -1, -0.4, 0.1, 0, -0.2, -0.7,
        -0.5, -0.5, -0.4, -0.1, -0.4, -0.2, -0.5, -0.5, -1, -0.4, 0.1, 0, -0.2,
        -0.7, -0.5, -0.5, -0.1, 0.1, -0.7, 0.3,
      ],
      groundBounces: [0.1, 0.1, 0.1],
    },
    // *5/10
    {
      startX: startPositions.rightQuarter + 45,
      bounces: [
        -1, -0.4, -0.1, -0.2, -1, -0.5, -0.5, 1, 0.4, 0.1, 0, -0.2, -0.7, -0.5,
      ],
      groundBounces: [0.2, 0.1, 0.1],
    },
  ],
  6: [
    // *6/1
    {
      startX: startPositions.rightQuarter - 170,
      bounces: [-2, -1.0, -1, -1.0, -0.8, -0.2, -0.4, -0.4],
      groundBounces: [0, 0, 0],
    },
    // *6/2
    {
      startX: startPositions.leftMost + 43,
      bounces: [0.12, 0.15, 0.1, 0.2, 0.2, 0.2, 0.2],
    },
    // *6/3
    {
      startX: startPositions.leftQuarter,
      bounces: [
        0.3, 0.3, 0.3, 0.1, -0.3, 0.1, 0.3, 0.1, -0.21, -0.1, -0.1, -0.1, 0.1,
        0.3, 0.1, 0.3, 0.3, 0.3, 0.1, -0.3, 0.2, 0.5, 0.4,
      ],
      groundBounces: [0.1, -1.5, 0.1],
    },
    // *6/4
    {
      startX: startPositions.leftQuarter + 45,
      bounces: [
        1, 0.4, 0.1, 0, -0.3, -0.5, -0.5, 1, 0.4, 0.1, 0, -0.3, -0.5, -0.5, 1,
        0.4, 0.1, 0, -0.3, -0.5, -0.5,
      ],
    },
    // *6/5
    {
      startX: startPositions.center,
      bounces: [0.8, 0.5, 0.1, -0.2, -0.7, 0, 0],
      groundBounces: [-1.1, -1.3, -0.2],
    },
    // *6/6
    {
      startX: startPositions.rightQuarter + 10,
      bounces: [
        -1, -1, -0.8, -0.5, 0, 0, 0.01, -1, -1, -0.8, -0.5, 0, 0, 0.01, -0.1,
      ],
      groundBounces: [-0.1, -0.1, -0.2],
    },
    // *6/7
    {
      startX: startPositions.rightMost,
      bounces: [-1, -1, -1, 0, 0, 0, 0],
      groundBounces: [0.5, -0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *6/8
    {
      startX: startPositions.rightQuarter,
      bounces: [
        -0.8, -0.3, -0.3, -0.1, -0.3, -0.6, -0.3, -0.2, -0.4, -0.2, -0.8, -0.8,
        -0.3, -0.3, -0.1, -0.6, -0.8, -0.3, -0.2, -0.4, -0.2, -0.8, -0.8, -0.3,
        -0.8, -0.3, 0.3, 0.1, 0.3, -0.6, -0.3, -0.2, -0.4, -0.2, -0.8, -0.8,
      ],
      groundBounces: [-0.8, -0.15, -0.1, -0.1],
    },
    // *6/9
    {
      startX: startPositions.rightQuarter - 40,
      bounces: [-0.5, 0, 0, 0.1, 0, 0, 0],
      groundBounces: [-0.8, -0.15, -0.1, -0.1],
    },
    // *6/10
    {
      startX: startPositions.rightMost,
      bounces: [
        -0.5, 0, 0, 0, 0, 0, 0, -0.5, 0, 0, 0, 0, 0, 0, -0.5, 0, 0, 0, 0, 0, 0,
        -0.4, 0, -0.2,
      ],
      groundBounces: [-0.15, -0.1, -0.1, -0.1],
    },
  ],
  7: [
    // ช่องว่างหรือพื้นที่
  ],
  8: [
    // *8/1
    {
      startX: startPositions.center + 35,
      bounces: [
        -1.2, -0.8, -0.8, -1, -0.8, -0.1, -0.2, 2, -1, -0.8, -0.5, -0.2,
      ],
      groundBounces: [-0.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *8/2
    {
      startX: startPositions.center + 65,
      bounces: [
        -1.2, -0.8, -0.8, -1, -0.8, -0.1, -0.2, 2, -1, -0.8, -0.5, -0.2,
      ],
      groundBounces: [-0.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *8/3
    {
      startX: startPositions.leftMost,
      bounces: [0.12, 0.15, -0.1, -0.2, -0.2, -0.2, -0.2],
      groundBounces: [-0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *8/4
    {
      startX: startPositions.center,
      bounces: [
        -0.3, -0.2, -0.2, -0.2, 0, 0.1, 0.1, -0.2, -0.5, -0.5, -0.5, 0, 0.1,
        0.1, -0.3, -0.5,
      ],
      groundBounces: [0.3, 0.1, 0.1],
    },
    // *8/5
    {
      startX: startPositions.rightQuarter - 5,
      bounces: [-1, -0.9, -0.8, 0, 0.2, -0.4, -0.3, -0.3],
    },
    // *8/6
    {
      startX: startPositions.rightQuarter,
      bounces: [
        -0.8, -0.3, -0.3, -0.1, -0.3, -0.6, -0.3, -0.2, -0.4, -0.2, -0.8,
      ],
      groundBounces: [0.3, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *8/7
    {
      startX: startPositions.leftQuarter + 47,
      bounces: [1, 0.4, 0.1, 0, -0.4, -0.5, -0.5],
      groundBounces: [0.01, 0.25, 0.1, 0.1],
    },
    // *8/8
    {
      startX: startPositions.center,
      bounces: [
        1, 1, 0.1, -0.2, -0.7, 0, 0, 1, 1, 0.1, -0.05, 0, 0, 0, 1, 1, 0.1, -0.2,
        -0.5, 0.05, 0.1, 0.1, 1, 0.1, -0.05, 0, 0, 0,
      ],
      groundBounces: [0.2, 0, 0.1],
    },
    // *8/9
    {
      startX: startPositions.rightQuarter - 43,
      bounces: [
        -0.12, -0.15, -0.1, -0, 0.2, 0.2, 0.2, -0.12, -0.15, -0.1, -0, -0.25,
        0.2, 0.2,
      ],
      groundBounces: [-0.1, -0.55, -0.2],
    },
    // *8/10
    {
      startX: startPositions.rightMost,
      bounces: [
        0, -1, -0.8, 0, 0, -0.05, -1.1, 0, -0.3, -0.2, 0, 0, -0.1, -0.2, 0, -1,
        -0.8, 0.1, 0, -0.05, -1.1,
      ],
      groundBounces: [0, 0, -0.2],
    },
  ],
  9: [
    // *9/1
    {
      startX: startPositions.center + 40,
      bounces: [
        -0.3, -0.4, -0.2, -0.3, 0, -0.1, -0.1, -0.3, -0.3, -0.3, -0.5, 0, 0.1,
        0.1, -0.3, -0.5,
      ],
      groundBounces: [0.3, 0.1, 0.1],
    },
    // *9/2
    {
      startX: startPositions.rightQuarter - 5,
      bounces: [-0.5, 0, 0, 0.1, 0, 0, 0],
      groundBounces: [-0.8, -0.15, -0.1, -0.1],
    },
    // *9/3
    {
      startX: startPositions.center,
      bounces: [
        -0.3, -0.4, -0.2, -0.2, 0.1, -0.1, -0.4, -0.3, -0.4, -0.2, -0.2, 0.1,
        -0.05, -0.1,
      ],
      groundBounces: [0.6, 0.5, 0.1, 0.1],
    },
    // *9/4
    {
      startX: startPositions.rightQuarter,
      bounces: [
        1, 0.5, 0.5, 0.4, 0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, -0.6, -0.8,
      ],
      groundBounces: [-0.4, -0.45, -0.1, -0.1],
    },
    // *9/5
    {
      startX: startPositions.leftMost,
      bounces: [
        0.3, 0.3, 0.4, 0.4, 0.3, 0.1, 0.2, 0.3, 0.3, 0.4, 0.4, 0.3, 0.1, 0.2,
        0.3, 0.3, 0.4, 0.4, -0.4, 0.1, 0.2,
      ],
      groundBounces: [-0.45, -0.4, -0.1, -0.1],
    },
    // *9/6
    {
      startX: startPositions.leftMost + 30,
      bounces: [
        0.3, 0.2, 0.1, 0.1, 0.3, 0.1, 0.2, 0.3, 0.3, 0.4, 0.4, 0.3, 0.1, 0.2,
        0.3, -0.2, -0.2, -0.2, -0.2, -0.1, -0.2,
      ],
      groundBounces: [-0.1, -0.35, -0.1, -0.1],
    },
    // *9/7
    {
      startX: startPositions.leftQuarter,
      bounces: [0.2, 0.2, 0.3, 0.5, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, -0.07],
      groundBounces: [-0.35, -0.4, -0.1, -0.1],
    },
    // *9/8
    {
      startX: startPositions.leftQuarter + 60,
      bounces: [0.2, 0.2, 0.3, 0.6, 0.1, 0.3, 0.2, 0, 0, 0, 0, 0, 0, -0.1],
      groundBounces: [-0.35, -0.5, -0.1, -0.1],
    },
    // *9/9
    {
      startX: startPositions.rightQuarter + 40,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8, -1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [-0.4, -0.4, -0.1, -0.1],
    },
    // *9/10
    {
      startX: startPositions.rightMost,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8, -1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [-0.1, -0.45, -0.1, -0.1],
    },
  ],
  10: [
    // *10/1
    {
      startX: startPositions.center,
      bounces: [-0.3, -0.2, -0.2, -0.2, 0, 0.1, 0.1],
    },
    // *10/2
    {
      startX: startPositions.rightMost - 20,
      bounces: [-0.1, -0.3, 0.2, -2, -2, -0.4, -0.6],
    },
    // *10/3
    {
      startX: startPositions.leftMost + 15,
      bounces: [
        0.3, 0.2, 0.1, 0.1, 0.3, 0.1, 0.2, 0.3, 0.3, 0.4, 0.4, 0.3, 0.1, 0.2,
        0.3, -0.2, -0.2, -0.2, -0.2, -0.1, -0.2,
      ],
      groundBounces: [-0.1, -0.35, -0.1, -0.1],
    },
    // *10/4
    {
      startX: startPositions.leftQuarter,
      bounces: [0.2, 0.2, 0.3, 0.5, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, -0.07],
      groundBounces: [-0.5, -0.4, -0.1, -0.1],
    },
    // *10/5
    {
      startX: startPositions.leftQuarter + 90,
      bounces: [
        0.2, 0.2, 0.3, 0.6, 0.1, 0.3, 0.2, 0, 0, 0, 0, 0, 0, -0.1, 0.2, 0.2,
        0.1, -0.4, -0.5, -0.4, -0.1,
      ],
      groundBounces: [0.6, 0.6, -0.1, -0.1],
    },
    // *10/6
    {
      startX: startPositions.rightQuarter - 40,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, 0.1,
        -0.8, 0.1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [-0.2, -0.4, -0.1, -0.1],
    },
    // *10/7
    {
      startX: startPositions.rightMost,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, 0.1,
        -0.4, -1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [-0.1, -0.45, -0.1, -0.1],
    },
    // *10/8
    {
      startX: startPositions.center,
      bounces: [
        -0.3, -0.2, -0.2, -0.2, 0, 0.1, 0.1, -0.2, -0.1, -0.1, -0.4, 0.1, 0.3,
      ],
      groundBounces: [-0.3, -0.4, -0.1, -0.1],
    },
    // *10/9
    {
      startX: startPositions.center - 60,
      bounces: [
        -0.3, -0.2, -0.2, -0.2, 0, 0.2, -0.1, -0.2, -0.1, -0.2, -0.3, -0.1, 0.3,
        -0.1, -0.2,
      ],
      groundBounces: [0.6, 0.82, -0.25, -0.1, -0.1, -0.1, -0.1],
    },
    // *10/10
    {
      startX: startPositions.rightMost - 120,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, 0.1,
        -0.4, -0.5, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3,
        -0.6, -0.8,
      ],
      groundBounces: [-0.1, -0.1, -0.1, -0.1],
    },
  ],
  11: [
    // ช่องเปล่า
  ],
  12: [
    // *12/1
    {
      startX: startPositions.leftQuarter,
      bounces: [
        0.3, 0.3, 0.3, 0.1, -0.3, 0.1, 0.3, 0.1, -0.21, -0.1, -0.1, -0.1, 0.1,
        0.3, 0.3,
      ],
      groundBounces: [0.2, -1.5, 0.3],
    },
    // *12/2
    {
      startX: startPositions.leftQuarter + 60,
      bounces: [0.2, 0.2, 0.3, 0.6, 0.1, 0.3, 0.2, 0, 0, 0, 0, 0, 0, -0.07],
      groundBounces: [-0.35, -0.4, -0.1, -0.1],
    },
    // *12/3
    {
      startX: startPositions.center,
      bounces: [
        -0.3, -0.2, -0.2, -0.2, 0, 0.1, 0.1, -0.2, -0.2, -0.2, 0, 0, 0.3, 0.1,
      ],
      groundBounces: [0.45, -0.2, -0.1, -0.1],
    },
    // *12/4
    {
      startX: startPositions.rightQuarter,
      bounces: [-1, -0.9, -0.8, 0, 0.2, -0.4, -0.6, -0.3, -0.2],
    },
    // *12/5
    {
      startX: startPositions.center,
      bounces: [-1.2, -1.2, -1.0, -0.6, -0.0, -0, -0],
      groundBounces: [0.6, 0.6, 0.6],
    },
    // *12/6
    {
      startX: startPositions.rightQuarter + 50,
      bounces: [-1, -0.9, -0.8, 0, 0.2, -0.4, -0.6, -1, -0.2, -0.3, -0.4],
      groundBounces: [-0.15, -0.15, -0.1],
    },
    {
      // *12/7
      startX: startPositions.rightMost,
      bounces: [
        -0.2, -0.3, -0.8, 0, 0.2, -0.4, -0.6, -1, -0.2, -0.3, -0.4, -0.2, -0.3,
        -0.8, 0, 0.2, -0.4, -0.6, -1, -0.2, -0.3, -0.4, -0.2, -0.3, 0.2, 0.4,
        0.4, 0.5, -0.6, -1, -0.2, -0.3, -0.4,
      ],
      groundBounces: [0.57, 0.85, 0.1],
    },
    // *12/8
    {
      startX: startPositions.center,
      bounces: [0.8, 0.5, 0.1, -0.2, -0.7, 0, 0],
      groundBounces: [-1.05, -0.15, -0.1],
    },
    // *12/9
    {
      startX: startPositions.leftMost,
      bounces: [
        0.8, 0.5, 0.1, -0.2, -0.7, 0, 0, 0.8, 0.5, 0.1, -0.2, -0.7, 0, 0, 0.8,
        0.5, 0.1, -0.2, -0.7, 0, 0, 0.7, 0.6, 1,
      ],
      groundBounces: [0.15, 0.1, 0.1],
    },
    // *12/10
    {
      startX: startPositions.leftMost + 40,
      bounces: [
        0.3, 0.2, 0.1, -0.2, -0.2, 0, 0, 0.3, 0.3, 0.1, -0.2, -0.7, 0, 0, 0.8,
        0.9, -0.3, 0.5, -0.7, -0.1, 0, 0.7, 0.6, 1,
      ],
      groundBounces: [-0.17, -0.1, -0.1],
    },
  ],
  13: [],
  14: [
    // *14/1
    {
      startX: startPositions.rightQuarter - 35,
      bounces: [-1, -0.9, -0.8, 0, 0.2, -0.4, -0.6, -0.3, -0.2],
    },
    // *14/2
    {
      startX: startPositions.rightMost - 20,
      bounces: [
        -0.1, -0.3, 0.2, -2, -2, 0, 0, -0.1, -0.3, 0.2, 0.1, -0.4, 0.3, 0, -0.1,
        -0.3, 0.2, -2, -2, 0, 0,
      ],
      groundBounces: [-0.83, -0.5, 0.3],
    },
    // *14/3
    {
      startX: startPositions.rightQuarter + 45,
      bounces: [
        1, 0.4, 0.1, 0, -0.2, -0.5, -0.5, 1, 0.4, 0.1, 0, -0.2, -0.7, -0.5,
      ],
      groundBounces: [-0.4, -1.5, 0.3],
    },
    // *14/4
    {
      startX: startPositions.center,
      bounces: [0.8, 0.5, 0.1, -0.2, -0.7, 0, 0],
      groundBounces: [-0.9, -1.3, -0.2],
    },
    // *14/5
    {
      startX: startPositions.rightMost - 63,
      bounces: [-0.9, -0.3, -0.9, -0.3, 0.1, 0.2, 0, -0.2],
      groundBounces: [-0.65, -0.6, -0.8],
    },
    // *14/6
    {
      startX: startPositions.center,
      bounces: [
        -1.0, -1.0, 0, -1.0, 0.1, 0.2, 0.4, -1.0, -1.0, -1.3, -1.3, 0.1, 0.2,
        0.4, -1.0, -0.3, 0.3, 0.7,
      ],
      groundBounces: [1.4, 0.1, 0.1, 0.1],
    },
    // *14/7
    {
      startX: startPositions.leftMost,
      bounces: [
        0.8, 0.5, 0.1, -0.2, -0.3, 0, 0, 0.8, 0.5, 0.2, -0.1, -0.7, 0, 0, 0.8,
        0.5, 0.1, 1, 0.2, 0, 0, 0.7, 0.6, 1,
      ],
      groundBounces: [0.8, 0.58, 0.1],
    },
    // *14/8
    {
      startX: startPositions.leftQuarter + 30,
      bounces: [
        0.8, 0.5, 0.1, -0.2, -0.3, 0.7, 0.3, 0.8, 0.5, 0.2, -0.1, -0.1, -0.15,
        0, 0.8, 0.5, 0.1, 1, 0.2, 0, 0, 0.7, 0.6, 1,
      ],
      groundBounces: [0.6, 0.58, 0.1],
    },
    // *14/9
    {
      startX: startPositions.center,
      bounces: [
        -0.3, -0.4, -0.2, -0.3, 0, 0.1, 0.1, -0.3, -0.5, -0.5, -0.5, 0, 0.1,
        0.75, 0.15, -0.5,
      ],
      groundBounces: [0.4, 0.1, 0.1],
    },
    // *14/10
    {
      startX: startPositions.rightQuarter + 40,
      bounces: [-0.8, -0.3, -0.3, -0.1, -0.3, -0.6, -0.3, -0.2, -0.4, 0.2],
      groundBounces: [
        0.3, 1.45, 0.65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
  ],
  15: [
    // *15/1
    {
      startX: startPositions.leftMost + 30,
      bounces: [
        0.3, 0.2, 0.1, 0.1, 0.3, 0.1, 0.2, 0.3, 0.3, 0.4, 0.4, 0.3, 0.1, 0.2,
        0.3, 0.3, 0.4, 0.4, -0.4, 0.1, 0.2,
      ],
      groundBounces: [-0.45, -0.4, -0.1, -0.1],
    },
    // *15/2
    {
      startX: startPositions.leftMost + 60,
      bounces: [
        0.3, 0.2, 0.3, 0.4, 0.3, 0.3, 0.2, 0.3, 0.3, 0.4, -0.5, 0.3, 0.1, 0.2,
        0.3, 0.3, 0.4, 0.4, -0.4, 0.1, 0.2,
      ],
      groundBounces: [0.73, 0.4, -0.1, -0.1],
    },
    // *15/3
    {
      startX: startPositions.center,
      bounces: [
        -0.3, -0.4, -0.2, -0.3, 0, 0.1, 0.1, -0.3, -0.5, -0.5, -0.5, 0, 0.1,
        0.2, -0.3, -0.5,
      ],
      groundBounces: [0.3, 0.1, 0.1],
    },
    // *15/4
    {
      startX: startPositions.rightQuarter,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8, -1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [-0.4, -0.4, -0.1, -0.1],
    },
    // *15/5
    {
      startX: startPositions.leftQuarter + 60,
      bounces: [
        -0.3, -0.4, -0.2, 0.6, 0.4, 0.2, 0.1, 0.2, -0.5, -1, -0.5, -0.3, 0.3,
        0.6, 0.5, -0.5, -0.3, 0.1, 0.5, 0.15, -0.6, -0.8, -0.6, -0.3, -0.3,
      ],
      groundBounces: [0.4, 0.1, 0.1],
    },
    // *15/6
    {
      startX: startPositions.center,
      bounces: [
        -0.3, -0.4, -0.2, -0.3, 0, 0.5, 0.6, 0.4, 0.5, 0.5, -0.3, 0, 0.1, 0.2,
        -0.3, -0.5,
      ],
      groundBounces: [0.3, 0.1, 0.1],
    },
    // *15/7
    {
      startX: startPositions.rightQuarter - 40,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8, -1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [-0.9, 0.4, 0.35, 0.2],
    },
    // *15/8
    {
      startX: startPositions.rightQuarter + 40,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8, -1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [0.4, 0.3, -0.35, 0.2],
    },
    // *15/9
    {
      startX: startPositions.rightMost - 40,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.3, 0.2, -0.6,
        -0.8, -1, -0.5, -0.5, -0.4, -0.4, -0.4, 0.3, -1.3, 0.7, -0.6, 0.4, 0.3,
        -0.6, -0.8,
      ],
      groundBounces: [-0.68, -0.3, -0.35, 0.2],
    },
    // *15/10
    {
      startX: startPositions.center,
      bounces: [
        -1, -0.5, -0.5, -0.4, 0.3, 0.5, -0.8, 1, -0.5, -0.5, -0.3, 0.2, -0.6,
        -0.8, -0.1, -0.5, -0.5, -0.3, 0.5, 0.2, 0, 0.3, 0.1, -0.6, 0.4, 0.3,
        -0.6, -0.8,
      ],
      groundBounces: [0.25, 0.1, 0.3, 0.2],
    },
  ],
  16: [
    // *16/1
    {
      startX: startPositions.rightQuarter,
      bounces: [-1, -0.8, -0.5, -0.2, 0, 0, 0.2],
    },
    // *16/2
    { startX: startPositions.rightQuarter, bounces: [-1, 0, 0, 0, 0, 0, 0.01] },
    // *16/3
    {
      startX: startPositions.center + 90,
      bounces: [1, 1, 0.1, -0.2, -0.7, 0, 0, 1, 1, 0.1, -0.2, 0, 0, 0],
      groundBounces: [0.2, 0, 0.1],
    },
    // *16/4
    { startX: startPositions.rightMost, bounces: [0, 0, 0, 0, 0, -0.05, -1.1] },
    // *16/5
    {
      startX: startPositions.rightQuarter + 40,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [-0.4, -0.45, -0.1, -0.1],
    },
    // *16/6
    {
      startX: startPositions.leftMost,
      bounces: [
        0.7, 0.4, 0.1, 0.2, -0.1, -0.2, 0.5, 0.4, 0.4, 0.3, -0.2, -0.3, 0.7,
        0.6, 0.6, 0.6, -0.8, -0.3, 0.2, -0.6, -0.3, 0, 0, 0,
        // 21,22
      ],
      groundBounces: [0.6, 0.1, 0.1],
    },
    // *16/7
    {
      startX: startPositions.leftMost,
      bounces: [
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, -0.3, 0, 1, 1,
        1, 0, 0, 0, -0.6,
      ],
      groundBounces: [0.5, -0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *16/8
    {
      startX: startPositions.leftQuarter,
      bounces: [
        0.8, 0.3, 0.3, 0.1, 0.3, 0.6, 0.3, 0.2, 0.4, 0.2, 0.8, 0.8, 0.3, 0.3,
        0.1, 0.6, 0.8, 0.3, 0.2, 0.4, 0.2, 0.8, 0.8, 0.3, 0.8, 0.3, -0.3, -0.1,
        -0.3, 0.6, 0.3, 0.2, 0.4, 0.2, 0.8, 0.8,
      ],
      groundBounces: [0.45, 0.5, -0.1, -0.1],
    },
    // *16/9
    {
      startX: startPositions.leftQuarter + 40,
      bounces: [0.5, 0, 0, -0.1, 0, 0, 0],
      groundBounces: [1.35, 1.1, 0.1, 0.1],
    },
    // *16/10
    {
      startX: startPositions.rightMost,
      bounces: [
        0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0,
        0.4, 0, 0.2,
      ],
      groundBounces: [0.15, 0.6, 0.1, 0.1],
    },
  ],
  17: [
    // *17/1
    {
      startX: startPositions.center - 40,
      bounces: [
        -0.2, -0.2, -0.2, -0.1, 0, 0.2, 0.2, 0.3, -0.3, -0.3, -0.5, 0, 0.1, 0.1,
        -0.3, -0.2,
      ],
      groundBounces: [1.25, 0.8, 0.65],
    },
    // *17/2
    {
      startX: startPositions.center - 60,
      bounces: [
        -0.3, -0.2, -0.2, -0.2, 0, 0.1, 0.1, -0.2, -0.1, -0.1, -0.4, 0.1, 0.3,
      ],
      groundBounces: [-0.4, -0.5, -0.2, -0.1],
    },
    // *17/3
    {
      startX: startPositions.rightMost,
      bounces: [-0.5, -0.5, -0.5, 0, 0.8, 0.4, 0.2, 0.1, 0, 0, 0],
      groundBounces: [1.1, 0.3, 0],
    },
    // *17/4
    {
      startX: startPositions.rightQuarter + 40,
      bounces: [
        0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 0, 0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 0, 0.1,
        0.1, -0.2, 0.3, 0.1, 0.1, 0.1, 0.1, 0.19,
      ],
      groundBounces: [-0.15, -0.1, -0.1],
    },
    // *17/5
    {
      startX: startPositions.rightQuarter + 5,
      bounces: [
        -1, -1, 0, 1.5, 0.8, 1, 1.2, -1, -0.8, 0, 1.7, 0.8, 1.2, 1.2, -0.4,
        -0.4, 0, 1.2, -0.2, 0.2, 0.2,
      ],
      groundBounces: [0.7, 0.3, -0.1],
    },
    // *17/6
    {
      startX: startPositions.rightQuarter + 40,
      bounces: [
        0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 0, 0.1, 0.1, 0.1, 0.1, 0.3, 0.4, 0, 0.1,
        0.1, -0.1, -0.1, -0.1, 0.1, 0.2,
      ],
      groundBounces: [-0.35, -0.1, -0.1],
    },
    // *17/7
    {
      startX: startPositions.center + 40,
      bounces: [
        0.2, 0.2, 0.2, 0.1, 0, 0.1, 0.1, 0.3, 0.3, 0.3, 0.5, 0, -0.1, -0.1, 0.3,
        0.2,
      ],
      groundBounces: [-0.3, -0.1, -0.1],
    },
    // *17/8
    {
      startX: startPositions.leftQuarter + 35,
      bounces: [
        0.8, 0.5, 0.5, 0, -0.1, 0.3, 0.3, 0.1, 0.1, 0.8, 0.5, 0.5, 0, -0.1, 0.3,
        0.3, 0.1, 0.1, 1.2,
      ],
      groundBounces: [1.35, 1.25, -0.3],
    },
    // *17/9
    {
      startX: startPositions.leftMost + 40,
      bounces: [
        0.5, 0.4, 0.1, 0.4, 0.2, 0.5, 0.5, 1, 0.4, -0.1, 0, 0.2, 0.7, 0.5, 0.5,
        0.4, 0.1, 0.4, 0.2, 0.5, 0.5, 1, 0.4, -0.1, 0, 0.2, 0.7, 0.5, 0.5, 0.1,
        -0.1, 0.7, -0.3,
      ],
      groundBounces: [0.1, 0.1, 0.1],
    },
    // *17/10
    {
      startX: startPositions.leftQuarter - 45,
      bounces: [
        1, 0.4, 0.1, 0.2, 1, 0.5, 0.5, -1, -0.4, -0.1, 0, 0.2, 0.7, 0.5, 1, 0.3,
        0.08,
      ],
      groundBounces: [-0.2, -0.1, -0.1],
    },
  ],
  18: [
    // *18/1
    {
      startX: startPositions.rightQuarter,
      bounces: [-0.8, -0.3, -0.3, -0.1, -0.3, -0.6, -0.3, -0.2, -0.4, -0.2],
      groundBounces: [0.3, 0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    // *18/2
    {
      startX: startPositions.rightQuarter - 20,
      bounces: [-0.5, 0, 0, 0.1, 0, 0, 0],
      groundBounces: [-0.8, -0.15, -0.1, -0.1],
    },
    // *18/3
    {
      startX: startPositions.leftMost + 20,
      bounces: [0.5, 0, 0, -0.1, 0, 0, 0, 0.5, -0.1, 0.4, 0.3, 0, 0, 0],
      groundBounces: [0.8, 1, 0.1, 0.1],
    },
    // *18/4
    {
      startX: startPositions.leftMost + 80,
      bounces: [
        0.5, 0.2, 0.1, 0.1, 0, 0.3, 0.2, 0.1, -0.1, 0.4, 0.4, 0.3, 0.2, 0, 0.5,
        0.2, 0.1, 0,
      ],
      groundBounces: [0.8, 1, 0.1, 0.1],
    },
    // *18/5
    {
      startX: startPositions.leftQuarter,
      bounces: [
        0.5, 0.2, 0.1, 0.1, 0, 0.3, 0.2, 0.2, -0.1, 0.4, 0.4, 0.3, 0.2, 0, 0.5,
        0.2, 0.1, 0, 0.5, 0.2, 0.1, 0.1, 0.3,
      ],
      groundBounces: [0.9, 0.9, 0.1, 0.1],
    },
    // *18/6
    {
      startX: startPositions.rightQuarter - 80,
      bounces: [
        -0.5, -0.2, -0.1, -0.1, -0, -0.3, -0.2, -0.2, 0.1, -0.4, -0.4, -0.3,
        -0.2, 0, -0.5, -0.2, -0.1, 0, -0.5, -0.2, -0.1, -0.1, -0.3,
      ],
      groundBounces: [0.9, 0.9, 0.1, 0.1],
    },
    // *18/7
    {
      startX: startPositions.center,
      bounces: [
        0.2, 0.2, 0.2, 0.1, 0, 0.1, 0.1, 0.3, 0.3, 0.3, 0.5, 0, -0.1, -0.1, 0.3,
        0.2,
      ],
      groundBounces: [0.8, 0.6, -0.1],
    },
    // *18/8
    {
      startX: startPositions.center + 110,
      bounces: [
        0.2, 0.3, 0.4, 0.3, 0.2, 0.1, 0.1, 0.3, 0.6, 0.3, 0.5, 0.1, 0.4, -0.1,
        0.3, 0.2,
      ],
      groundBounces: [-0.05, -0.05, -0.05, -0.05],
    },
    // *18/9
    {
      startX: startPositions.rightQuarter,
      bounces: [
        -0.5, -0.1, -0.3, -0.1, 0, -0.3, 0.3, 0, 0, 0, -0.5, -0.1, -0.3, -0.1,
        0, -0.3, 0.3, 0, 0, -0.05, 0.3, 0.3, 0.3, 0.3,
      ],
      groundBounces: [-0.1, -0.15, -0.15, -0.1],
    },
    // *18/10
    {
      startX: startPositions.leftMost + 20,
      bounces: [
        0.7, 0.7, 0.8, -0.1, 0, 0, 0, 0.5, -0.1, 0.4, 0.3, 0, 0, 0, 0.7, 0.7,
        1.1, -0.1, 0.2, 0, 0, 0.5, -0.1, 0.4, 0.3, 0, 0, 0,
      ],
      groundBounces: [0.8, 1, 0.1, 0.1],
    },
  ],
  19: [],
  20: [
    // *20/1
    {
      startX: startPositions.rightMost - 20,
      bounces: [
        -0.5, -0.4, -0.1, 0, -0.2, -0.5, -0.5, 1, 0.4, 0.1, 0, -0.2, -0.7, -0.5,
      ],
      groundBounces: [-0.4, -1.5, 0.3],
    },
    // *20/2
    {
      startX: startPositions.rightMost,
      bounces: [
        -1, -0.5, -0.5, -0.4, -0.3, -0.5, -0.8, 1, 0.5, 0.5, 0.3, 0.2, -0.6,
        -0.8, -1, -0.5, -0.5, -0.4, -0.4, -0.2, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [0.2, 0.3, -0.35, 0.2],
    },
    // *20/3
    {
      startX: startPositions.leftMost - 20,
      bounces: [
        0.7, 0.8, 0.8, 0.8, -0.8, -0.3, 0.7, 0.8, 0.8, 0.8, -0.8, -0.3, 0.3,
        0.4, 0.1, 0.2, -0.2, 0.3, 0.2, 0.2, 0.1,
      ],
      groundBounces: [0.2, -1.5, 0.3],
    },
    // *20/4
    {
      startX: startPositions.center,
      bounces: [
        0.12, 0.44, 0.1, 0.6, 0.4, 0.2, -0.1, 0.3, 0.4, 0.1, 0, 0.1, 0.4, 0.12,
        0.44, 0.1, 0.4, 0.2, 0.2, 0, 0.3, -0.3, -0.2, 0.2, 0.1,
      ],
      groundBounces: [0.2, 0.1, 0.1, 0, 0, 0],
    },
    // *20/5
    {
      startX: startPositions.leftMost,
      bounces: [
        0.7, 0.44, 0.3, 0.6, 0.4, 0.2, -0.1, 0.3, 0.4, 0.1, 0, 0.1, 0.4, 0.12,
        0.44, 0.1, 0.4, 0.6, 0.2, 0, 0.3, -0.3, -0.2, 0.2, 0.1,
      ],
      groundBounces: [0.25, 0.1, 0.1, 0, 0, 0],
    },
    // *20/6
    {
      startX: startPositions.leftQuarter,
      bounces: [
        0.7, 0.44, 0.3, 0.6, 0.4, 0.2, -0.1, 0.3, 0.4, 0.1, 0, 0.1, 0.4, 0.12,
        0.44, 0.1, 0.4, 0.6, 0.2, 0, 0.3, -0.3, -0.2, 0.2, 0.1,
      ],
      groundBounces: [0.7, 1.3, 0.1, 0, 0, 0],
    },
    // *20/7
    {
      startX: startPositions.center + 10,
      bounces: [
        0.6, 0.2, 0, 0.2, 0.2, 0.1, -0.1, 0.1, 0.2, 0.1, 0, 0.1, 0.4, 0.12, 0.2,
        0.1, 0.4, 0.2, 0.2, 0, 0.3, -0.3, -0.2, 0.2, 0.1,
      ],
      groundBounces: [0.2, 0.1, 0.1, 0, 0, 0],
    },
    // *20/8
    {
      startX: startPositions.rightQuarter,
      bounces: [
        -1, -0.5, -0.2, -0.4, -0.3, -0.51, -0.2, 1, 0.5, 0.5, 0.3, 0.1, -0.1,
        -0.3, 0.6, 0.2, -0.2, -0.1, 0.2, 0.3, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [0.15, 0.3, -0.35, 0.2],
    },
    // *20/9
    {
      startX: startPositions.slightlyLeft,
      bounces: [
        -1, -0.5, -0.2, -0.4, -0.3, -0.51, -0.2, 1, 0.5, 0.5, 0.3, 0.1, -0.1,
        -0.3, 0.6, 0.2, -0.2, -0.1, 0.2, 0.3, 0, 1, 0.5, 0.5, 0.4, 0.3, -0.6,
        -0.8,
      ],
      groundBounces: [0.15, 0.3, -0.35, 0.2],
    },
    // *20/10
    {
      startX: startPositions.center + 10,
      bounces: [
        0.2, 0.4, 0.3, 0.1, 0.4, 0.2, -0.4, -0.2, 0.4, 0.1, 0, 0.1, 0.4, 0.12,
        0.19, 0.1, 0.4, 0.2, 0.2, 0, 0.3, -0.3, -0.2, 0.2, 0.1,
      ],
      groundBounces: [0.22, 0.1, 0.1, 0, 0, 0],
    },
  ],
  21: [
    // *21/1
    {
      startX: startPositions.leftMost - 20,
      bounces: [
        0.7, 0.8, 0.8, 0.8, -0.8, -0.3, 0.7, 0.8, 0.8, 0.8, -0.8, -0.3, 0.7,
        0.6, 0.6, 0.6, -0.8, -0.3, 0.2, 0.2, -5,
      ],
      groundBounces: [0.2, -1.5, 0.3],
    },
    // *21/2
    {
      startX: startPositions.leftMost,
      bounces: [
        0.12, 0.15, 0.1, 0.2, 0.2, 0.2, 0.2, 0.12, 0.15, 0.1, 0.2, 0.2, 0.2,
        0.1,
      ],
    },
    // *21/3
    {
      startX: startPositions.center + 110,
      bounces: [
        0.2, 0.3, 0.4, 0.3, 0.2, 0.1, 0.1, 0.3, 0.6, 0.3, 0.5, 0.3, 0.4, -0.1,
        0.3, 0.2,
      ],
      groundBounces: [0.8, 0.2, -0.05, -0.05],
    },
    // *21/4
    {
      startX: startPositions.center + 10,
      bounces: [
        2, 1.2, 1.0, 0.6, 0.6, 0, 0, -0.3, 0.5, -0.3, 1, -0.3, 0, 0, 0, 0, 1.5,
        0, 0, 0.1, 1.2, 0.5, 0.6, 0.1, 0.1, 0, 0,
      ],
      groundBounces: [0.5],
    },
    // *21/5
    {
      startX: startPositions.rightQuarter + 100,
      bounces: [2, 1.0, 1, 1.0, 0.8, 0.2, 0.4, -0.4, -0.1, 0.8, 0.5, 0.3, 0.2],
      groundBounces: [0.7, 0, 0],
    },
    // *21/6
    {
      startX: startPositions.rightMost - 20,
      bounces: [
        -0.5, -0.4, -0.8, -0, -0.5, 0.8, 0, 1, 0.5, 0.5, 0.5, 0.6, 1, -0.5,
        -0.4, -0.8, -0, -0.5, 0.57, 0.35, 1.3, 0.5, 0.5, 0.5, 0.6, 1,
      ],
      groundBounces: [0.6, 0.1, 0.1],
    },
    // *21/7
    {
      startX: startPositions.center + 75,
      bounces: [
        1.2, 0.5, 0.5, 1, 0.8, 0.3, 0.2, 0.2, 0.3, 0.5, 0.3, 0.1, 0.1, 0.1, 0,
        0, -0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      groundBounces: [0.5],
    },
    // *21/8
    {
      startX: startPositions.center - 65,
      bounces: [1.2, 0.8, 0.8, 1, 0.8, 0.1, 0.2, 1, 1, 0.2, 0.4, 0.2],
      groundBounces: [0.55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      // *21/9
      startX: startPositions.leftMost + 40,
      bounces: [
        0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2,
        0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1,
      ],
      groundBounces: [1.4, 0.5, 0.4],
    },

    // *21/10
    {
      startX: startPositions.leftMost + 80,
      bounces: [
        0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3,
        0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2,
      ],
      groundBounces: [1.3, 0.9, 0.5],
    },
  ],
};
