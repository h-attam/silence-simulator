import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Silence from "./Silence";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(0);

  // Zaman akışı
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Sessizlik evreleri
  useEffect(() => {
    if (seconds < 30) setStage(0);
    else if (seconds < 90) setStage(1);
    else if (seconds < 180) setStage(2);
    else setStage(3);
  }, [seconds]);

  const messages = [
    "Sessizlik başladı.",
    "Sesler azaldı.",
    "Kimse konuşmuyor.",
    "...",
  ];

  const textStyles = [
    "text-gray-300 text-xl opacity-100",
    "text-gray-400 text-lg opacity-80",
    "text-gray-500 text-base opacity-60",
    "text-gray-700 text-sm opacity-20",
  ];

  const backgroundColors = [
    "bg-neutral-900",
    "bg-neutral-800",
    "bg-neutral-900",
    "bg-black",
  ];

  return (
    <div
      className={`h-screen w-screen flex cursor-none items-center justify-center transition-colors duration-[3000ms] ${backgroundColors[stage]}`}
    >
      <motion.p
        key={stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: stage === 0 ? 2 : stage === 1 ? 4 : stage === 2 ? 6 : 10,
        }}
        style={{ filter: stage === 3 ? "blur(2px)" : "none" }}
        className={`${textStyles[stage]} tracking-wide`}
      >
        {messages[stage]}
      </motion.p>
    </div>
  );
}

export default App;
