
//3
// let dragSrcEl = { };
// function handleDragStart(e) {
//     this.style.opacity = '0.4';
//     dragSrcEl = this;
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
// }
// function handleDragEnd(e) {
//     this.style.opacity = '1';
//     items.forEach(function (item) {
//         item.classList.remove('over');
//     });
// }
// function handleDragOver(e) {
//     e.preventDefault();
//     return false;
// }
// function handleDragEnter(e) {
//     this.classList.add('over');
// }
// function handleDragLeave(e) {
//     this.classList.remove('over');
// }
// function handleDrop(e) {
//     e.stopPropagation();
//     if (dragSrcEl !== this) {
//         dragSrcEl.innerHTML = this.innerHTML;
//         this.innerHTML = e.dataTransfer.getData('text/html');
//     }
//     return false;
// }
// let items = document.querySelectorAll('.colors .colorBox');
// items.forEach(function (item) {
//     item.addEventListener('dragstart', handleDragStart);
//     item.addEventListener('dragover', handleDragOver);
//     item.addEventListener('dragenter', handleDragEnter);
//     item.addEventListener('dragleave', handleDragLeave);
//     item.addEventListener('dragend', handleDragEnd);
//     item.addEventListener('drop', handleDrop);
// });


// 1
// color.addEventListener('ondragstart', (e) => { 
//     console.log('drag start');
//     e.dataTransfer.setData('text/plain', e.target.id); 
// });
// colors.addEventListener('ondragover', (e) => { e.preventDefault(); });
// color.addEventListener('ondrop', (e) => {
//     e.preventDefault();
//     let data = e.dataTransfer.getData('text/plain');
//     e.target.appendChild(document.getElementById(data));
// });


// 2
// let dragged;
// let id;
// let index;
// let indexDrop;
// let list;
// color.addEventListener('ondragstart', ({target}) => { 
//     console.log(target);
//     dragged = target;
//     id = target.id;
//     console.log(id);
//     list = target.parentNode.children;
//     console.log(list);
//     for (let i = 0; i < list.length; i+=1) {
//         if (list[i] === dragged) {
//             index = i;
//         }
//     }
// });
// colors.addEventListener('ondragover', (e) => { e.preventDefault(); });
// colors.addEventListener('ondrop', ({target}) => {
//     e.preventDefault();
//     if (target.className === 'colorBox' && target.id !== id) {
//         dragged.remove( dragged );
//         for (let i = 0; i < list.length; i+=1) {
//             if (list[i] === target) {
//                 indexDrop = i;
//             }
//         }
//         console.log(index, indexDrop);
//         if (index > indexDrop) {
//             target.before(dragged);
//         } else {
//             target.after(dragged);
//         }
//     }
// });


// // dragAndDrop(colors, color);
// let dragged;
// let id = '';
// let list = [];
// let index = 0;
// let indexDrop = 0;
// color.addEventListener('dragstart', ({ target }) => {
//     dragged = target;
//     id = target.id;
//     list = target.parentNode.children;
//     for (let i = 0; i < list.length; i += 1) {
//         if (list[i] === target) {
//             index = i;
//         }
//     }
// });

// colors.addEventListener('dragover', (e) => {
//     e.preventDefault();
// });

// color.addEventListener('drop', ({ target }) => {
//     if (target.className === 'dragging' && target.id !== id) {
//         dragged.remove(dragged);
//         for (let i = 0; i < list.length; i += 1) {
//             if (list[i] === target) {
//                 indexDrop = i;
//             }
//         }
//         console.log(index, indexDrop);

//         if (index > indexDrop) {
//             target.before(dragged);
//         } else {
//             target.after(dragged);
//         }
//     }
// });




// export const dragAndDrop = (colors, color) => {
//     color.setAttribute('draggable', true);
//     color.classList.add('draggable');
//     let draggingEl;
//     let placeholder;
//     let isDraggingStarted = false;
//     let x = 0;
//     let y = 0;

//     colors.addEventListener('mousedown', mouseDownHandler);
    
//     function mouseDownHandler(e) {
//         draggingEl = e.target;
//         const rect = draggingEl.getBoundingClientRect();
//         x = e.pageX - rect.left;
//         y = e.pageY - rect.top;

