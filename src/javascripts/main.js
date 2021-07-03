import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import projectsData from './helpers/projectsData';
import utils from './helpers/utils';

import 'bootstrap';
import '../styles/main.scss';

const createProjectCards = () => {
  projectsData.getProjects()
    .then((projects) => {
      let domString = '<header class="projectsHeader">Projects</header>';
      projects.forEach((project) => {
        if (project.available === true) {
          domString += '<div class = "projectsPage cardRow row">';
          domString += '<div class="col-md-6">';
          domString += `<img src="${project.screenshot}" alt = "screenshot">`;
          domString += '</div>';
          domString += '<div class="col-md-6">';
          domString += `<h2>${project.title}</h2>`;
          domString += `<h3>${project.description}</h3>`;
          domString += `<p>Technologies used: ${project.technologiesUsed}</p>`;
          domString += `<h4><a href="${project.url}">- View live -</a></h4>`;
          domString += `<h4><a href="${project.githubUrl}">- View on GitHub -</a></h4>`;
          domString += '</div></div>';
        }
      });

      utils.printToDom('.projectsSection', domString);
    })
    .catch((err) => console.error('it broke', err));
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  createProjectCards();
};

init();
