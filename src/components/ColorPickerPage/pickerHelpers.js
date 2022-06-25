// const allDraggable = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');

export const dragAndDrop = (allDraggable, container) => {

    allDraggable.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    container.addEventListener('dragover', (e) => {
        e.preventDefault();

        let ratio = e.target.parentElement.width / e.target.parentElement.height;
        let afterElement;

        if (ratio > 1) {
            afterElement = getDragHorizontalElement(container, e.clientX);
        } else {
            afterElement = getDragVerticalElement(container, e.clientY);
        }
        
        const draggable = document.querySelector('.dragging');

        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });

    function getDragVerticalElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offsetY = y - box.top - box.height / 2;

            if (offsetY < 0 && offsetY > closest.offsetY) {
                return { offset: offsetY, element: child };
            } else {
                return closest;
            }

        }, { offsetY: Number.NEGATIVE_INFINITY }).element;
    }

    function getDragHorizontalElement(container, x) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offsetX = x - box.left - box.width / 2;

            if (offsetX < 0 && offsetX > closest.offsetX) {
                return { offset: offsetX, element: child };
            } else {
                return closest;
            }

        }, { offsetX: Number.NEGATIVE_INFINITY }).element;
    }
};