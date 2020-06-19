const projects = [
  {
    title: 'Tamagotchi ',
    screenshot: 'images/tamagotchi.png',
    description: 'This page features four sections with buttons and various status levels for a virtual pet. When clicked, the buttons affect the status levels by a certain amount, with the values always staying between 0 and 100. The design is responsive.',
    technologiesUsed: 'HTML, SCSS, JavaScript, Modules',
    available: true,
    url: 'https://github.com/jeaninebeckle/tamagotchi', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle/tamagotchi',
  },

  {
    title: 'Chatty App - Narnia Theme',
    screenshot: 'https://raw.githubusercontent.com/jeaninebeckle/chatty-delta-narnia/master/images/narnia.png',
    description: 'This was a four-person group project to build a chat app for multiple users to interact with. It enables users to select their name, add messages to the chat screen, delete a message, or clear all messages. It also features dark mode and large text options, as well as a section where the user can choose their own custom theme colors.',
    technologiesUsed: 'HTML, SCSS, JavaScript, JQuery, Modules',
    available: true,
    url: 'https://github.com/jeaninebeckle/chatty-delta-narnia', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle/chatty-delta-narnia',
  },

  {
    title: 'Cool Project 3',
    screenshot: 'https://bit.ly/2S6AACB',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/jeaninebeckle', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle',
  },

  {
    title: 'Cool Project 4',
    screenshot: 'https://bit.ly/2S6AACB',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/jeaninebeckle', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle',
  },

  {
    title: 'Cool Project 5',
    screenshot: 'https://bit.ly/2S6AACB',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/jeaninebeckle', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle',
  },

];

const getProjects = () => projects;

export default { getProjects };
