import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import SimpleScrollAnimation from "../../blocks/Animations/AnimatedContent/AnimatedContent";

export default function ProjectShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "./src/assets/cubes_fast_stars.jpeg",
    "./src/assets/games_fast_stars.jpeg",
    "./src/assets/menu_fast_stars.png",
    "./src/assets/minigames_fast_stars.png",
    "./src/assets/referrals_fast_stars.png",
  ];

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <section className="h-auto w-full mx-0 px-[4vw] md:px-[10vw] block md:mt-[10vh] md:mb-0 mb-[10vh]" id="fast-stars">
      <SimpleScrollAnimation distance={100} direction="y" duration={1}>
      <div className="w-full h-full grid rounded-2xl gap-16 grid-cols-1 md:grid-cols-[3fr_2fr] grid-rows-[auto_auto_auto_auto] md:grid-rows-[auto_4fr_1fr]">
        
        {/* Project name + icon */}
        <div className="md:col-span-2 flex items-center gap-5 text-2xl font-bold">
          <img src="./src/assets/logo_fast_stars.jpeg"  alt="Project Icon" className="w-12 h-12 rounded-full" />
          Fast Stars — Telegram Bot
        </div>

        {/* Images (with popup modal) */}
        <div
          className="relative rounded-2xl z-[10] overflow-hidden cursor-pointer flex items-center justify-center"
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
            Fast Stars is a gamified Telegram bot where users can earn, play, and win with virtual stars. Stars are earned through daily bonuses, promo codes, referrals, and completing tasks like following channels, writing comments, or playing minigames.<br /><br />
            Users can join giveaways, deposit TON cryptocurrency to convert into stars, and withdraw either in Telegram stars or real money via TON. A VIP subscription unlocks 2x daily bonus, task notifications, and priority withdrawals.<br /><br />
            An intuitive admin panel allows full management of users, tasks, games, giveaways, and rewards — all without touching code. Fast Stars has 20,000+ active users worldwide who earn real money and help other Telegram projects to grow.
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-3 items-start">
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Python</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">Aiogram</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">PostgreSQL</span>
            <span className="text-sm bg-[#617de0] px-3 py-1 rounded">TON Blockchain</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 items-start z-3">
          <a
            href="https://github.com/ArtemIvl/fast-stars"
            target="_blank"
            className="flex items-center gap-2 hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" /> GitHub Repo
          </a>
          <a
            href="https://t.me/STARS_FAST_bot"
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