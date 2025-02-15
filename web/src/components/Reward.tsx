import Box from "@/assets/box2.png";

interface IRawardBoxViewProps {
  handleOpenRewardModal: (value: string) => void;
}

const Reward = ({ handleOpenRewardModal }: IRawardBoxViewProps) => {
  return (
    <>
      <div
        onClick={() => {
          handleOpenRewardModal("gold");
        }}
        className="absolute bottom-[4%] left-[24.5%] flex h-[40px] w-[40px] items-center justify-center text-lg transition hover:scale-110"
      >
        <img src={Box} alt="box" />
      </div>
      <div
        onClick={() => {
          handleOpenRewardModal("diamond");
        }}
        className="absolute bottom-[4%] left-[33.5%] flex h-[40px] w-[40px] items-center justify-center text-lg transition hover:scale-110"
      >
        <img src={Box} alt="box" />
      </div>
      <div
        onClick={() => {
          handleOpenRewardModal("bronze");
        }}
        className="absolute bottom-[4%] left-[43%] flex h-[40px] w-[40px] items-center justify-center text-lg transition hover:scale-110"
      >
        <img src={Box} alt="box" />
      </div>
      <div
        onClick={() => {
          handleOpenRewardModal("platinum");
        }}
        className="absolute bottom-[4%] left-[50.7%] flex h-[40px] w-[40px] items-center justify-center text-lg transition hover:scale-110"
      >
        <img src={Box} alt="box" />
      </div>
      <div
        onClick={() => {
          handleOpenRewardModal("wood");
        }}
        className="absolute bottom-[4%] left-[61%] flex h-[40px] w-[40px] items-center justify-center text-lg transition hover:scale-110"
      >
        <img src={Box} alt="box" />
      </div>
      <div
        onClick={() => {
          handleOpenRewardModal("ruby");
        }}
        className="absolute bottom-[4%] left-[72.7%] flex h-[40px] w-[40px] items-center justify-center text-lg transition hover:scale-110"
      >
        <img src={Box} alt="box" />
      </div>
    </>
  );
};

export default Reward;
