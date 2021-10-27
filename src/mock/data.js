import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Elyse Chambers | Software Engineer',
  lang: 'en',
  description: 'Software Engineer portfolio website of Elyse Chambers',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Elyse',
  subtitle: 'and I am a Software Engineer',
  cta: 'Welcome to my world',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'My name is Elyse and I am a 21-year old Software Engineer based in Philadelphia. I am a recent college graduate with an Associates in Engineering. I have frontend and backend capabilities and use both to make various web applications. I started dabbling in coding when I was 13 through modifying custom Tumblr themes. Since then, the world of programming has left its mark. Some of the programs I currently use include React, React Hooks, Bootstrap, Node/Express.js, and Heroku to name a few.',
  paragraphTwo:
    "When I'm not building websites, I spend my time pursuing other hobbies such as writing, playing guitar, painting, and learning through online classes of various subjects. I am very much into improving myself and discovering new and various ways to level up my work.",
  paragraphThree:
    "I'm currently learning SASS principles, AWS, as well as finishing my certificate training in Web Development.",
  resume:
    'https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:47f6f534-c338-4427-8b83-346af1b2c586', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'TinDog',
    info: 'A fun and quirky website based off of Tinder. This website was my first time using Bootstrap and its column classes, which I found to be an easy and efficient way of creating a website interface, and was thus implemented in later projects. Deployed through GitHub.',
    info2: '',
    url: 'https://elyseeloo.github.io/TinDog-Website/',
    repo: 'https://github.com/Elyseeloo/TinDog-Website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Loop Studios',
    info: 'This website was created through a design challenge from Frontend Mentor. Used HTML and CSS. I also used Bootstrap for the layout and grid sections. Deployed with Netlifly.',
    info2: '',
    url: 'https://blissful-golick-c57856.netlify.app/',
    repo: 'https://github.com/Elyseeloo/Loop-Studios', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Weather App',
    info: 'One of my very first projects created using Node.js and Express. Styled with pure CSS and a video embedded background. This project was a rewarding opportunity to learn about the wonders of API implementation. Deployed with Heroku.',
    info2:
      'Type in any city name into the search bar and get an immediate, current weather report. Make sure you spell the city name properly!',
    url: 'https://protected-waters-73120.herokuapp.com/',
    repo: 'https://github.com/Elyseeloo/Weather-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Keeper App',
    info: 'A cute replica of the Google Keep web application. Built with React and React Hooks. This was a final project for the React unit in my certificate course. This project is what made me fall in love with React Hooks and Components, and especially the JSX language. Majority of CSS done by instructor, but a few personal tweaks were added by me. Icons and Zoom animations done through Material UI.',
    info2: '',
    url: 'https://elyseeloo.github.io/Keeper-App/',
    repo: 'https://github.com/Elyseeloo/Keeper-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: 'ToDo List App',
    info: 'An organization app made with React. CSS is not mine, but the JS and JSX files are purely created by me. Type in an item into the text box, click the butotn to add it to the list. Click an item once to cross it out, and twice to delete it from the list.',
    info2: '',
    url: 'https://elyseeloo.github.io/ToDo-List/',
    repo: 'https://github.com/Elyseeloo/ToDo-List', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: 'Newsletter Sign Up',
    info: 'A Node.js app that uses the MailChimp API to configure a personal mailing list. A willing subscriber types in their information and they are automatically added to your MailChimp account in a mailing list of your choosing. Styles with HTML, CSS, and a Bootstrap layout. Deployed through Heroku.',
    info2: '',
    url: 'https://sleepy-scrubland-40374.herokuapp.com/',
    repo: 'https://github.com/Elyseeloo/Newsletter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project7.png',
    title: 'Preview Card',
    info: 'Another design-based project from Frontend Mentor. Styled with pure CSS and semantic HTML and fully responsive.',
    info2: '',
    url: 'https://elyseeloo.github.io/stats-preview-card-component-main/',
    repo: 'https://github.com/Elyseeloo/stats-preview-card-component-main', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project8.png',
    title: 'Simon Game',
    info: "A challenging mini game created with JavaScript. A project done through my certification course. Try to memorize the pattern and see what's the hightest level you can reach! Layout and design are done by instructor, JavaScript done by me. Deployed with Netlifly.",
    info2: '',
    url: 'https://sleepy-tesla-f50e8e.netlify.app/',
    repo: 'https://github.com/Elyseeloo/Simon-Game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Chat",
  email: 'epicelyse@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/elyseeloo_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/elyse-chambers-698310164/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Elyseeloo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
