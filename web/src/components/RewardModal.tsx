import { Dialog } from "@mui/material";
import styled from "styled-components";
import { IRewardBoxProps } from "./type";
import { plinkoReward } from "@/utils/mockData";
import XIcon from "@/assets/x.png";

const RewardModal = ({
  isOpenModal,
  onClose,
}: {
  isOpenModal: IRewardBoxProps;
  onClose: () => void;
}) => {
  const handleOpenRewardModal = () => {
    return plinkoReward?.filter((item) => item.type === isOpenModal?.type);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  };

  const rewardItemList = handleOpenRewardModal();

  return (
    <CustomDialog
      open={isOpenModal?.isOpen}
      maxWidth="lg"
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "50px",
          overflow: "visible",
        },
      }}
    >
      <div className="RewardBox relative flex h-[600px] w-[600px] flex-col overflow-hidden rounded-3xl p-5">
        <Title className="text-[50px] font-semibold text-[#FAE3A7]">
          {capitalizeFirstLetter(isOpenModal?.type)} box reward
        </Title>
        <div
          onClick={onClose}
          className="translate absolute right-5 top-[20px] cursor-pointer hover:scale-110"
        >
          <img src={XIcon} alt="X" />
        </div>
        <div className="flex h-full w-full flex-col gap-3 overflow-y-auto">
          {rewardItemList &&
            rewardItemList?.map((item) => {
              return (
                <div className="flex h-[60px] items-center gap-2">
                  <img
                    src={item?.url}
                    alt={item?.name + item?.type}
                    height={60}
                    width={60}
                  />
                  <div className="text-[35px] text-[#FAE3A7]">{item?.name}</div>
                </div>
              );
            })}
        </div>
      </div>
    </CustomDialog>
  );
};

const CustomDialog = styled(Dialog)`
  border-radius: 20px;
  overflow: visible;
`;

const Title = styled.p`
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export default RewardModal;
