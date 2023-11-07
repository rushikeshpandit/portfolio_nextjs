import {info} from '../info/Info';
import Image from 'next/image';

export default function TechStack() {
  return (
    <main>
      <div className="pt-10 h-screen container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">My Tech Stack</h2>
        <h3 className="text-[#666666]  font-bold, text-xl pt-10 pb-10">Technologies I've been working with recently</h3>
        <div className="p-10 h-auto w-auto mx-auto flex flex-wrap">
          {info.techStack.map(({name, image}) => (
            <div key={name} className="w-18 h-18 m-12 flex-col flex items-center justify-center">
              <Image src={image} alt={name} width={80} height={80} />
              <p className="text-[#666666] mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
