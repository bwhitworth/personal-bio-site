import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects/projects';
import navbar from './components/navbar/navbar';

const init = () => {
  navbar.navButtonEvents();
  projects.printProjectCards();
};

init();
