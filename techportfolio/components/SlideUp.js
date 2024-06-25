import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SlideUp({ children, delay, className }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensure it triggers every time it comes into view
    threshold: 0.1,     // Adjust as needed, 0.1 means 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateY: 50 }, // Slide up from below
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.5,
        delay: delay,
        damping: 8,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
