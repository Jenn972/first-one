'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
        AGENTS
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}>On Telegram</h1>
          {/* <div className={styles.heroAIText} /> */}
          <h1 className={styles.heroHeading}></h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[280px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="https://app.tgaigent.com">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="/rocket.svg"
              alt="rocket"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rounded-full bg-green-400 p-5 transition-all duration-300 ease-in-out cursor-pointer"
              initial={{ scale: 1, color: 'green' }}
              animate={{ scale: 1.05 }}
              whileHover={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                scale: 1.2,
                color: 'green-600',
                boxShadow: '0 0 10px rgba(0,255,0,0.5)'
              }}
          
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
