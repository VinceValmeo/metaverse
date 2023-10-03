import styles from "../styles";

const StartSteps = ({ text, number }) => (
  <div className="flex items-center gap-3 flex-row">
    <div
      className={`glassmorphism h-[50px] w-[50px] rounded-[15px] flex ${styles.flexCenter}`}
    >
      <p className="text-white font-bold text-[20px]"> {number + 1}</p>
    </div>
    <p className="text-white flex-1">{text}</p>
  </div>
);

export default StartSteps;
