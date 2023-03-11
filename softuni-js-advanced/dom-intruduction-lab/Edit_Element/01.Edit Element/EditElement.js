function editElement(element, sringToReplace, replacer) {
  let content = element.textContent;
  let matcher = new RegExp(sringToReplace, 'g');
  content = content.replace(matcher, replacer);

  element.textContent = content;
}