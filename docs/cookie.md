# Cookie

## Description

A module for managing cookies. This module provides functions for setting, getting, and removing cookies.

## Installation

You can install the module using npm:

```bash
npm install js-utils
```

## Usage

Import the module into your project:

```javascript
import { cookieUtils } from 'js-utils';
```

### Example Usage

```javascript
// Set a cookie with a 7-day expiration
cookieUtils.set('username', 'JohnDoe', 7);

// Get the value of a cookie
const username = cookieUtils.get('username');

// Remove a cookie
cookieUtils.remove('username');
```

## API

### `set(name, value, days)`

Sets a cookie with the specified name, value, and expiration time in days.

**Parameters:**
- `name` (string): The name of the cookie.
- `value` (string): The value of the cookie.
- `days` (number): The expiration time in days.

### `get(name)`

Gets the value of a cookie by its name.

**Parameters:**
- `name` (string): The name of the cookie.

**Returns:**
- (string|null): The value of the cookie or `null` if the cookie is not found.

### `remove(name)`

Removes a cookie by setting its expiration to the past.

**Parameters:**
- `name` (string): The name of the cookie to remove.

## Notes

The cookie management module is useful for storing user data, such as usernames or preferences. Make sure that cookies are used in accordance with your web application's privacy policies.
