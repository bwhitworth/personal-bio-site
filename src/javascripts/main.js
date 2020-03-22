import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects';
import navbar from './components/navbar';

const init = () => {
  navbar.navButtonEvents();
  projects.printProjectCards();
};

init();
