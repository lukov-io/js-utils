/**
 * Simple accordion functionality
 *
 * @function run - Initializes the accordion
 *
 * @example
 * // Initialize the accordion
 * accordion.run();
 *
 * // HTML structure with data-attributes
 * <div class="accordion" data-accordion="single" data-accordion-active-class='active'>
 *   <div class="accordion__item" data-accordion-item>
 *     <h2 class="accordion__item-title">Title</h2>
 *     <div class="accordion__item-content">Content</div>
 *   </div>
 * </div>
 */

var accordion = (function () {

  /**
   * Initializes all accordions found in the document
   */
  const init = () => {
    const accordions = document.querySelectorAll("[data-accordion]");

    accordions.forEach((accordion) => {
      setupAccordionItems(accordion);
    });
  };

  /**
   * Sets up event listeners for each accordion item
   *
   * @param {HTMLElement} accordion - The accordion container element
   */
  const setupAccordionItems = (accordion) => {
    const items = accordion.querySelectorAll("[data-accordion-item]");

    resetState(accordion);

    items.forEach((item) => {
      item.addEventListener('click', (event) => handleItemClick(event, accordion));
    });
  };

  /**
   * Handles the click event for an accordion item
   *
   * @param {Event} event - The click event
   * @param {HTMLElement} accordion - The accordion container element
   */
  const handleItemClick = (event, accordion) => {
    const item = event.currentTarget;
    const itemActiveClass = accordion.dataset.itemActiveClass || 'active';
    const mode = accordion.dataset.accordion || 'single';

    if (mode === 'single' && !item.classList.contains(itemActiveClass)) {
      resetState(accordion, itemActiveClass);
    }

    item.classList.toggle(itemActiveClass);
  };

  /**
   * Resets the state of the accordion by removing the active class from all items
   *
   * @param {HTMLElement} accordion - The accordion container element
   * @param {string} [itemActiveClass='active'] - The active class to be removed (optional)
   */
  const resetState = (accordion, itemActiveClass = 'active') => {
    const activeItems = accordion.querySelectorAll(`.${itemActiveClass}[data-accordion-item]`);

    activeItems.forEach((item) => {
      item.classList.remove(itemActiveClass);
    });
  };

  return {
    run: init,
  };
})();

export { accordion as default };
