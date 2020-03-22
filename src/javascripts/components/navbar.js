const showSelectedDiv = (navButton) => {
  if (navButton === 'home-bio') {
    $('#bioSection').removeClass('hide');
    $('#techSection').addClass('hide');
    $('#projectSection').addClass('hide');
  } else if (navButton === 'tech') {
    console.error('clicked tech');
    $('#bioSection').addClass('hide');
    $('#techSection').removeClass('hide');
    $('#projectSection').addClass('hide');
  } else if (navButton === 'projects') {
    $('#bioSection').addClass('hide');
    $('#techSection').addClass('hide');
    $('#projectSection').removeClass('hide');
  }
};

const navButtonEvents = () => {
  $('#home-bio-btn').click(showSelectedDiv('home-bio'));
  $('#projects-btn').click(showSelectedDiv('projects'));
  $('#tech-btn').click(showSelectedDiv('tech'));
};

export default { showSelectedDiv, navButtonEvents };
