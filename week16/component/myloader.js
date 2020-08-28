var parser = require('./parser');

module.exports = function (source, map) {
    //console.log(source);
    //console.log('my loader is running!');
    let tree = parser.parseHTML(source);
    //console.log(tree.children[2].children[0].content);
    let template = null;
    let script = null;

    for (let node of tree.children) {
        if (node.tagName === 'template') {
            template = node.children.filter(e => e.type !== 'text')[0];
        }
        if (node.tagName === 'script') {
            script = node.children[0].content;
        }
    }

    let visit = (node) => {
        let attrs = {};
        if (node.type === 'text') {
            return JSON.stringify(node.content);
        }
        for (let attribute of node.attributes) {
            attrs[attribute.name] = attribute.value;
        }
        let children = node.children.map(node => visit(node));
        return `createElement('${node.tagName}', ${JSON.stringify(attrs)}, ${children})`;
    }
    visit(template);

    let r = `
import {createElement, Text, Wrapper} from './createElement.js';
export class Carousel {
    setAttribute(name, value) {
        this[name] = value;
    }
    render() {
        return ${visit(template)};
    }
    mounted(parent) {
        this.render().mounted(parent);
    }
}
    `;
    console.log(r);
    return r;
}