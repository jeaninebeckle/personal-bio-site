import 'bootstrap';
import '../styles/main.scss';

const projects = [
  {
    title: 'Cool Project 1',
    screenshot: 'https://bit.ly/2S6AACB',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/jeaninebeckle', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle',
  },

  {
    title: 'Cool Project 2',
    screenshot: 'https://bit.ly/2S6AACB',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/jeaninebeckle', // replace with personal site hosting link in the future
    githubUrl: 'https://github.com/jeaninebeckle',
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
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = '';

  projects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class = "projectsPage"></div>';
      domString += `
      <h2>${project.title}</h2>;
      <img src="${project.screenshot}" alt = "screenshot">;
      <h3>${project.description}</h3>;
      <p>${project.technologiesUsed}</p>;
      <h4><a href="${project.url}">URL</a></h4>;
      <h4><a href="${project.githubUrl}">GitHub URL</a></h4>`;
      domString += '</div>';
    }
  });

  printToDom('#projectsPage', domString);
};

const init = () => {
  createProjectCards(projects);
};

init();
