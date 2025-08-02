'use client';
import {info} from '../info/Info';
import Image from 'next/image';

export default function TechStack() {
  return (
    <div id="techstack" className="h-screen w-screen justify-center items-center">
      <div className="pt-16 h-auto container my-auto mx-auto bg-white items-center justify-evenly">
        <h2 className="text-[#42446E]  font-bold, text-5xl">My Tech Stack</h2>
        <h3 className="text-[#666666]  font-bold, text-xl pt-5">Technologies I&apos;ve been working with recently</h3>
        {info.techStack.tools.map(({title, items}) => (
          <div key={title}>
            <h3 className="text-[#666666] font-bold text-xl pt-6">{title}</h3>
            <div className="flex flex-col w-full">
              <div className="flex flex-row">
                {items.map(({name, image}) => (
                  <div key={name} className="m-2 items-center justify-center flex flex-col align-middle">
                    <Image src={image} alt={name} width={25} height={25} className="h-12 w-12" />
                    <p className="text-[#666666] m-4">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
