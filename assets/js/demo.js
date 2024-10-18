(function () {
  'use strict';

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

  /**
   * Utility for managing cookies.
   * This module provides functions to set, get, and remove cookies.
   *
   * @module cookie
   *
   * @example
   * // Set a cookie with a 7-day expiration
   * cookie.set('username', 'JohnDoe', 7);
   *
   * // Get the value of a cookie
   * const username = cookie.get('username');
   *
   * // Remove a cookie
   * cookie.remove('username');
   */
  var cookie = (function () {

    /**
     * Sets a cookie with the specified name, value, and expiration days.
     *
     * @function set
     * @param {string} name - Name of the cookie.
     * @param {string} value - Value of the cookie.
     * @param {number} days - Expiration time in days.
     */
    const setCookie = (name, value, days) => {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = `${name}=${value || ""}${expires}; path=/`;
    };

    /**
     * Gets the value of a cookie by its name.
     *
     * @function get
     * @param {string} name - Name of the cookie.
     * @returns {string|null} - The value of the cookie or null if not found.
     */
    const getCookie = (name) => {
      const nameEQ = `${name}=`;
      const cookies = document.cookie.split(';');

      for (let cookieItem of cookies) {
        cookieItem = cookieItem.trim();
        if (cookieItem.startsWith(nameEQ)) {
          return cookieItem.substring(nameEQ.length);
        }
      }

      return null;
    };

    /**
     * Removes a cookie by setting its expiration to the past.
     *
     * @function remove
     * @param {string} name - Name of the cookie to remove.
     */
    const removeCookie = (name) => {
      setCookie(name, '', -1);
    };

    return {
      set: setCookie,
      get: getCookie,
      remove: removeCookie
    };
  })();

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

  /**
   * Small helper for detecting device type and orientation
   * @type {{smallMobile, smallMobileLandscape, smallMobilePortrait, mobile, mobileLandscape, mobilePortrait, tablet, tabletLandscape, tabletPortrait, desktop}}
   * @return {Boolean}
   *
   * @example
   * if (devices.mobile()) {
   *  doSomethingOnMobileOnly();
   * }
   */

  var devices = (function() {
    let smallMobileLandscape = "(max-height: 320px) and (orientation: landscape)";
    let smallMobilePortrait = "(max-width: 320px) and (orientation: portrait)";
    let smallMobile = "(max-width: 320px)";

    let mobileLandscape = "(max-height: 767px) and (orientation: landscape)";
    let mobilePortrait = "(max-width: 767px) and (orientation: portrait)";
    let mobile = "(max-width: 767px)";

    let tabletLandscape = "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)";
    let tabletPortrait = "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)";
    let tablet = "(min-width: 768px) and (max-width: 1024px)";

    let desktop = "(min-width: 1025px)";

    return {
      smallMobile: function() {
        return window.matchMedia(smallMobile).matches;
      },
      smallMobileLandscape: function() {
        return window.matchMedia(smallMobileLandscape).matches;
      },
      smallMobilePortrait: function() {
        return window.matchMedia(smallMobilePortrait).matches;
      },
      mobile: function() {
        return window.matchMedia(mobile).matches;
      },
      mobileLandscape: function() {
        return window.matchMedia(mobileLandscape).matches;
      },
      mobilePortrait: function() {
        return window.matchMedia(mobilePortrait).matches;
      },
      tablet: function() {
        return window.matchMedia(tablet).matches;
      },
      tabletLandscape: function() {
        return window.matchMedia(tabletLandscape).matches;
      },
      tabletPortrait: function() {
        return window.matchMedia(tabletPortrait).matches;
      },
      desktop: function() {
        return window.matchMedia(desktop).matches;
      }
    };
  })();

  document.addEventListener('DOMContentLoaded', () => {
      tabs.run();
      accordion.run();
      readMore.run();
      getDevice();
      cookieManager();
  });

  const getDevice = ()=> {
      const checkDeviceButtons = document.getElementById('check-device');
      const resultDiv = document.getElementById('result');

      if (!checkDeviceButtons || !resultDiv) {
          return;
      }

      checkDeviceButtons.addEventListener('click', () => {
          let message = 'You are using: ';
          if (devices.smallMobileLandscape()) {
              message += 'a small mobile device in landscape mode.';
          } else if (devices.smallMobilePortrait()) {
              message += 'a small mobile device in portrait mode.';
          } else if (devices.mobileLandscape()) {
              message += 'a mobile device in landscape mode.';
          } else if (devices.mobilePortrait()) {
              message += 'a mobile device in portrait mode.';
          } else if (devices.tabletLandscape()) {
              message += 'a tablet in landscape mode.';
          } else if (devices.tabletPortrait()) {
              message += 'a tablet in portrait mode.';
          } else if (devices.desktop()) {
              message += 'a desktop computer.';
          } else {
              message += 'an unknown device.';
          }
          resultDiv.textContent = message;
      });
  };

  const cookieManager = () => {
      const setCookieButton = document.getElementById('setCookie');
      const getCookieButton = document.getElementById('getCookie');
      const removeCookieButton = document.getElementById('removeCookie');
      const cookieList = document.getElementById('cookieList');
      const cookieValueText = document.getElementById('cookieValueText');

      if (!setCookieButton || !getCookieButton || !removeCookieButton || !cookieList || !cookieValueText) {
          return;
      }

      const updateCookieList = () => {
          cookieList.innerHTML = '';
          const cookies = document.cookie.split('; ');
          cookies.forEach(cookie => {
              const li = document.createElement('li');
              li.textContent = cookie;
              cookieList.appendChild(li);
          });
      };

      setCookieButton.addEventListener('click', () => {
          const name = document.getElementById('cookieName').value;
          const value = document.getElementById('cookieValue').value;
          const days = document.getElementById('cookieDays').value;
          cookie.set(name, value, days);
          updateCookieList();
      });

      getCookieButton.addEventListener('click', () => {
          const name = document.getElementById('getCookieByName').value;
          const value = cookie.get(name);
          cookieValueText.textContent = value ? `Value: ${value}` : 'Cookie not found';
      });

      removeCookieButton.addEventListener('click', () => {
          const name = document.getElementById('removeCookieByName').value;
          cookie.remove(name);
          updateCookieList();
      });

      updateCookieList();
  };

})();
