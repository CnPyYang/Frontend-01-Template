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

// 2.监听触摸事件
element.addEventListener('touchstart', event => {
    console.log('start:', event.changedTouches[0]);
});

element.addEventListener('touchmove', event => {
    console.log('move:', event.changedTouches[0]);
});

element.addEventListener('touchend', event => {
    console.log('end:', event.changedTouches[0]);
});

element.addEventListener('touchcancel', event => {
    console.log('cancel:', event.changedTouches[0]);
});