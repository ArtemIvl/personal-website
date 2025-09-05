import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import SimpleScrollAnimation from "../../blocks/Animations/AnimatedContent/AnimatedContent";

export default function ProjectShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "./assets/bear_vozik_shop.jpeg",
    "./assets/menu_vozik_shop.png",
    "./assets/order_vozik_shop.png",
    "./assets/profile_vozik_shop.png",
  ];

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <section className="h-auto w-full mx-0 px-[4vw] md:px-[10vw] md:mb-0 mb-[10vh] md:mt-[10vh] block" id="vozik-shop">
      <SimpleScrollAnimation distance={100} direction="y" duration={1}>
      <div className="w-full h-full grid rounded-2xl gap-16 grid-cols-1 md:grid-cols-[3fr_2fr] grid-rows-[auto_auto_auto_auto] md:grid-rows-[auto_4fr_1fr]">
        
        {/* Project name + icon */}
        <div className="md:col-span-2 flex items-center gap-5 text-2xl font-bold">
          <img src="./assets/logo_vozik_shop.jpeg"  alt="Project Icon" className="w-12 h-12 rounded-full" />
          Vozik Shop — Telegram Bot
        </div>

        {/* Images (with popup modal) */}
        <div
          className="relative rounded-2xl z-3 overflow-hidden cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          <img src={images[0]} alt="Project screenshot" className="w-full h-full object-cover" />
            {/* Small clickable arrow indicator */}
          <div className="absolute bottom-3 right-3 bg-black/60 p-3 rounded-xl z-10 transform transition-transform duration-300 hover:scale-105">
            View more
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl">
          <p className="leading-relaxed">
            Vozik Shop is a commercial Telegram bot that lets users buy Telegram stars and Premium at discounted rates, with no KYC verification, for themselves or as gifts.<br /><br />
            Users can pay via TON cryptocurrency or a wide range of cryptos using Heleket integration. The bot features a 2-step referral system to earn commissions, a gift system for active referrers, and multilingual support (Ukrainian, English, Russian).<br /><br />
            An intuitive admin panel allows full management of users, withdrawals, and messages. Integrated with TON blockchain, Heleket API, and Fragment API, Vozik Shop has 3,000+ active users worldwide and generates passive revenue through transactions.
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-3 items-start">
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Python</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Aiogram</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">PostgreSQL</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Fragment API</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">TON Blockchain</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Heleket API</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 items-start z-3">
          <a
            href="https://github.com/ArtemIvl/vozik_shop"
            target="_blank"
            className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" /> GitHub Repo
          </a>
          <a
            href="https://t.me/VozikStarsBot"
            target="_blank"
            className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" /> Check it out!
          </a>
        </div>
      </div>
      </SimpleScrollAnimation>

      {/* Modal for image gallery */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center"
            onClick={() => setIsOpen(false)}>
          <div className="relative w-[80%] h-[80%] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}>
            <img src={images[currentImage]} alt="Project gallery" className="max-h-full max-w-full rounded-lg" />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 md:-right-30 -right-8 p-2 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Prev / Next Arrows */}
            <button onClick={prevImage} className="absolute md:-left-12 -left-8 bg-white/30 hover:bg-white/50 duration-300 p-2 rounded-full cursor-pointer">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextImage} className="absolute md:-right-12 -right-8 bg-white/30 hover:bg-white/50 duration-300 p-2 rounded-full cursor-pointer">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Dialog>
    </section>
  );
}