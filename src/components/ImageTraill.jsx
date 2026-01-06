// ImageTraill.jsx
import { useAnimate } from "framer-motion";
import { useRef } from "react";

const ImageTraill = ({
  children,
  images = [],
  enabled = true,
  renderImageBuffer = 70,
  rotationRange = 20,
}) => {
  const [scope, animate] = useAnimate();
  const mousePos = useRef({ x: 0, y: 0 });
  const lastRenderPos = useRef({ x: 0, y: 0 });
  const imgIndex = useRef(0);

  const handleMouseMove = (e) => {
    if (!enabled) return;

    mousePos.current = { x: e.clientX, y: e.clientY };
    const dist = Math.hypot(
      mousePos.current.x - lastRenderPos.current.x,
      mousePos.current.y - lastRenderPos.current.y
    );

    if (dist > renderImageBuffer) {
      lastRenderPos.current = mousePos.current;
      spawnImage();
    }
  };

  const spawnImage = () => {
    const idx = imgIndex.current % images.length;
    const el = document.querySelector(`[data-trail="${idx}"]`);
    if (!el) return;

    el.style.left = `${mousePos.current.x}px`;
    el.style.top = `${mousePos.current.y}px`;

    const rotation =
      (Math.random() * rotationRange) *
      (Math.random() > 0.5 ? 1 : -1);

    animate(
      el,
      {
        opacity: [0, 1],
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      },
      { duration: 0.25 }
    );

    animate(el, { opacity: [1, 0] }, { duration: 1.4, delay: 0.4 });

    imgIndex.current++;
  };

  return (
    <div
      ref={scope}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full overflow-visible"
    >
      {children}

      {images.map((img, i) => (
        <div
          key={i}
          data-trail={i}
          className="
            pointer-events-none absolute z-20
            w-[120px] h-[150px]
            rounded-xl opacity-0
            border border-yellow-500/80
            shadow-[0_0_25px_rgba(255,200,80,0.6)]
            backdrop-blur-sm
            overflow-hidden
          "
        >
          <img
            src={img}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTraill;
