import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  // eslint-disable-next-line no-undef
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      console.error('working?');
      const theseProjects = response.data;
      const projectsArray = [];
      console.error(theseProjects);
      Object.keys(theseProjects).forEach((projectId) => {
        theseProjects[projectId].id = projectId;
        projectsArray.push(theseProjects[projectId]);
      });
      resolve(projectsArray);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
