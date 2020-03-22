const showSelectedDiv = (divId, btnId) => {
  $('a').removeClass('active');
  $(`a#${btnId}`).addClass('active');
  $('.div-section').addClass('hide');
  $(`#${divId}`).removeClass('hide');
};

const navButtonEvents = () => {
  $('#home-bio-btn').on('click', () => showSelectedDiv('bio-section', 'home-bio-btn'));
  $('#tech-btn').on('click', () => showSelectedDiv('tech-section', 'tech-btn'));
  $('#projects-btn').on('click', () => showSelectedDiv('projects-section', 'projects-btn'));
};

export default { showSelectedDiv, navButtonEvents };
