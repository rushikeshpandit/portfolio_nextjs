import {info} from '../info/Info';
import Image from 'next/image';

enum iconTypes {
  office = '/office.svg',
  calendar = '/calendar.svg',
  location = '/location.svg',
}

export default function Professional() {
  const renderIcons = (type: iconTypes) => {
    switch (type) {
      case iconTypes.calendar:
        return <Image className="h-6 w-6" src={iconTypes.calendar} alt="Self" width={16} height={16} />;
      case iconTypes.office:
        return <Image className="h-6 w-6" src={iconTypes.office} alt="Self" width={16} height={16} />;
      case iconTypes.location:
        return <Image className="h-8 w-6" src={iconTypes.location} alt="Self" width={16} height={16} />;
    }
  };

  const renderTimeline = (isWork: boolean = true) => (
    <div className="h-auto w-auto flex flex-wrap flex-col">
      {info.experience.map(data =>
        data.isWork === isWork && data.isWork ? (
          <div key={data.duration} className="w-auto h-18 m-12 flex-col flex justify-center">
            <div key={data.duration} className="  flex items-center justify-between ">
              <p className="text-[#666666] font-normal text-2xl">{data.designation}</p>
              <div className="bg-[#D7FFE0]  h-6 w-28 rounded-full justify-center flex">
                <p className="text-[#018C0F]">Full Time</p>
              </div>
            </div>
            <div key={data.duration} className="flex items-center justify-between">
              <div className="flex-row flex justify-between">
                <div className="h-6 w-80 items-center justify-between flex">
                  {renderIcons(iconTypes.office)}
                  <p className="text-[#A7A7A7] w-80 font-light text-xl">{data.company}</p>
                </div>
                <div className="h-6 w-30 items-center justify-between flex">
                  {renderIcons(iconTypes.location)}
                  <p className="text-[#A7A7A7] font-light text-xl">{data.location}</p>
                </div>
              </div>
              <div className="flex-row flex justify-between">
                {renderIcons(iconTypes.calendar)}
                <p className="text-[#A7A7A7] mx-4 font-light text-xl text-left">{data.duration}</p>
              </div>
            </div>
            {data.achievement.length > 0 && (
              <div key={data.duration} className=" mt-4 flex items-left justify-between flex-col">
                <p className="text-[#666666] font-normal text-base">Achivements</p>
                <ul className="pt-2">
                  {data.achievement.map(achieve => (
                    <li key={achieve} className="text-[#A7A7A7] mx-4 font-light text-xm text-left">
                      {'\u2022'} {achieve}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.responsibilities && (
              <div key={data.duration} className="mt-4 flex items-left justify-between flex-col">
                <p className="text-[#666666] font-normal text-base">Responsibilities</p>
                <ul className="pt-2">
                  {data.responsibilities.map(responsibility => (
                    <li key={responsibility} className="text-[#A7A7A7] mx-4 font-light text-xm text-left">
                      {'\u2022'} {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="border-b-2 mt-4"></div>
          </div>
        ) : data.isWork === isWork && !data.isWork ? (
          <div key={data.duration} className=" w-auto h-18 m-12 flex-col flex justify-center">
            <div key={data.duration} className="  flex items-center justify-between ">
              <p className="text-[#666666] font-normal text-2xl">{data.degree}</p>
              <div className="bg-[#D7FFE0]  h-6 w-28 rounded-full justify-center flex">
                <p className="text-[#018C0F]">Full Time</p>
              </div>
            </div>
            <div key={data.duration} className="  flex items-center justify-between">
              <div className="flex-row flex justify-between">
                <div className="h-6 w-80 items-center justify-between flex">
                  {renderIcons(iconTypes.office)}
                  <p className="text-[#A7A7A7] w-80 font-light text-xl">{data.college} </p>
                </div>
                <div className="h-6 w-30 items-center justify-between flex">
                  {renderIcons(iconTypes.location)}
                  <p className="text-[#A7A7A7] font-light text-xl">{data.university}</p>
                </div>
              </div>
              <div className="flex-row flex justify-between">
                {renderIcons(iconTypes.calendar)}
                <p className="text-[#A7A7A7] mx-4 font-light text-xl text-left">{data.duration}</p>
              </div>
            </div>
            {data.achievement.length > 0 && (
              <div key={data.duration} className=" mt-4 flex items-left justify-between flex-col">
                <p className="text-[#666666] font-normal text-base">Achivements</p>
                <ul className="pt-2">
                  {data.achievement.map(achieve => (
                    <li key={achieve} className="text-[#A7A7A7] mx-4 font-light text-xm text-left">
                      {'\u2022'} {achieve}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="border-b-2 mt-4"></div>
          </div>
        ) : (
          <></>
        ),
      )}
    </div>
  );

  return (
    <div id="professional">
      <div className="pt-16 h-auto container my-auto mx-auto bg-white items-center justify-evenly flex-col">
        <h2 className="text-[#42446E]  font-bold, text-5xl">Work Experience</h2>
        {renderTimeline()}
        <h2 className="text-[#42446E]  font-bold, text-5xl">Education</h2>
        {renderTimeline(false)}
      </div>
    </div>
  );
}
