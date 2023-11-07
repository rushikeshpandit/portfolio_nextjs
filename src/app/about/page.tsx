import {info} from '../info/Info';

export default function About() {
  return (
    <main>
      <div className="pt-10 h-screen container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">About Me</h2>
        <div className="pt-10 pb-10 w-auto mx-auto">
          <p className=" break-words text-[#666666] whitespace-pre-line text-xl">{info.bio}</p>
        </div>
      </div>
    </main>
  );
}
