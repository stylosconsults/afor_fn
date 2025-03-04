"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { GradientButton } from "../atoms/button";
import { Menus } from "@/app/data/menu";
import {
  Menu as MenuIcon,
  X,
  Heart,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Construction,
} from "lucide-react";
import Link from "next/link";
import { Menu } from "@/app/types/menu";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/app/lib/smoothScroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || "");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = pathname === "/";

  const handleMouseEnter = (menu: any) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menu: Menu, event: React.MouseEvent) => {
    if (menu.link) {
      return;
    }
    event.preventDefault();
    const targetId = menu.id || "";
    const targetSection = document.getElementById(targetId);

    if (isHome) {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection(targetId);
      }
    } else {
      window.location.href = `/#${targetId}`;
    }

    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  const isActive = (menu: Menu) => {
    if (menu.id) {
      return activeSection === menu.id;
    }
    return false;
  };

  const renderMenuLink = (menu: Menu) => {
    if (menu.link) {
      return (
        <Link
          href={`/${menu.link}`}
          className={`uppercase font-epilogue text-xs font-bold truncate transition-colors hover:text-primary-500`}
        >
          {menu.title}
        </Link>
      );
    }
    return (
      <a
        href={menu.id ? `#${menu.id}` : "#"}
        className={`uppercase font-epilogue text-xs font-bold truncate transition-colors ${
          isActive(menu) ? "text-primary-500" : "hover:text-primary-500"
        }`}
        onClick={(e) => handleMenuClick(menu, e)}
      >
        {menu.title}
      </a>
    );
  };

  return (
    <nav className="font-circular transition-all duration-300 font-normal text-base xl:text-medium text-black dark:text-white">
      {/* Top Contact Bar */}
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kicukiro+KK+515+Street+Kigali+Rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm cursor-pointer hover:text-gray-300"
              >
                Kicukiro KK 515 Street Kigali, Rwanda
              </a>
            </div>
            <div className="flex items-center space-x-2">
              {/* <div className="flex items-center space-x-2">
                <Construction className="h-6 w-6 text-yellow-600" />
                <span className="font-semibold text-yellow-700">
                  Website Under Construction
                </span>
              </div> */}
            </div>
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@afor.org"
                  className="text-sm hover:text-gray-300"
                >
                  info@afor.rw
                </a>
              </div>
              <div className="hidden md:block mx-4 text-gray-400">|</div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+1234567890"
                  className="text-sm hover:text-gray-300"
                >
                  +250 (788) 303-907
                </a>
              </div>
              <div className="hidden md:block mx-4 text-gray-400">|</div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://twitter.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/urugerorwibishoboka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4 relative">
          <div className="flex items-center">
            <Image
              width={180}
              height={180}
              src="/logos/logoAfor.png"
              alt="AFOR logo"
            />
          </div>

          <div
            className={`flex items-center gap-6 ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <div className="hidden lg:flex items-center space-x-6">
              {Menus.map((menu, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(menu.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  {renderMenuLink(menu)}
                </div>
              ))}
            </div>
            {/* Donate Button */}
            <GradientButton
              onClick={() => scrollToSection("contact")}
              icon={<Heart className="fill-red-500 text-red-500" />}
              className="cursor-pointer bg-secondary font-epilogue uppercase relative md:w-auto text-white"
            >
              Support Our Programs
            </GradientButton>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 animate-fade-in" />
              ) : (
                <MenuIcon className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 animate-slide-down">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {Menus.map((menu, index) => (
              <div key={index} className="relative">
                {renderMenuLink(menu)}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
