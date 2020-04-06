import utils from '../../helpers/utils';
import projectData from '../../helpers/data/projectData';

const printProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((p) => {
        if (p.available) {
          domString += '<div class="card project-card" style="width: 20rem">';
          domString += `  <h5 class='card-header text-center'>${p.title}</h5>`;
          domString += `  <div class="img-container"><img src='${p.screenshot}' class='card-img-top' alt='project screenshot'></div>`;
          domString += '  <div class="card-body">';
          domString += `    <p class='card-text'>${p.description}</p>`;
          domString += `    <p class='card-text'>Technologies Used: <br> ${p.technologiesUsed}</p>`;
          domString += `    <a href='${p.githubUrl}' class='project-gh-btn'><i class="fab fa-github-square col-2"></i></a>`;
          domString += `    <a href='${p.deployedUrl}' class='project-gh-btn'><i class="fas fa-desktop col-2"></i></a>`;
          domString += '  </div>';
          domString += '</div>';
        }
      });
      utils.printToDom('projects-container', domString);
    });
};

export default { printProjectCards };
