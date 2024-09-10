import React from "react";
import Link from "next/link";
import { link } from "fs";

const Links = [
  {
    href: "/counter",
    text: "counter",
  },
  {
    href: "/prisma",
    text: "prisma",
  },
  {
    href: "/todo-list",
    text: "todo list",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="bg-base-300">
        <div className="navbar max-w-6xl mx-auto flex-col sm:flex-row">
          <Link href="/" className="btn bg-teal-50">
            Home
          </Link>
          <ul className="menu md:ml-8 flex-col sm:flex-row">
            {Links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
