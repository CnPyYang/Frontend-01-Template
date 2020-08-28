# 第十五周总结

## 组件化——Single File Components

- 自定义 webpack loader
- 解析 HTML script 元素
- 获取 script 元素的文本
- 生成组件代码

## 组件化——动画

一个动画包括持续时间、定时函数、延迟、重复次数等属性，还有开始、暂停、从暂停部分开始、重新开始、循环播放等功能。

### CSS 动画

- transition
- transform
- animation

如何停止 CSS 动画？

### JS 动画

- setTimeOut();
- setInterval();
- requestAnimationFrame();

#### Timeline

- 同时控制和管理多个动画
- 每一帧只调一个函数

```javascript
export class Timeline {
    constructor() {
        this.animations = [];
    }

    tick() {
        let t = Date.now() - this.startTime;
        console.log(t);
        for (let animation of this.animations) {
            if (t > animation.duration + animation.delay) continue;
            let { object, property, template, start, end, duration, delay, timingFunction } = animation;

            let progression = timingFunction((t - delay) / duration);
            let value = start + progression * (end - start);

            object[property] = template(value);
        }
        requestAnimationFrame(() => this.tick());
    }

    start() {
        this.startTime = Date.now();
        this.tick();
    }

    add(animation) {
        this.animations.push(animation);
    }
}
```

问题：

- 结果出现错位；

- tick() 不会停止。

  ```javascript
  tick() {
          let t = Date.now() - this.startTime;
          console.log(t);
          let animations = this.animations.filter(animation => !animation.finished);
          for (let animation of animations) {
              let { object, property, template, start, end, duration, delay, timingFunction } = animation;

              let progression = timingFunction((t - delay) / duration);
              if (t > animation.duration + animation.delay) {
                  progression = 1;
                  animation.finished = true;
              }

              let value = start + progression * (end - start);

              object[property] = template(value);
          }
          if (animations.length)
              requestAnimationFrame(() => this.tick());
      }
  ```

#### Animation

```javascript
export class Animation {
    constructor(object, property, template, start, end, duration, delay, timingFunction) {
        this.object = object;
        this.property = property;
        this.template = template;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.delay = delay;
        this.timingFunction = timingFunction;
    }
}
```

## 写在最后

原来这节课就是用 JS 和 CSS 封装一个动画组件。