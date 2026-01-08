import React from 'react'
import locationIcon from '../assets/locationIcon.png'
import contactIcon from '../assets/contactIcon.png'
// import charitify from '../assets/charitify.png'
import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si'

const Contacts = () => {
  const openGmail = (message) => {
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=hindiabuzar@gmail.com" +
      "&su=" + encodeURIComponent("New Inquiry from Portfolio") +
      "&body=" + encodeURIComponent(message);

    window.open(url, "_blank");
  };

  const [message, setMessage] = React.useState('')
  return (
    <section id='contacts' className="relative w-full bg-gradient-to-br from-blue-500 via-blue-100 to-white px-3 lg:px-12 md:pt-32 py-24">
      {/* <img className='absolute inset-0 w-full h-full object-cover' src={charitify} alt="" /> */}
      <div className='md:max-w-5xl mx-auto bg-transparent border border-[3px] backdrop-blur-sm border-white md:p-10'>
        <div className="">
          <div className="md:rounded-3xl border border-gray-100 shadow-xl p-4 md:p-12">
            <div className="text-center">
              <p className="text-sm text-gray-500 inline-block bg-gray-50 px-3 py-1 rounded-full border border-gray-100">Abuzar Hindi</p>
              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Have an Idea? Let's Connect!
              </h2>
              <div className="mt-8 flex justify-center">
                <div className="w-full max-w-xl">
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">

                    {/* Input */}
                    <input
                      type="text"
                      placeholder="Something in your mind?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 border-b border-blue-900 bg-transparent py-3 outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500"
                    />


                    {/* Button */}
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
                      onClick={() => openGmail(message)}

                    >
                      Let’s Do it
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500">Yes, it's free..</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-100 p-3 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Address</h3>
                <div className="flex items-start gap-4">
                  <div className="flex-1 text-sm text-gray-700">
                    <p className="font-medium text-gray-800">India</p>
                    <p>Ayodhya</p>
                    <p>Faizabad</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-3 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 text-sm text-gray-700 space-y-2">
                    <div className="flex items-center gap-3">
                      <SiGmail className="text-red-500 w-5 h-5" />
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=hindiabuzar@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        hindiabuzar@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <SiLinkedin className="text-blue-600 w-5 h-5" />
                      <a href="https://www.linkedin.com/in/abuzar-sheikh-975658254/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
                    </div>

                    <div className="flex items-center gap-3">
                      <SiWhatsapp className="text-green-500 w-5 h-5" />
                      <a href="https://wa.me/917525899794" target="_blank" rel="noopener noreferrer" className="hover:underline">+91 75258 99794</a>
                    </div>

                    <div className="flex items-center gap-3">
                      <SiGithub className="text-gray-800 w-5 h-5" />
                      <a href="https://github.com/Abuzar-Sheikh-20" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
