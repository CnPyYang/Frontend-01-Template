let element = document.body;

// 1.监听鼠标事件
element.addEventListener('mousedown', event => {
    start(event);
    let mousemove = event => {
        move(event);
    }
    let mouseend = event => {
        end(event);
        element.removeEventListener('mousemove', mousemove);
        element.removeEventListener('mouseup', mouseend);
    }
    element.addEventListener('mousemove', mousemove);
    element.addEventListener('mouseup', mouseend);
});


// 2.监听触摸事件
element.addEventListener('touchstart', event => {
    for (let touch of event.changedTouches) {
        start(touch);
    }
});

element.addEventListener('touchmove', event => {
    for (let touch of event.changedTouches) {
        move(touch);
    }
});

element.addEventListener('touchend', event => {
    for (let touch of event.changedTouches) {
        end(touch);
    }
});

element.addEventListener('touchcancel', event => {
    for (let touch of event.changedTouches) {
        cancel(touch);
    }
});


// 3.抽象鼠标与触摸事件的共同行为
let start = point => {
    console.log('start', point.clientX, point.clientY);
};

let move = point => {
    console.log('move', point.clientX, point.clientY);
};

let end = point => {
    console.log('end', point.clientX, point.clientY);
};

let cancel = point => {
    console.log('cancel');
};