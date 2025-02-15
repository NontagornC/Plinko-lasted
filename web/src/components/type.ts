export interface IReturnValidateMoneyProps {
  numberOfDroppballs: number;
}

export interface ILandedSlotProps {
  slotNumber: number;
  points: number;
  timestamp: string;
  selectedSlot: number;
  selectedPattern: number;
}

export interface IGroupRewards {
  [key: string]: number;
}

export interface IRewardBoxProps {
  isOpen: boolean;
  type: string;
}
