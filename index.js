'use strict';

const trelloBoardController = {};

const viewController = {
  taskButtonEventListener = (event) => {
    const targetElm = event.target;
    targetElm.previousElementSibling.append(
      viewController.createElement(
        'li',
        'Perferendis perspiciatis velit amet odio odit blanditiis',
        'task'
      )
    );
  },

  createElement(type, innerHtml, className) {
    const newElement = document.createElement(type);
    newElement.innerHTML = innerHtml;
    newElement.classList.add(className);
    return newElement;
  },
};

const controller = {
  addTaskListener() {
    const addTaskButtons = document.querySelectorAll('.add-task-button');
    for (const element of addTaskButtons) {
      element.addEventListener('click', viewController.taskButtonEventListener);
    }
  },

  init: function () {
    console.log('Application has started');
    controller.addTaskListener();
  },
};
controller.init();
