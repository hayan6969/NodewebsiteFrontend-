"use client"
import { useState } from "react"

const links = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/',
    text: 'Team',
  },
  {
    link: '/',
    text: 'Takenomics',
  },
  {
    link: '/',
    text: 'Nodes',
  },
];

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden fixed  w-full md:flex justify-around items-center primary_bg_color text-white p-5 z-[30]">
        <div className="flex gap-10">
          {links.map((element,index) => (
            <p key={index} className="  hover:text-red-500">
              {element.text}
            </p>
          ))}
        </div>
        <div className="flex gap-5">
          <p className="">Whitepaper</p>
          <p className="">Contact</p>
          <p className="">Contact</p>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="md:hidden bg-red-500 p-5  top-5 fixed left-5 z-50 rounded-3xl text-white font-bold uppercase "
      >
        {openSidebar ? 'Close' : 'Menu'}
      </button>

      <div
        className={`${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-[20] fixed top-0 left-0 h-full w-3/4 primary_bg_color text-white p-6 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-6 mt-20">
          {links.map((element,index) => (
            <p key={index} className="uppercase font-bold hover:text-red-500">
              {element.text}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-6 mt-10">
          <p className="uppercase font-bold hover:text-red-500">Whitepaper</p>
          <p className="uppercase font-bold hover:text-red-500">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
