/* global WebImporter */
const createWorkflowContainerSection = (main, document) => {
  main.querySelectorAll('div.container-workflow').forEach((e, i, arr) => {
    const heading = e.querySelector('div > h2, div > h3');
    const strongEl = document.createElement('strong');
    if (heading) {
      strongEl.textContent = heading.textContent;
      heading.textContent = '';
      heading.append(strongEl);
    }
    if (i === arr.length - 1) {
      const cells = [['Section Metadata'], ['style', 'container-two-col']];
      const table = WebImporter.DOMUtils.createTable(cells, document);
      e.append(table);
    }
  });
};
export default createWorkflowContainerSection;
