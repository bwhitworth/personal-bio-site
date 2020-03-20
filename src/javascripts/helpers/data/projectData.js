const projectsArray = [
  {
    title: 'Cool Project',
    screenshot: 'https://www.gallopaint.com/wp-content/uploads/2019/11/image-placeholder.jpg',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project',
    screenshot: 'https://www.gallopaint.com/wp-content/uploads/2019/11/image-placeholder.jpg',
    description: 'This is the best project',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const getProjects = () => projectsArray;


export default { getProjects };
