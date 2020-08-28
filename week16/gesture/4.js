let element = document.body;

let contexts = Object.create(null);

const MOUSE_SYMBOL = Symbol('mouse');

if (document.ontouchstart !== null) {
    // 1.监听鼠标事件
    element.addEventListener('mousedown', event => {
        contexts[MOUSE_SYMBOL] = Object.create(null);
        start(event, contexts[MOUSE_SYMBOL]);
        let mousemove = event => {
            move(event, contexts[MOUSE_SYMBOL]);
        }
        let mouseend = event => {
            end(event, contexts[MOUSE_SYMBOL]);
            element.removeEventListener('mousemove', mousemove);
            element.removeEventListener('mouseup', mouseend);
        }
        element.addEventListener('mousemove', mousemove);
        element.addEventListener('mouseup', mouseend);
    });
}


// 2.监听触摸事件
element.addEventListener('touchstart', event => {
    for (let touch of event.changedTouches) {
        contexts[touch.identifier] = Object.create(null);
        start(touch, contexts[touch.identifier]);
    }
});

element.addEventListener('touchmove', event => {
    for (let touch of event.changedTouches) {
        move(touch, contexts[touch.identifier]);
    }
});

element.addEventListener('touchend', event => {
    for (let touch of event.changedTouches) {
        end(touch, contexts[touch.identifier]);
        delete contexts[touch.identifier];
    }
});

element.addEventListener('touchcancel', event => {
    for (let touch of event.changedTouches) {
        cancel(touch, contexts[touch.identifier]);
        delete contexts[touch.identifier];
    }
});


// 3.抽象鼠标与触摸事件的共同行为
let start = (point, context) => {
    // 记录起始位置
    context.startX = point.clientX;
    context.startY = point.clientY;

    context.moves = []; // 移动轨迹

    // 手势状态
    context.isTap = true;
    context.isPan = false;
    context.isPress = false;

    // 按压 >=0.5s 进入 press 状态
    context.timeoutHandler = setTimeout(() => {
        if (context.isPan) return;

        context.isTap = false;
        context.isPan = false;
        context.isPress = true;
        console.log('pressstart');
    }, 500);
};

let move = (point, context) => {
    let dx = point.clientX - context.startX;
    let dy = point.clientY - context.startY;

    // 移动距离 > 100 进入 pan 状态
    if (dx ** 2 + dy ** 2 > 100 && !context.isPan) {
        if (context.isPress) {
            console.log('presscancel');
        }
        context.isTap = false;
        context.isPan = true;
        context.isPress = false;
        console.log('panstart');
    }

    context.moves.push({ dx, dy, t: Date.now() });
    context.moves = context.moves.filter(record => Date.now() - record.t < 300);

    if (context.isPan) {
        console.log('panmove');
    }
    // console.log(dx, dy);
};

let end = (point, context) => {
    if (context.isPan) {
        let dx = point.clientX - context.startX;
        let dy = point.clientY - context.startY;
        
        // console.log(context.moves);
        let record = context.moves[0];
        let speed = Math.sqrt((record.dx - dx) ** 2 + (record.dy - dy) ** 2) / (Date.now() - record.t);

        if (speed > 2.5) {
            console.log('flick');
        }
        console.log('panend');
    }
    if (context.isTap) {
        console.log('tap');
    }
    if (context.isPress) {
        console.log('pressend');
    }

    clearTimeout(context.timeoutHandler);
};

let cancel = (point, context) => {
    console.log('cancel')
    clearTimeout(context.timeoutHandler);
};