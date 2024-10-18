/**
 * Utility for "Read More" toggle functionality
 *
 * @function run - Initializes the readMore.
 *
 * @example
 * // Initialize the "Read More" functionality
 * readMore.run();
 *
 * // HTML structure with data-attributes
 * <div class="read-more-block" data-read-more data-read-more-active-class="active">
 *   <div>Content to show/hide</div>
 *   <button data-read-more-toggler data-more-text="Read More" data-less-text="Read Less">Read More</button>
 * </div>
 */

var readMore = (function () {
  /**
   * Initializes all "Read More" blocks on the page.
   */
  const init = () => {
    const readMoreBlocks = document.querySelectorAll("[data-read-more]");
    readMoreBlocks.forEach(initializeBlock);
  };

  /**
   * Initializes a specific "Read More" block.
   *
   * @param {HTMLElement} block - The block to initialize
   */
  const initializeBlock = (block) => {
    const toggler = block.querySelector("[data-read-more-toggler]");
    if (toggler) {
      toggler.innerHTML = toggler.dataset.moreText || 'Read More';
      toggler.addEventListener('click', () => toggleContent(block, toggler));
    }
  };

  /**
   * Toggles the content of the "Read More" block and updates the button text.
   *
   * @param {HTMLElement} block - The block containing the content
   * @param {HTMLElement} toggler - The button that toggles the content
   */
  const toggleContent = (block, toggler) => {
    const activeClass = block.dataset.readMoreActiveClass || 'active';

    block.classList.toggle(activeClass);
    toggler.innerHTML = block.classList.contains(activeClass)
        ? toggler.dataset.lessText || 'Read Less'
        : toggler.dataset.moreText || 'Read More';
  };

  return {
    run: init,
  };
})();

export { readMore as default };
