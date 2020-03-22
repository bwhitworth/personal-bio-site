const showSelectedDiv = (navButton) => {
  if (navButton === 'home-bio') {
    console.error('clicked home');
    $('#bioSection').removeClass('hide');
    $('#techSection').addClass('hide');
    $('#projectSection').addClass('hide');
  } else if (navButton === 'tech') {
    console.error('clicked tech');
    $('#bioSection').addClass('hide');
    $('#techSection').removeClass('hide');
    $('#projectSection').addClass('hide');
  } else if (navButton === 'projects') {
    console.error('clicked projects');
    $('#bioSection').addClass('hide');
    $('#techSection').addClass('hide');
    $('#projectSection').removeClass('hide');
  }
};

const navButtonEvents = () => {
  $('#home-bio-btn').on('click', showSelectedDiv('home-bio'));
  $('#tech-btn').on('click', showSelectedDiv('tech'));
  $('#projects-btn').on('click', showSelectedDiv('projects'));
};

export default { showSelectedDiv, navButtonEvents };
