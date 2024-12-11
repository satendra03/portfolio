import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useMobile from "../hooks/UseMobile";

function Header() {
  const location = useLocation();
  const isMobile = useMobile();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const linksData = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10
  return (
    <div
      className={`header  md:border-none w-screen h-16 md:h-16 fixed top-0 left-0
      flex items-center justify-between p-1 md:p-2 transition-transform duration-300 z-50 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10`}
    >
      <Link to={"/"} className="logo flex items-center justify-center flex-col gap-1">
        <img src="/SATENDRA.svg" className={`${isMobile ? 'w-32' : 'w-36'}`} alt="Satendra" />
        <img src="/PARTETI.svg" className={`${isMobile ? 'w-32' : 'w-36'}`} alt="Satendra" />
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-center cursor-pointer">
          <Menu size={40} onClick={() => setMenuOpen(true)} />
      </div>

      {/* Mobile Links */}
      <div
        className={`mobile-links fixed top-0 left-0 w-screen overflow-hidden h-screen bg-white z-50 flex flex-col items-center justify-center space-y-6
        transition-all duration-500 ease-in-out transform ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="cross-btn fixed top-2 right-2 cursor-pointer">
        <X size={40} onClick={() => setMenuOpen(false)} />
        </div>
        {linksData.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`link text-2xl px-3 border-b-2 border-black/50 text-black hover:text-black/50 ${link.path == location.pathname && "text-red-400"}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Links */}
      <div className="links h-full hidden md:flex justify-between items-center gap-4">
        {linksData.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`link text-black hover:text-black/50 ${link.path == location.pathname && "text-red-400"}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;