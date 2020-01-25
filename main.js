console.log("Bethany's bio page");

const projects = [
  {
  title: "Cool Project", 
  screenshot: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
  title: "Cool Project", 
  screenshot: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}

];

const printToDom = (elementId, stringToPrint) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const makeProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projects.length; i++) {
    domString += `<div class="projectCard">`;
    domString += `<div class="title">${projects[i].title}</div>`;
    domString += `<img src="${projects[i].screenshot}" alt="screenshot">`;
    domString += `<p>${projects[i].description}</p>`;
    domString += `<p>Technologies Used: ${projects[i].technologiesUsed}</p>`;
    domString += `<p>Available: ${projects[i].available}</p>`;
    domString += `<a href="http://${projects[i].githubUrl}">GitHub link</a>`;
    domString += `</div>`;
  
  }

  printToDom('projectsPage',domString);
};

makeProjectCards();