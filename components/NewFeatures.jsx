import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex gap-3 flex-col">
    <div
      className={`glassmorphism h-[50px] w-[50px] rounded-[15px] flex ${styles.flexCenter} items-start`}
    >
      <img src={imgUrl} />
    </div>
    <p className="text-white flex-1 font-semibold text-[24px]">{title}</p>
    <p className="text-[#B0B0B0] flex-1 max-w-[400px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
