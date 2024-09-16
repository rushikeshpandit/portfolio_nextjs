import {info} from '../info/Info';
import Image from 'next/image';

export default function TechStack() {
  return (
    <div id="techstack">
      <div className="pt-16 h-auto container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">My Tech Stack</h2>
        <h3 className="text-[#666666]  font-bold, text-xl pt-10 pb-10">
          Technologies I&apos;ve been working with recently
        </h3>
        <div className="p-10 h-auto w-auto mx-auto flex flex-wrap">
          {info.techStack.map(({name, image}) => (
            <div key={name} className="w-[200px] h-[160px] flex-col flex items-center justify-center">
              <Image src={image} alt={name} width={80} height={80} className="h-20 w-20"/>
              <p className="text-[#666666] m-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
