'use client';

import Image from 'next/image';
import React, {useState, useCallback, useRef, useEffect} from 'react';
import {useTransition, animated} from '@react-spring/web';
import styles from './styles.module.css';

export default function Home() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [item, set] = useState<string>('Rushikesh Pandit');
  const transitions = useTransition(item, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
    },
    enter: [
      {opacity: 1, height: 80, innerHeight: 80},
      {transform: 'perspective(600px) rotateX(180deg)'},
      {transform: 'perspective(600px) rotateX(0deg)'},
    ],
    leave: [{innerHeight: 80}, {opacity: 0, height: 80}],
  });
  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    ref.current.push(setTimeout(() => set('Rushikesh Pandit'), 2000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  const renderText = () => {
    return (
      <div>
        <p className="mx-20 text-[#42446E] text-7xl font-bold">Hi 👋 , </p>
        <p className="mx-20 mb-5 text-[#42446E] text-7xl font-bold">My name is </p>
        {transitions(({innerHeight, ...rest}, item) => (
          <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{overflow: 'hidden', height: innerHeight}}>
              <h1 className="mx-20 text-7xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 inline-block text-transparent bg-clip-text">
                {item}
              </h1>
            </animated.div>
          </animated.div>
        ))}
        <p className="mx-20 mt-5 text-[#42446E] text-7xl font-bold">I build things for </p>
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
