const projects = [
  {
    title: 'Bear Watcher',
    screenshot: 'images/bearWatcher.png',
    description: 'This is an exercise designed to practice modules, JavaScript, and Bootstrap. It features a form where the user can enter a bear\'s name and image and see it displayed on the page. Then the user can observe the bear\'s behavior and track in real time its fishing attempts and successes, with the overall number of successes displayed as total number of fish caught.',
    technologiesUsed: 'HTML, Bootstrap, JavaScript, Modules',
    available: true,
    url: 'https://github.com/jeaninebeckle/bear-watcher', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle/bear-watcher',
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
    title: 'Tamagotchi',
    screenshot: 'images/tamagotchi.png',
    description: 'This page features four sections with buttons and various status levels for a virtual pet. When clicked, the buttons affect the status levels by a certain amount, with the values always staying between 0 and 100. The design is responsive.',
    technologiesUsed: 'HTML, SCSS, JavaScript, Modules',
    available: true,
    url: 'https://github.com/jeaninebeckle/tamagotchi', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle/tamagotchi',
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
