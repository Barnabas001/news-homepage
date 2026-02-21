import { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-menu-close.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <img src={logo} alt="logo" />

      <nav className="desktopNav">
        <a href="home">Home</a>
        <a href="new">New</a>
        <a href="popular">Popular</a>
        <a href="trending">Trending</a>
        <a href="categories">Categories</a>
      </nav>

      <img
        src={menu}
        alt="menu"
        className="menuIcon"
        onClick={() => setOpen(true)}
      />

      <div
        className={`overlay ${open ? "showOverlay" : ""}`}
        onClick={() => setOpen(false)}
      />

      <div className={`mobileMenu ${open ? "openMenu" : ""}`}>
        <button className="closeBtn" onClick={() => setOpen(false)}>
          <img src={iconClose} alt="close menu" />
        </button>
        <nav className="mobileNav">
          <a href="home">Home</a>
          <a href="new">New</a>
          <a href="popular">Popular</a>
          <a href="trending">Trending</a>
          <a href="categories">Categories</a>
        </nav>
      </div>
    </header>
  );
}
