import React, { useEffect } from 'react';

const Sparks = () => {
  useEffect(() => {
    const handleClick = (event) => {
      for (let i = 0; i < 25; i++) {
        const spark = document.createElement('i');
        spark.style.position = 'fixed'; // FIXED kiya hai yahan
        spark.style.pointerEvents = 'none';
        spark.style.borderRadius = '50%';
        spark.style.top = `${event.clientY}px`;
        spark.style.left = `${event.clientX}px`;

        // Random size
        const randomSize = Math.random() * 30 + 2;
        spark.style.width = `${randomSize}px`;
        spark.style.height = `${randomSize}px`;

        // Z-Index
        spark.style.zIndex = 9999;

        // Random Color
        const colors = ['#ffffff', '#FFD700', '#00ffff', '#ff5cff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        spark.style.background = randomColor;

        // Random Movement
        const randomX = (Math.random() - 0.5) * window.innerWidth / 1.5;
        const randomY = (Math.random() - 0.5) * window.innerHeight / 1.5;
        spark.style.setProperty('--randomX', randomX + 'px');
        spark.style.setProperty('--randomY', randomY + 'px');

        // Animation
        spark.style.animation = `animate 1s ease-out forwards`;
        document.body.appendChild(spark);

        setTimeout(() => {
          spark.remove();
        }, 1000);
      }
    };

    document.body.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <style>{`
      @keyframes animate {
        0% {
          opacity: 1;
          transform: translate(0, 0);
        }
        100% {
          opacity: 0;
          transform: translate(var(--randomX), var(--randomY));
        }
      }
    `}</style>
  );
};

export default Sparks;