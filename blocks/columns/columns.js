export default function decorate(block) {
  if (block.parentElement.parentElement.className.includes('columns-container')) {
    block.parentElement.parentElement.classList.add(...'px-0 lg:px-8 !py-4 md:!py-10'.split(' '));
  }
  if (block.parentElement.className.includes('columns-wrapper')) {
    block.parentElement.classList
      .add(...'max-w-7xl w-full mx-auto'.split(' '));
  }
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  const imageAspectRatio = 1.7778;

  // setup image columns
  [...block.children].forEach((col) => {
    cols.forEach((row) => {
      const img = row.querySelector('img');
      if (img) {
        img.classList.add('w-full');
        // eslint-disable-next-line func-names
        img.onerror = function () {
          img.width = this.width;
          img.height = Math.floor(this.width / imageAspectRatio);
        };
      } else if (!block.className.includes('itemscenter')) {
        row.classList.add('h-full');
      }

      const ulEle = row.querySelectorAll('div > ul');
      if (ulEle.length > 0) {
        ulEle.forEach((ele) => {
          ele.classList.add(...'text-base list-disc pl-10 space-y-2 text-danahergray-700'.split(' '));
        });
      }
      const pElements = row.querySelectorAll('p');
      if (pElements) {
        [...pElements].forEach((item) => {
          const ulElements = item.parentElement.querySelectorAll('ul');
          if (ulElements.length > 0) {
            ulElements.forEach((element) => {
              element.classList.add(...'text-base list-disc pl-10 space-y-2 text-danahergray-700'.split(' '));
            });
          }
          const spanEl = item.querySelectorAll('p > span.icon');
          if (spanEl.length > 0) {
            spanEl.forEach((element) => {
              element.classList.add(...'w-12 h-12 relative rounded-md bg-danaherblue-900 text-white shrink-0'.split(' '));
              const svg = element.querySelector('svg');
              svg.classList.add(...'w-4 h-4 rounded shadow invert brightness-0'.split(' '));
            });
          }
        });
      }
      const anc = row.querySelectorAll('p > a');
      if (anc) {
        [...anc].forEach((item) => {
          if (item.title === 'link') {
            item.parentElement.classList.add('link', 'pb-8');
            item.textContent += ' ->';
            item.classList.add(...'text-sm font-bold text-danaherpurple-500'.split(' '));
          }
        });
      }

      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col', 'order-none');
        }
      }
    });
  });
}
