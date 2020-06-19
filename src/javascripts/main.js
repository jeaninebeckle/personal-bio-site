import 'bootstrap';
import '../styles/main.scss';
import projects from './helpers/projectsData';

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  const allProjects = projects.getProjects();
  let domString = '<header>PROJECTS</header>';
  allProjects.forEach((project) => {
    if (project.available === true) {
      domString += '<div class = "projectsPage">';
      domString += `<h2>${project.title}</h2>`;
      domString += `<img src="${project.screenshot}" alt = "screenshot">`;
      domString += `<h3>${project.description}</h3>`;
      domString += `<p>Technologies used: ${project.technologiesUsed}</p>`;
      domString += `<h4><a href="${project.url}">URL</a></h4>`;
      domString += `<h4><a href="${project.githubUrl}">GitHub URL</a></h4>`;
      domString += '</div>';
    }
  });

  printToDom('#projectsPage', domString);
};

const init = () => {
  createProjectCards(projects);
};

init();
