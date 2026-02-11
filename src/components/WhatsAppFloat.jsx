import whatsapp_logo from '../assets/whatsapp_logo.png';

const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/917525899794"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999]
                 bg-white hover:bg-green-500 hover:border-green-500
                 text-white border border-2 rounded-full
                 shadow-lg transition-transform
                 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img className="w-14" src={whatsapp_logo} alt="" />
      {/* <SiWhatsapp className="w-6 h-6" /> */}
    </a>
  );
};

export default WhatsAppFloating;
