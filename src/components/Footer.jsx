import React from "react";

const Footer = () => {
  return (
    <footer className="h-[10vh] text-neutral-400 flex md:mb-0 mb-3 md:px-[4vw]">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:justify-between justify-end md:gap-0 gap-2 items-center">
        <p className="text-sm z-3">
          artemivliev7@gmail.com
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Artem Ivliev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;