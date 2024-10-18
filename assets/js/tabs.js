/**
 * Utility for tab navigation functionality.
 * This module provides functions to initialize tab navigation and manage tab interactions.
 *
 * @module tabs
 *
 * @example
 * // Initialize the tabs functionality
 * tabs.run();
 *
 * // HTML structure with data-attributes
 * <div class="tabs" data-tabs="openByClass" data-active-button-class="active-button" data-active-content-class="active-content">
 *   <div class="tabs__header">
 *     <span data-tab-button="tab1">Tab 1</span>
 *     <span data-tab-button="tab2">Tab 2</span>
 *     <span data-tab-button="tab3">Tab 3</span>
 *   </div>
 *   <div data-tab-content="tab1">
 *     <h2>Content for Tab 1</h2>
 *     <p>This is the content for Tab 1.</p>
 *   </div>
 *   <div data-tab-content="tab2">
 *     <h2>Content for Tab 2</h2>
 *     <p>This is the content for Tab 2.</p>
 *   </div>
 *   <div data-tab-content="tab3">
 *     <h2>Content for Tab 3</h2>
 *     <p>This is the content for Tab 3.</p>
 *   </div>
 * </div>
 */

var tabs = (function () {
  /**
   * Initializes all tab containers on the page.
   *
   * @function init
   */
  const init = () => {
    const tabsContainers = document.querySelectorAll("[data-tabs]");
    tabsContainers.forEach(initializeTabsInstance);
  };

  /**
   * Initializes a specific tab container.
   *
   * @function initializeTabs
   * @param {HTMLElement} container - The tab container element to initialize.
   */
  const initializeTabsInstance = (container) => {
    const buttons = container.querySelectorAll("[data-tab-button]");
    const contents = container.querySelectorAll("[data-tab-content]");
    const activeButtonClass = container.dataset.activeButtonClass || 'active';
    const mode = container.dataset.tabs;
    const activeContentClass = mode === "openByClass" ? container.dataset.activeContentClass || 'active' : null;

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        activateTab(button, contents, activeButtonClass, activeContentClass, mode);
      });
    });

    if (buttons.length > 0) {
      buttons[0].click();
    }
  };

  /**
   * Activates the selected tab and shows its content.
   *
   * @function activateTab
   * @param {HTMLElement} button - The clicked tab button.
   * @param {NodeList} contents - All tab content elements.
   * @param {string} activeButtonClass - The class to apply to the active button.
   * @param {string} activeContentClass - The class to apply to the active content.
   * @param {string} mode - The mode of tab functionality (e.g., "openByClass" or "openAuto").
   */
  const activateTab = (button, contents, activeButtonClass, activeContentClass, mode) => {
    const targetContentValue = button.dataset.tabButton;

    button.parentElement.querySelectorAll("[data-tab-button]").forEach(btn => {
      btn.classList.remove(activeButtonClass);
    });

    contents.forEach(content => {
      if (activeContentClass && mode === "openByClass") {
        content.classList.remove(activeContentClass);
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add(activeButtonClass);

    const activeContent = [...contents].find(content => content.dataset.tabContent === targetContentValue);

    if (activeContent) {
      if (mode === "openByClass") {
        activeContent.classList.add(activeContentClass);
      } else {
        activeContent.style.display = 'block';
      }
    }
  };

  return {
    run: init,
  };
})();

export { tabs as default };
