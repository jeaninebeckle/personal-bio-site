const projects = [
  {
    title: "Cool Project 1", 
    screenshot: "https://bit.ly/2S6AACB", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/jeaninebeckle", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jeaninebeckle"
  },

  {
    title: "Cool Project 2", 
    screenshot: "https://bit.ly/2S6AACB", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/jeaninebeckle", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jeaninebeckle"
  },

  {
    title: "Cool Project 3", 
    screenshot: "https://bit.ly/2S6AACB", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/jeaninebeckle", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jeaninebeckle"
  },

  {
    title: "Cool Project 4", 
    screenshot: "https://bit.ly/2S6AACB", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/jeaninebeckle", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jeaninebeckle"
  }
]


const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = () => {
  let domString = '';
  for (i=0; i<projects.length; i++) {
    if (projects[i].available === true) {
    domString += '<div class = "projectsPage">';
    domString += `<h2>${projects[i].title}</h2>`;
    domString += `<img src="${projects[i].screenshot}" alt = "screenshot">`;
    domString += `<h3>${projects[i].description}</h3>`;
    domString += `<p>${projects[i].technologiesUsed}</p>`;
    domString += `<h4><a href="${projects[i].url}">URL</a></h4>`;
    domString += `<h4><a href="${projects[i].githubUrl}">GitHub URL</a></h4>`;
    domString += '</div>'
    }
  }
  printToDom('#projectsPage', domString);

  }
  
 


const init = () => {
  createProjectCards(projects);
}

init ();
