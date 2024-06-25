import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Show({ children, delay, className }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensure it triggers every time it comes into view
    threshold: 0.5,     // Adjust as needed, 0.5 means 50% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
