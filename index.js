import Sortable from 'sortablejs';
import interact from 'interactjs';
import throttle from 'lodash.throttle';
import EventEmitter from 'eventemitter3';
import DOMPurify from 'dom-purify';

export class EasyDnD extends EventEmitter {
  static initList({ selector, onSort }) {
    const element = document.querySelector(selector);
    Sortable.create(element, {
      animation: 150,
      onEnd: throttle((evt) => {
        const newOrder = [...element.children].map(child => child.id);
        if (onSort) onSort(newOrder);
        this.emit('sorted', newOrder);
      }, 100),
      filter: '.ignore-elements',
      preventOnFilter: false,
    });
  }

  static initGrid({ selector, onSort }) {
    interact(selector).draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      listeners: {
        move: throttle((event) => {
          const target = event.target;
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          target.style.webkitTransform =
            target.style.transform =
              `translate(${x}px, ${y}px)`;

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        }, 100),
        end: (event) => {
          const newOrder = [...event.target.parentNode.children].map(child => child.id);
          if (onSort) onSort(newOrder);
          this.emit('sorted', newOrder);
        }
      }
    });
  }
}
