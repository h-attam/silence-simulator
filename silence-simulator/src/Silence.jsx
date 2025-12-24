import { motion } from "framer-motion";

const messages = [
  "Sessizlik başladı.",
  "Sesler azaldı.",
  "Kimse konuşmuyor.",
  "...",
];

const stageStyles = [
  "text-gray-300 text-xl",
  "text-gray-400 text-lg",
  "text-gray-500 text-base",
  "text-gray-600 text-sm",
];

export default function Silence({ stage }) {
  return (
    <motion.p
      key={stage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`${stageStyles[stage]} tracking-wide`}
    >
      {messages[stage]}
    </motion.p>
  );
}
