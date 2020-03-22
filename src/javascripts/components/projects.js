import utils from '../helpers/utils';
import projectData from '../helpers/data/projectData';

const printProjectCards = () => {
  let domString = '';
  const projects = projectData.getProjects();
  projects.forEach((item) => {
    if (item.available) {
      domString += '<div class="card" style="width: 20rem">';
      domString += `  <h5 class='card-header'>${item.title}</h5>`;
      domString += `  <img src='${item.screenshot}' class='card-img-top' alt='project screenshot'>`;
      domString += '  <div class="card-body">';
      domString += `    <p class='card-text'>${item.description}</p>`;
      domString += `    <p class='card-text'>Technologies Used: <br> ${item.technologiesUsed}</p>`;
      domString += `    <a href='${item.githubUrl}' class='btn btn-info'>GitHub Link</a>`;
      domString += '  </div>';
      domString += '</div>';
    }
  });
  utils.printToDom('projects-container', domString);
};

export default { printProjectCards };
