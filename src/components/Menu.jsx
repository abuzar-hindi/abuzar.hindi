import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  return (
    <div className=''>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[80px] flex justify-center items-center text-white p-5 rounded-lg shadow-lg inset-0 backdrop-blur-lg z-[999]"
          onClick={(e) => e.stopPropagation()}>
          <ul>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-xl transition-all duration-300 hover:translate-x-1">
                <span>About</span>
                <span className="opacity-60 ml-20">I</span>
              </li>

              <li className="flex items-center justify-between text-xl transition-all duration-300 hover:translate-x-1">
                <span>Services</span>
                <span className="opacity-60 ml-20">II</span>
              </li>

              <li className="flex items-center justify-between text-xl transition-all duration-300 hover:translate-x-1">
                <span>Projects</span>
                <span className="opacity-60 ml-20">III</span>
              </li>

              <li className="flex items-center justify-between text-xl transition-all duration-300 hover:translate-x-1">
                <span>Tech Stack</span>
                <span className="opacity-60 ml-20">IV</span>
              </li>

              <li className="flex items-center justify-between text-xl transition-all duration-300 hover:translate-x-1">
                <span>Contact</span>
                <span className="opacity-60 ml-20">V</span>
              </li>
            </ul>


            {/* <li className='text-xl hover:scale-110 transition-all duration-300 '>How I work .......................... IV</li>
            <li className='text-xl hover:scale-110 transition-all duration-300 '>Case Study ............... V</li>
            <li className='text-xl hover:scale-110 transition-all duration-300 '>Pricing ............... V</li>
            <li className='text-xl hover:scale-110 transition-all duration-300 '>FAQ's ............... V</li>
            <li className='text-xl hover:scale-110 transition-all duration-300 '>Why you should trust me ............... V</li> */}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Menu
