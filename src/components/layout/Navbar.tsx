"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" onClick={closeMenu}>
            MFH
          </Link>

          {/* Desktop Links */}
          <div className="navbar__links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar__menu-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — outside <nav> to escape transform stacking context */}
      <div
        className={`navbar__mobile-menu${isMenuOpen ? " navbar__mobile-menu--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
