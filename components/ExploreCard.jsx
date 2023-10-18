'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex lg:justify-start w-full bg-[rgba(0,0,0,0.5)] rounded-[24px] md:h-[170px] lg:h-[300px]  flex-row md:flex-col gap-2">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-full glassmorphism mb-[16px]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div className="flex-col">
          <p className="font-normal text-[12px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2 className="mt-[5px] font-semibold sm:text-[32px] text-[20px] text-white">
            {title}
          </h2>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
