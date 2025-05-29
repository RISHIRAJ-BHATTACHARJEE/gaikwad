import { DotIcon } from 'lucide-react';
import React, { useRef, useEffect, useCallback } from 'react';

// Define props interface for type safety
interface MarqueeProps {
  texts: string[]; // Array of texts to display
  speed?: number; // Optional prop with default value
}

const Marquee: React.FC<MarqueeProps> = ({ texts, speed = 50 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const animationIdRef = useRef<number | null>(null);

  // Memoize the animation logic to prevent unnecessary re-renders
  const animate = useCallback(
    (startTime: number | null, containerWidth: number, textWidth: number) => {
      let animationStartTime = startTime;

      const step = (timestamp: number) => {
        if (!animationStartTime) animationStartTime = timestamp;
        const progress = timestamp - animationStartTime;
        const distance = (progress / 1000) * speed;

        if (textRef.current) {
          textRef.current.style.transform = `translateX(${
            -distance % (textWidth + containerWidth)
          }px)`;
        }

        animationIdRef.current = requestAnimationFrame(step);
      };

      return step;
    },
    [speed]
  );

  useEffect(() => {
    // Ensure refs are available
    if (!containerRef.current || !textRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const textWidth = textRef.current.offsetWidth;

    // Prevent animation if text is smaller than container
    if (textWidth <= containerWidth) {
      if (textRef.current) {
        textRef.current.style.transform = 'translateX(0)';
      }
      return;
    }

    // Start animation
    const startAnimation = animate(null, containerWidth, textWidth);
    animationIdRef.current = requestAnimationFrame(startAnimation);

    // Cleanup animation on unmount or when dependencies change
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [texts, speed, animate]);

  // Duplicate texts for seamless looping
  const repeatedTexts = [...texts, ...texts];

  return (
    <div
      ref={containerRef}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      className="w-full bg-gradient-to-l from-red-600 via-red-400 to-red-600 text-zinc-800 md:py-2"
    >
      <div
        ref={textRef}
        style={{
          display: 'inline-flex', // Use inline-flex instead of inline-block for better flex behavior
          paddingLeft: '100%',
        }}
        className="font-semibold flex flex-row items-center"
      >
        {repeatedTexts.map((text, index) => (
          <React.Fragment key={index}>
            <span className="mx-2 italic tracking-wider text-2xl text-white font-light">{text}</span>
            {index < repeatedTexts.length - 1 && <DotIcon className="mx-2 w-12 h-12" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;