//         colors.addEventListener('mousemove', mouseMoveHandler);
//         colors.addEventListener('mouseup', mouseUpHandler);
//     }

//     function mouseMoveHandler(e) {
//         // const draggingRect = draggingEl.getBoundingClientRect();
        
//         if (!isDraggingStarted) {
//             isDraggingStarted = true;
//             placeholder = document.createElement('li');
//             placeholder.classList.add('placeholder');
//             draggingEl.parentNode.insertBefore( placeholder, draggingEl.nextSibling );
//             placeholder.style.height = '10px';
//         }
        
//         draggingEl.style.position = 'absolute';
//         draggingEl.style.top = `${e.pageY - y}px`;
//         draggingEl.style.left = `${e.pageX - x}px`;
        
//         const prevEle = draggingEl.previousElementSibling;
//         const nextEle = placeholder.nextElementSibling;
        
//         if (prevEle && isAbove(draggingEl, prevEle)) {
//             swap(placeholder, draggingEl);
//             swap(placeholder, prevEle);
//             return;
//         }
//         if (nextEle && isAbove(nextEle, draggingEl)) {
//             swap(nextEle, placeholder);
//             swap(nextEle, draggingEl);
//         }
//     }

//     function mouseUpHandler(e) {
//         placeholder && placeholder.parentNode.removeChild(placeholder);
//         draggingEl.style.removeProperty('top');
//         draggingEl.style.removeProperty('left');
//         draggingEl.style.removeProperty('position');
//         x = null;
//         y = null;
//         draggingEl = null;
//         isDraggingStarted = false;
//         document.removeEventListener('mousemove', mouseMoveHandler);
//         document.removeEventListener('mouseup', mouseUpHandler);
//     }

//     function swap(nodeA, nodeB) {
//         const parentA = nodeA.parentNode;
//         const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
//         nodeB.parentNode.insertBefore(nodeA, nodeB);
//         parentA.insertBefore(nodeB, siblingA);
//     }
//     function isAbove(nodeA, nodeB) {
//         const rectA = nodeA.getBoundingClientRect();
//         const rectB = nodeB.getBoundingClientRect();
//         return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2;
//     }
// };



// const allDraggable = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');

// export const dragAndDrop = (allDraggable, container) => {

//     allDraggable.forEach(draggable => {
//         draggable.addEventListener('dragstart', () => {
//             draggable.classList.add('dragging');
//         });

//         draggable.addEventListener('dragend', () => {
//             draggable.classList.remove('dragging');
//         });
//     });

//     container.addEventListener('dragover', (e) => {
//         e.preventDefault();

//         let ratio = e.target.parentElement.width / e.target.parentElement.height;
//         let afterElement = {};

//         if (ratio > 1) {
//             afterElement = getDragHorizontalElement(container, e.clientX);
//         } else {
//             afterElement = getDragVerticalElement(container, e.clientY);
//         }
        
//         const draggable = document.querySelector('.dragging');

//         if (afterElement == null) {
//             container.appendChild(draggable);
//         } else {
//             container.insertBefore(draggable, afterElement);
//         }
//     });

//     function getDragVerticalElement(container, y) {
//         const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

//         return draggableElements.reduce((closest, child) => {
//             const box = child.getBoundingClientRect();
//             const offsetY = y - box.top - box.height / 2;

//             if (offsetY < 0 && offsetY > closest.offsetY) {
//                 return { offset: offsetY, element: child };
//             } else {
//                 return closest;
//             }

//         }, { offsetY: Number.NEGATIVE_INFINITY }).element;
//     }

//     function getDragHorizontalElement(container, x) {
//         const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

//         return draggableElements.reduce((closest, child) => {
//             const box = child.getBoundingClientRect();
//             const offsetX = x - box.left - box.width / 2;

//             if (offsetX < 0 && offsetX > closest.offsetX) {
//                 return { offset: offsetX, element: child };
//             } else {
//                 return closest;
//             }

//         }, { offsetX: Number.NEGATIVE_INFINITY }).element;
//     }
// };