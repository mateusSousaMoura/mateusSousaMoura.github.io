import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  scale?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = false,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 50, x: 0 };
      case "down":
        return { y: -50, x: 0 };
      case "left":
        return { x: 50, y: 0 };
      case "right":
        return { x: -50, y: 0 };
      default:
        return { y: 50, x: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...initialPos,
        ...(scale && { scale: 0.9 }),
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              ...(scale && { scale: 1 }),
            }
          : {
              opacity: 0,
              ...initialPos,
              ...(scale && { scale: 0.9 }),
            }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      whileHover={
        scale
          ? {
              scale: 1.05,
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
