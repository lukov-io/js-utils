# Tabs

## Description

A module for implementing tab functionality, allowing users to switch between different sections of content using buttons. Users can easily browse different tabs without reloading the page.

## Installation

You can install the module using npm:

```bash
npm install js-utils
```

## Usage

Import the module into your project:

```javascript
import { tabs } from 'js-utils';
```

### Example Usage

```javascript
// Initialize the tab functionality
tabs.run();
```

### HTML Structure with Data Attributes

```html
<div class="tabs" data-tabs="openByClass" data-active-button-class="active-button" data-active-content-class="active-content">
  <div class="tabs__header">
    <span data-tab-button="tab1">Tab 1</span>
    <span data-tab-button="tab2">Tab 2</span>
    <span data-tab-button="tab3">Tab 3</span>
  </div>
  <div data-tab-content="tab1">
    <h2>Content for Tab 1</h2>
    <p>This is the content for Tab 1.</p>
  </div>
  <div data-tab-content="tab2">
    <h2>Content for Tab 2</h2>
    <p>This is the content for Tab 2.</p>
  </div>
  <div data-tab-content="tab3">
    <h2>Content for Tab 3</h2>
    <p>This is the content for Tab 3.</p>
  </div>
</div>
```

## API

### `run()`

Initializes all tabs on the page.

**Example:**

```javascript
tabs.run();
```

## Data Attributes

- **data-tabs**: Specifies the mode of tab functionality (e.g., 'openByClass' or 'openAuto').
- **data-active-button-class**: Specifies the class that will be added to the active tab button (default is 'active').
- **data-active-content-class**: Specifies the class that will be added to the active tab content (default is 'active').
- **data-tab-button**: Indicates the element that will be used as the tab button.
- **data-tab-content**: Indicates the element that contains the content for the corresponding tab.

## Notes

Make sure to set up the HTML structure and attributes correctly for the functionality to work properly.
