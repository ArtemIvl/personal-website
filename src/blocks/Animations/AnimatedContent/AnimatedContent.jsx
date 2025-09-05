import { useRef, useEffect, useState } from "react";

const SimpleScrollAnimation = ({
  children,
  distance = 50,
  direction = "y",
  duration = 1,
  delay = 0,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const transform =
    direction === "y"
      ? `translateY(${visible ? 0 : distance}px)`
      : `translateX(${visible ? 0 : distance}px)`;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transition: `transform ${duration}s ease ${delay}s, opacity ${duration}s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default SimpleScrollAnimation;