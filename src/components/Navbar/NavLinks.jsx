import React from "react";

const NavLinks = ({name, id, href}) => {
  return (

      <a
        href={href}
        onClick={(e) => {
          let elem = document.getElementById(id);
          e.preventDefault();
          elem &&
            elem.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("footer", "/footer");
        }}
      >{name}</a>

  );
};

export default NavLinks;
