import Link from 'next/link';
import {info} from '../info/Info';
import Image from 'next/image';

export default function Contact() {
  return (
    <div id="contact" className="h-screen w-screen justify-center items-center">
      <div className="pt-16 h-auto container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">Connect with me</h2>
        <div className="p-10 h-auto w-auto mx-auto flex flex-wrap items-center justify-center">
          {info.socials.map(({link, icon, label}) => (
            <div key={label} className="w-18 h-18 m-12 items-center justify-center">
              <Link href={link} prefetch={false}>
                <Image src={icon} alt={label} width={80} height={80} className="h-20 w-20" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
