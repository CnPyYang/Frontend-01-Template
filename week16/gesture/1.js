let element = document.body;

// 1.监听鼠标事件
element.addEventListener('mousedown', () => {
    let move = event => {
        console.log(event.clientX, event.clientY);
    }
    let end = event => {
        element.removeEventListener('mousemove', move);
        element.removeEventListener('mouseup', end);
    }
    element.addEventListener('mousemove', move);
    element.addEventListener('mouseup', end);
});
