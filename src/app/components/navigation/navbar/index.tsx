import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';

const Navbar = ({toggle}: {toggle: () => void}) => {
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="#000" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/about" onClick={toggle}>
                  <p className="text-black">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggle}>
                  <p className="text-black">About</p>
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={toggle}>
                  <p className="text-black">Tech Stack</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts" onClick={toggle}>
                  <p className="text-black">Professional Experience</p>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggle}>
                  <p className="text-black">Contact</p>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/rushikeshpandit" target="_blank" rel="noopener noreferrer">
                  <Image src="/logo-github.svg" alt="github" width={'25'} height={'25'} className="relative" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/rushikesh-pandit-646834100/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Image src="/logo-linkedin.svg" alt="linkedin" width={'25'} height={'25'} className="relative" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
