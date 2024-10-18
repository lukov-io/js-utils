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

export { cookie as default };
