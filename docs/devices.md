# devices

## Description

A module for determining the type of device and orientation. This module allows you to check whether the device is a mobile phone, tablet, or desktop, as well as determine their orientation.

## Installation

You can install the module using npm:

```bash
npm install js-utils
```

## Usage

Import the module into your project:

```javascript
import { devices } from 'js-utils';
```

### Example Usage

```javascript
if (devices.mobile()) {
doSomethingOnMobileOnly();
} else if (devices.tablet()) {
doSomethingOnTabletOnly();
} else {
doSomethingOnDesktop();
}
```

## API

### `smallMobile()`

Checks if the device is a small mobile.

**Returns:**
- (boolean): `true` if the device is a small mobile, otherwise `false`.

### `smallMobileLandscape()`

Checks if the device is a small mobile in landscape orientation.

**Returns:**
- (boolean): `true` if the device is a small mobile and in landscape orientation, otherwise `false`.

### `smallMobilePortrait()`

Checks if the device is a small mobile in portrait orientation.

**Returns:**
- (boolean): `true` if the device is a small mobile and in portrait orientation, otherwise `false`.

### `mobile()`

Checks if the device is mobile.

**Returns:**
- (boolean): `true` if the device is mobile, otherwise `false`.

### `mobileLandscape()`

Checks if the device is mobile in landscape orientation.

**Returns:**
- (boolean): `true` if the device is mobile and in landscape orientation, otherwise `false`.

### `mobilePortrait()`

Checks if the device is mobile in portrait orientation.

**Returns:**
- (boolean): `true` if the device is mobile and in portrait orientation, otherwise `false`.

### `tablet()`

Checks if the device is a tablet.

**Returns:**
- (boolean): `true` if the device is a tablet, otherwise `false`.

### `tabletLandscape()`

Checks if the device is a tablet in landscape orientation.

**Returns:**
- (boolean): `true` if the device is a tablet and in landscape orientation, otherwise `false`.

### `tabletPortrait()`

Checks if the device is a tablet in portrait orientation.

**Returns:**
- (boolean): `true` if the device is a tablet and in portrait orientation, otherwise `false`.

### `desktop()`

Checks if the device is a desktop.

**Returns:**
- (boolean): `true` if the device is a desktop, otherwise `false`.

## Notes

This module uses the `window.matchMedia` API to determine the type of device and its orientation. Make sure to test on different devices for accuracy.
