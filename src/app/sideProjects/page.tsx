import {info} from '../info/Info';
import Link from 'next/link';

export default function SideProjects() {
  const renderProject = () => (
    <div className="h-auto w-auto flex flex-wrap flex-col">
      {info.sideProjects.map((project, index) => (
        <div key={project.name} className="my-4 flex items-left justify-between flex-col">
          <p className="text-[#666666] my-4 font-normal text-2xl">
            {index + 1 + '. '}
            {project.name}
          </p>

          <p className="text-[#666666] my-4 font-normal text-2xl">Description</p>
          <p className="text-[#A7A7A7] my-4 mx-4 font-light text-xl text-left">{project.description}</p>

          <Link href={project.link} rel="noopener noreferrer" target="_blank">
            {project.isWebsite ? (
              <p className="text-[#666666] my-4 font-normal text-2xl">Visit Website</p>
            ) : (
              <p className="text-[#666666] my-4 font-normal text-2xl">Download Link</p>
            )}
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div id="sideprojects">
      <div className="pt-16 h-auto container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">Side Projects</h2>
        {renderProject()}
      </div>
    </div>
  );
}
