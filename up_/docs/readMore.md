# Read More

## Description

A module for implementing a "Read More" feature that allows content to be hidden and shown by clicking a button. 
The user can view additional text or hide it at their discretion.

## Installation

You can install the module using npm:

```bash
npm install js-utils
```

## Usage

Import the module into your project:

```javascript
import { readMore } from 'js-utils';
```

### Example Usage

```javascript
// Initialize the "Read More" functionality
readMore.run();
```

### HTML Structure with Data Attributes

```html
<div class="read-more-block" data-read-more data-read-more-active-class="active">
  <div>Content to show/hide</div>
  <button data-read-more-toggler data-more-text="Read More" data-less-text="Read Less">Read More</button>
</div>
```

## API

### `run()`

Initializes all "Read More" blocks on the page.

**Example:**

```javascript
readMore.run();
```

## Data Attributes

- **data-read-more**: Indicates the block that will use the "Read More" functionality.
- **data-read-more-active-class**: Specifies the class that will be added to the block when the content is open 
(default is 'active').
- **data-read-more-toggler**: The button that controls the opening and closing of the content.
- **data-more-text**: The text that will be displayed on the button when the content is hidden (default is 'Read More').
- **data-less-text**: The text that will be displayed on the button when the content is open (default is 'Read Less').

## Notes

Make sure to set up the HTML structure and attributes correctly for the functionality to work properly.
