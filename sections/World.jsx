"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex flex-col justify-center items-center`}
    >
      <TypingText title="|People on the World" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center max-w-4xl"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-[1/2] h-full object-cover" />

        <motion.div
          variants={zoomIn(0.1, 0.5)}
          className="absolute top-1 right-[5%] "
        >
          <img src="people-card-2.png" alt="people" className="w-full h-full" />
        </motion.div>

        <motion.div
          variants={zoomIn(1.5, 0.5)}
          className="absolute bottom-20 right-20"
        >
          <img src="people-1.png" alt="people" className="w-full h-full" />
        </motion.div>

        <motion.div
          variants={zoomIn(0.7, 0.5)}
          className="absolute top-10 left-20"
        >
          <img src="people-2.png" alt="people" className="w-full h-full" />
        </motion.div>

        <motion.div
          variants={zoomIn(1, 0.3)}
          className="absolute top-1/4 left-[5%] "
        >
          <img src="people-card-1.png" alt="people" className="w-full h-full" />
        </motion.div>

        <motion.div
          variants={zoomIn(0.1, 1)}
          className="absolute top-1/2 left-[40%] "
        >
          <img src="people-3.png" alt="people" className="w-full h-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
