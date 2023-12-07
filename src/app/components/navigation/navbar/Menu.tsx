import Image from 'next/image';
import Link from 'next/link';
import ScrollLink from '../../scrolllink/ScrollLink';
export const Menu = ({toggle}: {toggle: () => void}) => {
  return (
    <>
      <ul className="hidden md:flex gap-x-6 text-white ">
        <li>
          <ScrollLink href="#home">
            <p className="text-[#666666]">Home</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink href="#about">
            <p className="text-[#666666]">About</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink href="#techstack">
            <p className="text-[#666666]">Tech Stack</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink href="#professional">
            <p className="text-[#666666]">Professional Experience</p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink href="#contact">
            <p className="text-[#666666]">Contact</p>
          </ScrollLink>
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
    </>
  );
};
