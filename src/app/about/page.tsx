import {info} from '../info/Info';

export default function About() {
  return (
    <div id="about" className="h-screen w-screen justify-center items-center">
      <div className="pt-16 h-auto container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">About Me</h2>
        <div className="pt-10 pb-10 w-auto mx-auto">
          <p className="break-words text-[#666666] whitespace-pre-line text-xl">{info.bio}</p>
        </div>
      </div>
    </div>
  );
}
