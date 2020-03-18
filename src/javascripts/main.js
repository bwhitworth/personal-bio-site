import 'bootstrap';
import '../../styles/main.scss';


const projects = [
  {
    title: 'Cool Project',
    screenshot: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    // Towards the latter part of the class, you will learn how to host your projects and
    // people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project',
    screenshot: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    // Towards the latter part of the class, you will learn how to host your projects and
    // people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const printToDom = (elementId, stringToPrint) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projects.length; i + 1) {
    if (projects[i].available === true) {
      domString += '<div class="card" style="width: 20rem">';
      domString += `  <h5 class='card-header'>${projects[i].title}</h5>`;
      domString += `  <img src='${projects[i].screenshot}' class='card-img-top' alt='project screenshot'>`;
      domString += '  <div class="card-body">';
      domString += `    <p class='card-text'>${projects[i].description}</p>`;
      domString += `    <p class='card-text'>Technologies Used: ${projects[i].technologiesUsed}</p>`;
      domString += `    <a href='${projects[i].githubUrl}' class='btn btn-info'>GitHub Link</a>`;
      domString += '  </div>';
      domString += '</div>';
    }
  }

  printToDom('projectsPage', domString);
};

const init = () => {
  createProjectCards();
};

init();
