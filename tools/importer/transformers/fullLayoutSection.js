/* global WebImporter */
const createFullLayoutSection = (main, document) => {
  main.querySelectorAll('fulllayout').forEach((e, i, arr) => {
    const div = e.querySelector('div');
    const style = div.getAttribute('class');
    if (style) {
      const cells = [['Section Metadata'], ['style', style]];
      const table = WebImporter.DOMUtils.createTable(cells, document);
      e.after(table);
      if (i < arr.length - 1 && !arr[arr.length - 1].querySelector('div.bg-danaherlightblue-50')?.querySelector('div.cta-section')) {
        table.after(document.createElement('hr'));
      }
    } else if (i < arr.length - 1 && !arr[i + 1].querySelector('div.bg-danaherlightblue-50')?.querySelector('div.cta-section')) {
      e.after(document.createElement('hr'));
    }
  });
};
export default createFullLayoutSection;
