"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText, InsightCard } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex flex-col justify-center items-center`}
    >
      <TypingText title="|Insight" />
      <TitleText
        title={<>Insights About the Metaverse</>}
        textStyles="text-center"
      />

      <div className="mt-10">
        {insights.map((item, index) => (
          <div className="mb-10">
            <InsightCard imgUrl={item.imgUrl} {...item} index={index} />
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
