import { Mail, Send, Linkedin } from "lucide-react";

export default function LetsConnect() {
  return (
    <section id="contact" className="min-h-[50vh] flex flex-col items-center justify-center text-center gap-16 md:mb-0 mb-20">
      {/* Big heading */}
      <h2 className="text-4xl sm:text-5xl font-bold">
        Got this far? <br />
        <span className="text-[#617de0]">Let’s Connect!</span>
      </h2>

      {/* Links */}
      <div className="flex md:flex-row flex-col md:gap-10 gap-5 items-center text-2xl z-3" >
        <a
          href="https://t.me/artem_ivl"
          target="_blank"
          className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
        >
          <Send className="w-6 h-6" /> Telegram
        </a>
        <a
          href="mailto:artemivliev7@gmail.com"
          target="_blank"
          className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
        >
          <Mail className="w-6 h-6" /> Gmail
        </a>
        <a
          href="https://linkedin.com/in/artemii-ivliev"
          target="_blank"
          className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
        >
          <Linkedin className="w-6 h-6" /> LinkedIn
        </a>
      </div>
    </section>
  );
}