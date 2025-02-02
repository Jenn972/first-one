'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Extension marketplace" textStyles="text-center" />
      <TitleText title="Deploy custom Agents" textStyles="text-center" />

      <div className="mt-[150px] flex flex-col gap-[30px]">
        {insights.map((insight, i) => (
          <InsightCard
            key={`Insight-${i + 1}`}
            {...insight}
            index={i + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
