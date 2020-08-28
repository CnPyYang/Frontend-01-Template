import {
    parseHTML
} from '../src/parser.js';
import assert from 'assert';

it('parse a single element', () => {
    let doc = parseHTML('<div></div>');
    let element = doc.children[0];
    assert.equal(element.tagName, 'div');
    assert.equal(element.children.length, 0);
    assert.equal(element.type, 'element');
    assert.equal(element.attributes.length, 2);
});

it('parse a single element with text content', () => {
    let doc = parseHTML('<div>hello</div>');
    let text = doc.children[0].children[0];
    assert.equal(text.content, 'hello');
    assert.equal(text.type, 'text');
});

it('tag mismatch', () => {
    try {
        let doc = parseHTML('<div></abc>');
    } catch (e) {
        assert.equal(e.message, 'Tag start end doesn\'t match!');
    }
});

it('text with <', () => {
    let doc = parseHTML('<div>a < b</div>');
    let text = doc.children[0].children[0];
    assert.equal(text.content, 'a < b');
    assert.equal(text.type, 'text');
});

it('with unquoted、singleQuoted、doubleQuoted property and whitespace', () => {
    let doc = parseHTML("<div id=a class='b' title=\"c\" ></div>");
    let element = doc.children[0];
    let count = 0;

    for (let attr of element.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, 'a');
        }
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, 'b');
        }
        if (attr.name === 'title') {
            count++;
            assert.equal(attr.value, 'c');
        }
    }
    assert.ok(count === 3);
});

it('with unquoted、singleQuoted、doubleQuoted property', () => {
    let doc = parseHTML("<div id=a class='b' title=\"c\"></div>");
    let element = doc.children[0];
    let count = 0;

    for (let attr of element.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, 'a');
        }
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, 'b');
        }
        if (attr.name === 'title') {
            count++;
            assert.equal(attr.value, 'c');
        }
    }
    assert.ok(count === 3);
});

it('with unquoted、singleQuoted、doubleQuoted property', () => {
    let doc = parseHTML("<div id=a class='b' title=\"c\"/>");
    let element = doc.children[0];
    let count = 0;

    for (let attr of element.attributes) {
        if (attr.name === 'id') {
            count++;
            assert.equal(attr.value, 'a');
        }
        if (attr.name === 'class') {
            count++;
            assert.equal(attr.value, 'b');
        }
        if (attr.name === 'title') {
            count++;
            assert.equal(attr.value, 'c');
        }
    }
    assert.ok(count === 3);
});

it('with selfClosingStartTag', () => {
    let doc = parseHTML('<img/>');
    let element = doc.children[0];
    let count = 0;
    for (let attr of element.attributes) {
        if (attr.name === 'isSelfClosing') {
            count++;
            assert.equal(attr.value, true);
        }
    }
    assert.ok(count === 1);
});

it('script element', ()=> {
    let content = `
        <div>abc</div>
        <span>x</span>
        /script>
        <script
        <
        </
        </s
        </sc
        </scr
        </scri
        </scrip
        </script
    `;
    let doc = parseHTML(`<script>${content}</script>`);
    let text = doc.children[0].children[0];
    assert.equal(text.content, content);
    assert.equal(text.type, 'text');
});

it('attribute with no value', () => {
    let doc = parseHTML('<input readonly/>')
});

it('attribute with no value', () => {
    let doc = parseHTML('<input readonly id/>')
});