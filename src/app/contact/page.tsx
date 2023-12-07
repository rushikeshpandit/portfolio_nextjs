import Link from 'next/link';
import {info} from '../info/Info';
import Image from 'next/image';

export default function Contact() {
  return (
    <div id="contact">
      <div className="pt-16 h-auto container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">Connect with me</h2>
        <div className="p-10 h-auto w-auto mx-auto flex flex-wrap items-center justify-center">
          {info.socials.map(({link, icon, label}) => (
            <div key={label} className="w-18 h-18 m-12 items-center justify-center">
              <Link href={link}>
                <Image src={icon} alt={label} width={80} height={80} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
