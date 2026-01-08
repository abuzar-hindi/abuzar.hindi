//             {/* <li className='text-xl hover:scale-110 transition-all duration-300 '>How I work .......................... IV</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Case Study ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Pricing ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Testimonials ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>FAQ's ............... V</li>
//             <li className='text-xl hover:scale-110 transition-all duration-300 '>Why you should trust me ............... V</li> */}


import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ onClose }) => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose(); // ✅ close menu after click
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999] backdrop-blur-lg flex justify-center items-center"
        onClick={onClose}
      >
        <motion.ul
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: -20 }}
          onClick={(e) => e.stopPropagation()}
          className="text-white"
        >
          {[
            ["Home", "hero", "I"],
            ["About", "about", "II"],
            ["Services", "services", "III"],
            ["Projects", "projects", "IV"],
            ["Tech Stack", "techstack", "V"],
            ["Contact", "contacts", "VI"],
          ].map(([label, id, num]) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex items-center justify-between text-xl transition-all duration-300 hover:translate-x-1 px-3 py-1 w-full hover:bg-white hover:text-4xl md:hover:text-6xl cursor-pointer font-semibold hover:text-blue-800"
            >
              <span className="px-3 py-1 w-full">{label}</span>
              <span className="ml-20">{num}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
