import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import snapixlab from '../assets/snapixlab.png'
import charitify from '../assets/charitify.png'
import ecommerce from '../assets/ecommerce.png'

const Projects = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // simple reveal on mount
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'SnapixLab',
      description:
        'Refreshed a website layout to improve clarity and make it easy for visitors to find information on any device.',
      image: snapixlab,
      type: 'Featured Project',
      link: 'https://www.snapixlab.com/'
    },
    {
      id: 2,
      title: 'Charitify',
      description:
        'Built a simple portal to manage content and customer messages with clear, easy-to-use screens.',
      image: charitify,
      type: 'Frontend · UI Focus',
      link: 'https://charitify-three.vercel.app/'
    },
    {
      id: 3,
      title: 'Forever',
      description:
        'Created a focused product page that highlights features and helps visitors understand the value quickly.',
      image: ecommerce,
      type: 'Full Stack · E-commerce',
      link: 'https://e-commerce-front-end-rust.vercel.app/'
    },
  ]

  return (
    <section id="projects" className="bg-[#F3EFE7] w-full px-6 sm:px-8 lg:px-12 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-4xl md:text-5xl lg:text-8xl  font-bold text-red-500 tracking-tight">
            Projects
          </span>
          <p
            className={`mt-1 text-black font-semibold max-w-2xl mx-auto transition-all duration-500`}
          >
            A few recent projects showing practical solutions and clear results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`group bg-[#F7F3EB] border border-[2px] border-[#E6E1D8] rounded-xl p-6 sm:p-8 shadow-sm hover:bg-green-100 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex items-center justify-center mb-5 overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-contain rounded-md transition-transform duration-300 group-hover:scale-110 h-48"
                  />
                ) : (
                  <div className="w-28 h-28 bg-gray-50 rounded-md" />
                )}
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-2">{p.title}</h3>
              <p className="text-sm text-black leading-relaxed">{p.description}</p>
              <div className='flex justify-between items-center'>
                <div className='text-sm text-gray-500 rounded-full mt-1'>{p.type}</div>
                <Link to={p.link} target="_blank" rel="noopener noreferrer">
                  <button className='text-sm bg-blue-900 text-white px-3 py-1 rounded-full hover:translate-x-1 transition-all duration-300 mt-1'>Live Demo</button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
