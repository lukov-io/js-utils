# Accordion

## Description

Accordion module. This module provides the ability to initialize accordions, allowing elements to expand and collapse 
based on user interaction.

## Installation

You can install the module using npm:

```bash
npm install js-utils
```

## Usage

Import the module into your project:

```javascript
import { accordions } from 'js-utils';
```

### Example usage:

```html
<div class="accordion" data-accordion="single" data-accordion-active-class='active'>
  <div class="accordion__item" data-accordion-item>
    <h2 class="accordion__item-title">Title</h2>
    <div class="accordion__item-content">Content</div>
  </div>
  <div class="accordion__item" data-accordion-item>
    <h2 class="accordion__item-title">Title 2</h2>
    <div class="accordion__item-content">Content 2</div>
  </div>
</div>

<script>
  import { accordions } from 'js-utils';
  accordions.run();
</script>
```

## Data attributes

- **data-accordion**:
    - Description: Indicates the accordion mode. The value `"single"` allows only one item to be open at any time, 
      while the value `"multiple"` allows multiple items to be open simultaneously.

- **data-accordion-active-class**:
    - Description: Specifies the class that will be added to the active accordion item. By default, the class 
      `"active"` is used.

- **data-accordion-item**:
    - Description: Refers to an element that is part of the accordion. This attribute should be added to all elements 
      that can be opened or closed.

## API

### `run()`

Initializes the accordion functionality by finding all accordions in the document and setting up event handlers.

**Example:**

```javascript
accordion.run();
```

### Other functions

- **resetState(accordion, itemActiveClass)**  
  Resets the accordion state by removing the active class from all items.

- **handleItemClick(event, accordion)**  
  Handles the click event on the accordion item.

## Notes

This module supports multiple modes.
In single mode, when a new item is opened, any previously opened item will automatically close, ensuring that only 
one item is expanded at any given time. In multiple mode, users can freely expand or collapse items without affecting 
the state of others, allowing for a more flexible and interactive experience.
