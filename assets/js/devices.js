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

export { devices as default };
