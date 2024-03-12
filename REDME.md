# Simple DND Kit

A lightweight, dependency-rich drag-and-drop library for web applications, making it easy to add sortable lists and grids with minimal setup.

## Features

- Drag-and-drop sorting for lists and grids
- Touch-friendly and responsive
- Utilizes `SortableJS` and `interact.js` for comprehensive DnD capabilities
- Throttling for performance optimization with `lodash.throttle`
- Custom event handling through `EventEmitter3`
- Secure HTML handling with `DOMPurify`

## Installation

Install `simple-dnd-kit` using npm:

```bash
npm install simple-dnd-kit
```

## Usage

```javascript
import { EasyDnD } from 'simple-dnd-kit';

// Initialize drag-and-drop for a list
EasyDnD.initList({
selector: '#myList',
onSort: (newOrder) => {
console.log('New order:', newOrder);
}
});

// Initialize drag-and-drop for a grid
EasyDnD.initGrid({
selector: '#myGrid',
onSort: (newOrder) => {
console.log('New order:', newOrder);
}
});
```

## API

### `initList(options)`
Initializes drag-and-drop functionality on a list.

Options:
- `selector`: The CSS selector for the list element.
- `onSort`: Callback function that receives the new order of items after sorting.

### `initGrid(options)`
Similar to `initList`, but optimized for grid layouts.

## License

MIT
