"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      alt="world"
    />
    <div className="flex items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] text-white">
        <h2 className="font-bold text-[30px]">{title}</h2>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow up"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
