import React, { useEffect } from "react";
import NavLinks from "./NavLinks";
import '../../style/Nav.css'

const Nav = () => {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const navItem = [
    {href: '/', name: 'Home', id: 'home', },
    {href: '/', name: 'About', id: 'about', },
    {href: '/', name: 'How', id: 'how', },
  ]

  return (
    <nav className="my-nav">
      <div className="logo-container">
          <img src="/assets/new-love-logo.png" alt="" />
      </div>

      { navItem.map(item => (
        <NavLinks
        key={item.id}
          name={item.name}
          href={item.href}
          id={item.id}
        />

      ))
      }
    </nav>
  );
};

export default Nav;
