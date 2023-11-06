import Image from 'next/image';
import Link from 'next/link';

export const Menu = ({toggle}: {toggle: () => void}) => {
  return (
    <>
      <ul className="hidden md:flex gap-x-6 text-white ">
        <li>
          <Link href="/home">
            <p className="text-black">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="text-black">About</p>
          </Link>
        </li>
        <li>
          <Link href="/techstack">
            <p className="text-black">Tech Stack</p>
          </Link>
        </li>
        <li>
          <Link href="/professional">
            <p className="text-black">Professional Experience</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
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
    </>
  );
};
