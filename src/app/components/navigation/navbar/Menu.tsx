import Image from 'next/image';
import Link from 'next/link';
import {info} from '@/app/info/Info';
export const Menu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scroll({top: element.offsetTop - 20, behavior: 'smooth'});
  };

  return (
    <>
      <ul className="hidden md:flex gap-x-6 text-white ">
        {info.nav_menu.map((item, index) => (
          <li key={index}>
            <button onClick={() => scrollToSection(item.link)}>
              <p className="text-[#666666]">{item.title}</p>
            </button>
          </li>
        ))}

        <li key={'github'}>
          <Link href="https://github.com/rushikeshpandit" target="_blank" rel="noopener noreferrer" prefetch={false}>
            <Image src="/logo-github.svg" alt="github" width={'25'} height={'25'} className="relative" />
          </Link>
        </li>
        <li key={'linkedin'}>
          <Link
            href="https://www.linkedin.com/in/rushikesh-pandit-646834100/"
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}>
            <Image src="/logo-linkedin.svg" alt="linkedin" width={'25'} height={'25'} className="relative" />
          </Link>
        </li>
      </ul>
    </>
  );
};
