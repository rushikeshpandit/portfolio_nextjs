// import self from "/self.png";
// import bmi_1 from "/BMI_Calculator_1.png";
// import bmi_2 from "/BMI_Calculator_2.png";
// import expenses_tracker from "/expenses_tracker.png";
// import weather_one from "/weather_one.png";
// import weather_two from "/weather_two.png";
// import weather_three from "/weather_three.png";
// import redux_toolkit_demo from "/redux_toolkit_demo.png";
// import vs_code_extension from "/vs_code_extension.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255,207,103)", "rgb(211,50,29)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Rushikesh",
  lastName: "Pandit",
  initials: "RP", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🌎",
      text: "based in the INDIA",
    },
    {
      emoji: "💼",
      text: "Senior Software Engineer at FIS",
    },
    {
      emoji: "📧",
      text: "rushikesh.d.pandit@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/rushikeshpandit",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/rushikesh-pandit-646834100/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Welcome to my corner of the digital world! I'm a Computer Application post-graduate with a passion for programming. Over the past 8+ years, I've dedicated myself to the dynamic realm of Mobile Application development, crafting unique user experiences.\n\nMy forte lies in crafting intricate user interfaces using Swift, SwiftUI, and React Native.I also possess a foundational understanding of Android, Flutter, Spring Boot, Elixir, and the Phoenix framework, expanding my technological toolkit.\n\nIn addition to my development skills, I'm well-versed in the world of Continuous Integration and Continuous Deployment, leveraging tools like CircleCI, Bitrise, and Fastlane to streamline the development process.\n\nMy track record speaks for itself: I've had the privilege of working on over 10 iOS apps and 5 React Native applications, spanning diverse domains such as Banking, Social Media, and Messaging. I'm well- acquainted with the entire application lifecycle, from conception to deployment.\n\nBut what truly sets me apart is my insatiable appetite for learning.Technology evolves rapidly, and I relish every opportunity to embrace new innovations and stay ahead of the curve.\n\nIf you're seeking a dedicated and adaptable mobile app developer who's ready to tackle your next challenge, look no further.Consider bringing my passion, experience, and expertise to your team.Let's create something extraordinary together",
  techStack: [
    {
      name: "CircleCI",
      image: "/circleci.svg"
    },
    {
      name: "Elixir",
      image: "/elixir.svg"
    },
    {
      name: "Fastlane",
      image: "/fastlane.svg"
    },
    {
      name: "Firebase",
      image: "/firebase.svg"
    },
    {
      name: "Flutter",
      image: "/flutter.svg"
    },
    {
      name: "GIT",
      image: "/git.svg"
    },
    {
      name: "JavaScript",
      image: "/javascript.svg"
    },
    {
      name: "Next.js",
      image: "/nextjs.svg"
    },
    {
      name: "Node.js",
      image: "/nodejs.svg"
    },
    {
      name: "Phoenix Framework",
      image: "/phoenix.svg"
    },
    {
      name: "React",
      image: "/react.svg"
    },
    {
      name: "Spring",
      image: "/spring.svg"
    },
    {
      name: "Swift",
      image: "/swift.svg"
    },
    {
      name: "TypeScript",
      image: "/typescript.svg"
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind.svg"
    },
    {
      name: "VS Code",
      image: "/vs-code.svg"
    },
    {
      name: "Xcode",
      image: "/xcode.svg"
    },
  ],
  
  // portfolio: [
  //   // This is where your portfolio projects will be detailed

  //   {
  //     title: "VS Code extension",
  //     source: "https://github.com/rushikeshpandit/vs-code-extn-rn-template",
  //     images: [vs_code_extension],
  //     info: "This extension helps user to generate a boilerplate code in plain Javascript for redux-toolkit with saga integration",
  //     live: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-boilerplate"
  //   },
  //   {
  //     title: "VS Code extension",
  //     source: "https://github.com/rushikeshpandit/vs-code-extn-rn-ts-template",
  //     images: [vs_code_extension],
  //     info: "This extension helps user to generate a boilerplate code in Typescript for redux-toolkit with saga integration",
  //     live: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-typescript-boilerplate"
  //   },
  //   {
  //     title: "Redux tool kit demo",
  //     source: "https://github.com/rushikeshpandit/redux_toolkit_demo",
  //     images: [redux_toolkit_demo],
  //     info: "Todo list application with redux toolkit implementation.",
  //   },
  //   {
  //     title: "Expenses Tracker",
  //     source: "https://github.com/rushikeshpandit/expense_tracker",
  //     images: [expenses_tracker],
  //     info: "This is Spring Boot application which is used to track expenses of user.",
  //   },
  //   {
  //     title: "Weather App",
  //     source: "https://github.com/rushikeshpandit/weather_app",
  //     images: [weather_one, weather_two, weather_three],
  //     info: "This is Flutter application which can fetch the current location and display the weather accordingly.",
  //   },
  //   {
  //     title: "BMI Calculator",
  //     source: "https://github.com/rushikeshpandit/BMI_calculator",
  //     images: [bmi_1, bmi_2],
  //     info: "This simple application allows user to calculate BMI once user inputs his weight and height.\nThis app has been written in Flutter language.",
  //   },
  // ],
  experience: [
    {
      company: "FIS Global",
      designation: "Senior Software Engineer",
      location: "Bangalore",
      duration: "Sept-2021 - Present",
      achievement: "",
      isWork: true,
      responsibilities: ["Effectively coded software changes and alterations based on specific design specifications.",
        "Implemented and updated application modules under the direction of Senior Software Developers.",
        "Working on 4+ Banking domain applications written in React Native.",
        "Mainly focused on refactoring code base and implementation of new functionalities along with integration of  REST API's and redux-toolkit."]
    },
    {
      company: "Include Technology",
      designation: "iOS Engineer",
      location: "Pune",
      duration: "March 2021 - Sept 2021",
      achievement: "",
      isWork: true,
      responsibilities: ["Served as a friendly, hardworking, and punctual employee.",
        "Worked well independently and on a team to solve problems.",
        "Worked on SwiftUI application which was based on audio streaming as well another app which was targeting health care domain.",
        "Also part of team which was responsible for refactor and publish application for this health care domain application."]
    },
    {
      company: "MJB Technology",
      designation: "Software Engineer",
      location: "Pune",
      duration: "Feb 2020 - Feb 2021",
      achievement:
        "Got an Magnificient Multitasker award for contributing to multiple projects",
      isWork: true,
      responsibilities: ["Implemented and updated application modules under the direction of Senior Software Developers / CTO.",
        "Effectively coded software changes and alterations based on specific design specifications.",
        "Introduced and implemented a different type of innovative software.",
        "Handled team of 5 peoples which includes 1 Business Analyst, 1 QA and 1 web developer and 1 back end developer.",
        "Was responsible for mobile app written in React Native. My roles and responsibilities includes handling client interaction, requirement gathering, sprint planning and execution and deployment."]
    },
    {
      company: "Destek Infololutions",
      designation: "Associate Manager - iOS Development",
      location: "Pune",
      duration: "May 2019 - Jan 2020",
      achievement: "",
      isWork: true,
      responsibilities: ["Provided optimal assistance to the General Manager and handled a variety of tasks.",
        "Worked on 4+ apps written in Swift.",
        "Was responsible to handle client interaction, requirement gathering, sprint planning and execution.",
        "Was responsible mentoring and grooming 2 interns with computer fundamentals and React Native.",
        "Was involved in all phases of software development from planning till deployment."]
    },
    {
      company: "Include Technology",
      designation: "iOS Engineer",
      location: "Pune",
      duration: "March 2016 - April 2019",
      achievement: "",
      isWork: true,
      responsibilities: ["Served as a friendly, hardworking, and punctual employee.",
        "Worked well independently and on a team to solve problems.",
        "Organized and prioritized work to complete assignments in a timely, efficient manner.",
        "Worked on more than 8+ applications which includes messaging apps, todo list apps, e-commerce apps, social networking apps, all of them was written in Swift.",
        "Was involved in all phases of software development from planning till deployment."]
    },
    {
      company: "Mindstix Software Pvt. Ltd.",
      designation: "Accelerated Intern",
      location: "Pune",
      duration: "Sept 2015 - Feb 2016",
      achievement: "",
      isWork: true,
      responsibilities: ["Served as a dedicated and supportive Intern in a fast-paced environment.",
        "Was part of iPad team which was working for one of the e-commerce giant  in US and Canada.",
        "Was responsible for bug fixes and implementing new features in the application."]
    },
    {
      degree: "Master in Computer Application",
      college: "P.V.G.'s College of Science",
      university: "Pune University",
      duration: "2012 - 2015",
      achievement:
        ["Elected as Class Representative for consecutive 3 years", "worked as General Secretary for an year."],
      isWork: false,
    },
    {
      degree: "Bachelor of Computer Science ",
      college: "P.V.G.'s College of Science",
      university: "Pune University",
      duration: "2009 - 2012",
      achievement: ["Elected as Class Representative for consecutive 3 years"],
      isWork: false,
    },
  ],
};
