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
  nav_menu: [
    {
      link:"home",
      title:"Home"
    },
    {
      link:"about",
      title:"About"
    },
    {
      link:"techstack",
      title:"Tech Stack"
    },
    {
      link:"professional",
      title:"Professional Experience"
    },
    {
      link:"sideprojects",
      title:"Side Projects"
    },
    {
      link:"contact",
      title:"Contact"
    }
  ],
  socials: [
    {
      link: "https://github.com/rushikeshpandit",
      icon: "/github.svg",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/rushikesh-pandit-646834100/",
      icon: "/linkedin.svg",
      label: "linkedin",
    },
    {
      link: "tel:+917588945789",
      icon: "/mobile.svg",
      label: "mobile",
    },
    {
      link: "mailto:rushikesh.d.pandit@gmail.com",
      icon: "/email.svg",
      label: "email",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Welcome to my corner of the digital world! I'm a Computer Application post-graduate with a passion for programming. Over the past 9+ years, I've dedicated myself to the dynamic realm of Mobile Application development, crafting unique user experiences.\n\nMy forte lies in crafting intricate user interfaces using Swift, SwiftUI, and React Native.I also possess a foundational understanding of Android, Flutter, Spring Boot, Elixir, and the Phoenix framework, expanding my technological toolkit.\n\nIn addition to my development skills, I'm well-versed in the world of Continuous Integration and Continuous Deployment, leveraging tools like CircleCI, Bitrise, and Fastlane to streamline the development process.\n\nMy track record speaks for itself: I've had the privilege of working on over 10 iOS apps and 5 React Native applications, spanning diverse domains such as Banking, Social Media, and Messaging. I'm well- acquainted with the entire application lifecycle, from conception to deployment.\n\nBut what truly sets me apart is my insatiable appetite for learning.Technology evolves rapidly, and I relish every opportunity to embrace new innovations and stay ahead of the curve.\n\nIf you're seeking a dedicated and adaptable mobile app developer who's ready to tackle your next challenge, look no further.Consider bringing my passion, experience, and expertise to your team.Let's create something extraordinary together",
  techStack: [
    {
      name: "Android Studio",
      image: "/android-studio.svg"
    },
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
  experience: [
    {
      company: "FIS Global",
      designation: "Senior Software Engineer",
      location: "Bangalore",
      duration: "Sep-2021 - Present",
      achievement: [],
      isWork: true,
      responsibilities: ["Spearheaded the development of 4+ React Native banking applications, resulting in a 30% increase in user engagement and a 25% reduction in transaction processing time.",
        "Implemented advanced state management techniques using Redux Toolkit, improving app performance by 40% and reducing bug reports by 50%.",
        "Orchestrated the migration of legacy iOS apps to React Native, reducing codebase complexity by 35% and enabling faster feature rollouts across platforms.",
        "Mentored a team of 5 junior developers, fostering a culture of code quality and best practices, resulting in a 20% increase in team productivity.",
        "Optimized CI/CD pipelines using CircleCI and Fastlane, reducing build times by 45% and enabling daily releases with 99.9% uptime."
      ]
    },
    {
      company: "Include Technology",
      designation: "iOS Engineer",
      location: "Pune",
      duration: "Mar 2021 - Sep 2021",
      achievement: [],
      isWork: true,
      responsibilities: ["Engineered critical features for a high-traffic e-commerce app using React Native, leading to a 28% increase in conversion rates and a 15% boost in customer retention.",
        "Implemented comprehensive unit and integration testing strategies, increasing code coverage from 60% to 95% and reducing post-release defects by 40%.",
        "Collaborated with UX designers to create an intuitive, accessibility-compliant interface, improving the app's App Store rating from 3.8 to 4.6 stars.",
        "Introduced performance monitoring tools, identifying and resolving bottlenecks that improved app load times by 35%."
      ]
    },
    {
      company: "MJB Technology",
      designation: "Software Engineer",
      location: "Pune",
      duration: "Feb 2020 - Feb 2021",
      achievement:
        ["Received the \"Magnificent Multi-tasker\" award for successfully managing multiple high-priority projects simultaneously, consistently delivering ahead of schedule."],
      isWork: true,
      responsibilities: ["Led the development of a cross-platform inventory management system using React Native, resulting in a 50% reduction in stockout incidents for clients.",
        "Architected and implemented a real-time synchronization feature using WebSockets, enabling seamless offline functionality and reducing data conflicts by 80%.",
        "Optimized app bundle size, achieving a 40% reduction and significantly improving download and update rates.",
        
      ]
    },
    {
      company: "Destek Infosolutions",
      designation: "Associate Manager - iOS Development",
      location: "Pune",
      duration: "May 2019 - Jan 2020",
      achievement: [],
      isWork: true,
      responsibilities: [" Directed the development of a flagship iOS app for a major retail client, resulting in a 200% increase in mobile sales within the first quarter of launch.",
        "Implemented advanced Swift techniques such as protocol-oriented programming and functional reactive programming, reducing codebase complexity by 30%.",
        "Mentored a team of 3 iOS developers, introducing code reviews and pair programming practices that improved code quality and reduced bug density by 45%.",
        "Established a modular architecture for the app, enabling parallel development and reducing time-to-market for new features by 35%."
      ]
    },
    {
      company: "Include Technology",
      designation: "iOS Engineer",
      location: "Pune",
      duration: "Mar 2016 - Apr 2019",
      achievement: [],
      isWork: true,
      responsibilities: ["Developed and launched 5+ iOS applications using Swift, including a professional messaging app that garnered over 500,000 downloads in its first year.",
        "Implemented complex UI designs using Auto Layout and custom animations, improving user engagement metrics by 40%.",
        "Integrated RESTful APIs and implemented efficient caching strategies, reducing server load by 30% and improving app responsiveness.",
        "Contributed to the development of a proprietary IoT framework, enabling seamless communication between iOS devices and smart home gadgets."
      ]
    },
    {
      company: "Mindstix Software Pvt. Ltd.",
      designation: "Accelerated Intern",
      location: "Pune",
      duration: "Sep 2015 - Feb 2016",
      achievement: [],
      isWork: true,
      responsibilities: ["Contributed to the development of a health and fitness tracking app, implementing Core Data for efficient local storage and syncing.",
        "Assisted in the implementation of HealthKit integration, allowing users to sync data with Apple Health and increasing user retention by 25%.",
        "Developed and maintained unit tests for critical app components, achieving 85% code coverage and reducing regression issues by 30%.",
        "Participated in daily stand-ups and sprint planning, gaining valuable experience in Agile methodologies and team collaboration."
      ]
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
  sideProjects: [
    {
      name: "Redux Toolkit Saga Boilerplate",
      link: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-boilerplate",
      description: "The \"Redux Toolkit Saga Boilerplate\" is a VS Code extension designed to simplify the process of creating React Native projects with Redux Toolkit and Saga implementation. It streamlines the initial setup by providing developers with a basic boilerplate code structure. This means developers can start working on their React Native applications without the hassle of manually configuring the underlying Redux Toolkit and Saga setup.",
      isWebsite: false
    },
    {
      name: "Redux Toolkit Saga TypeScript Boilerplate",
      link: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-typescript-boilerplate",
      description: "The \"Redux Toolkit Saga Typescript Boilerplate\" is a Visual Studio Code extension designed to streamline the process of creating React Native projects with Redux Toolkit implementation. It aims to simplify and accelerate the initial setup for developers by providing a comprehensive boilerplate codebase. With this extension, developers can kickstart their projects without the need to manually configure the underlying Redux and Saga implementations.",
      isWebsite: false
    },
    {
      name: "iOS app privacy generator",
      link: "https://ios-app-privacy.vercel.app",
      description: "The \"iOS app privacy generator\" is a tool which lets you to generate a \"PrivacyInfo.xcprivacy\" file seamlessly without which apple will reject your application.",
      isWebsite: true
    }
  ],
};
