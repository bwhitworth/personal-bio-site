const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).innerHTML = textToPrint;
};

export default { printToDom };
