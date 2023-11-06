import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen container mx-auto bg-white flex items-center justify-evenly flex-row">
        <div>
          <div className="rounded-full w-150 h-150  bg-gradient-to-r from-blue-400 to-indigo-600 md:hidden">
            <Image className="rounded-full w-150 h-150 p-2" src={'/self.png'} alt="Self" width={150} height={150} />
          </div>
          <p className="mx-20 text-black text-7xl font-bold">Hi 👋 , </p>
          <p className="mx-20 text-black text-7xl font-bold">My name is </p>
          <h1 className="mx-20 text-7xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 inline-block text-transparent bg-clip-text">
            Rushikesh Pandit
          </h1>
          <p className="mx-20 text-black text-7xl font-bold">I build things for </p>
          <p className="mx-20 text-black text-7xl font-bold">web and mobile</p>
        </div>
        <div className="hidden md:flex rounded-full w-250 h-250  bg-gradient-to-r from-blue-400 to-indigo-600">
          <Image className="rounded-full w-250 h-250 p-2" src={'/self.png'} alt="Self" width={250} height={250} />
        </div>
      </div>
    </main>
  );
}
