import Image from 'next/image';

export default function Home() {
  const renderText = () => {
    return (
      <div>
        <p className="mx-20 text-[#42446E] text-7xl font-bold">Hi 👋 , </p>
        <p className="mx-20 text-[#42446E] text-7xl font-bold">My name is </p>
        <h1 className="mx-20 text-7xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 inline-block text-transparent bg-clip-text">
          Rushikesh Pandit
        </h1>
        <p className="mx-20 text-[#42446E] text-7xl font-bold">I build things for </p>
        <p className="mx-20 text-[#42446E] text-7xl font-bold">web and mobile</p>
      </div>
    );
  };

  const renderImage = (shouldShowLarge: boolean = false) => {
    let defaultDivClass = 'md:hidden rounded-full w-80 h-80  bg-gradient-to-r from-blue-400 to-indigo-600';
    let defaultImageClass = 'md:hidden rounded-full w-80 h-80 p-2';
    if (shouldShowLarge) {
      defaultDivClass = 'hidden md:flex rounded-full w-80 h-80  bg-gradient-to-r from-blue-400 to-indigo-600';
      defaultImageClass = 'hidden md:flex rounded-full w-80 h-80 p-2';
    }
    return (
      <div className={defaultDivClass}>
        <Image className={defaultImageClass} src={'/self.png'} alt="Self" width={300} height={300} />
      </div>
    );
  };

  return (
    <div id="home" className="h-screen w-screen justify-center items-center">
      <div className="md:hidden h-screen w-screen container my-auto mx-auto bg-white items-center justify-evenly flex  flex-col">
        {renderImage() /** This is for smaller screen */}
        {renderText()}
      </div>
      <div className="hidden md:flex h-screen w-screen container mx-auto bg-white items-center justify-evenly flex-row">
        {renderText() /** This is for bigger screen */}
        {renderImage(true)}
      </div>
    </div>
  );
}
