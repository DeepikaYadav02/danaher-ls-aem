/* global WebImporter */
const URLS_TO_BLOCK_MAP = [
  {
    url: '/we-see-a-way.html',
    blockName: 'Card List (wsaw)',
  },
  {
    url: '/we-see-a-way/solutions/',
    blockName: 'Card List (wsaw, url-filtered)',
  },
  {
    url: '/blog.html',
    blockName: 'Card List (blog)',
  },
  {
    url: '/blog/topics-template.html',
    blockName: 'Card List (blog, url-filtered)',
  },
  {
    url: '/news.html',
    blockName: 'Card List (news)',
  },
  {
    url: '/news/topics-template.html',
    blockName: 'Card List (news, url-filtered)',
  },
  {
    url: '/library.html',
    blockName: 'Card List (library)',
  },
  {
    url: '/library/topics-template.html',
    blockName: 'Card List (library, url-filtered)',
  },
  {
    url: '/application.html',
    blockName: 'Card List (application)',
  },
  {
    url: '/new-lab/promotions.html',
    blockName: 'Card List (new-lab)',
  },
  {
    url: '/new-lab/promotions/topics-template.html',
    blockName: 'Card List (new-lab, url-filtered)',
  },
];

const createCardList = (main, document) => {
  const url = document.querySelector('[property="og:url"]')?.content;
  if (url) {
    // eslint-disable-next-line max-len
    const blockName = URLS_TO_BLOCK_MAP.find((item) => url.endsWith(item.url) || url.includes(item.url))?.blockName;
    if (blockName) {
      const block = [[blockName], ['']];
      WebImporter.DOMUtils.remove(main, ['h2', 'p']);
      const table = WebImporter.DOMUtils.createTable(block, document);
      main.append(table);
    }
  }
};
export default createCardList;
