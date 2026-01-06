import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat."
  },
  {
    id: 2,
    name: "Michael Chen",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat."
  },
  {
    id: 3,
    name: "Emily Davis",
    profession: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat."
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="testimonial">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Testimonial
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Floating Images Left */}
          <div className="absolute left-0 top-0 bottom-0 w-1/4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-full"
            >
              {testimonials.map((t, i) => (
                <motion.img
                  key={`left-${t.id}`}
                  src={t.image}
                  alt={t.name}
                  className="absolute w-16 h-16 rounded-full border-2 border-purple-200 object-cover"
                  style={{
                    top: `${25 + i * 30}%`,
                    left: `${20 + i * 10}%`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                />
              ))}
            </motion.div>
          </div>

          {/* Main Testimonial */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4 md:px-20"
          >
            <div className="relative inline-block mb-8">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-24 h-24 rounded-full border-4 border-purple-200 object-cover mx-auto"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                <Quote className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            <p className="text-gray-600 text-lg md:text-xl italic mb-8">
              {testimonials[activeIndex].quote}
            </p>

            <div className="w-16 h-1 bg-purple-200 mx-auto mb-6" />

            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              {testimonials[activeIndex].name}
            </h4>
            <p className="text-purple-600">
              {testimonials[activeIndex].profession}
            </p>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-purple-600 w-6' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Images Right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-full"
            >
              {testimonials.map((t, i) => (
                <motion.img
                  key={`right-${t.id}`}
                  src={t.image}
                  alt={t.name}
                  className="absolute w-16 h-16 rounded-full border-2 border-purple-200 object-cover"
                  style={{
                    top: `${25 + i * 30}%`,
                    right: `${20 + i * 10}%`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;