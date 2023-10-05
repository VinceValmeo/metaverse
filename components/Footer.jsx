"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <footer className={`${styles.paddings}`}>
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative text-white`}
    >
      <div className="footer-gradient" />

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.3)}
        className="mt-[8px]"
      >
        <div className="flex justify-between flex-col md:flex-row items-center md:items-start gap-10">
          <h1 className="font-extrabold text-[50px]">Enter the Metaverse </h1>
          <button className="bg-[#25618B] rounded-full px-10 py-5 flex items-center justify-center gap-3 hover:bg-[#26465c]">
            <img src="/headset.svg" />
            <p>Enter Metaverse</p>
          </button>
        </div>
      </motion.div>
      <div className=" mt-10 mb-[50px] h-[2px] bg-white opacity-10" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <h1 className="font-bold text-[24px] cursor-pointer">
          <a href="#hero">METAVERSE </a>
        </h1>
        <p className="text-[#c0c0c0]">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </motion.footer>
  </footer>
);

export default Footer;
