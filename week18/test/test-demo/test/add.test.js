// import assert from 'assert';
// import { add } from '../dist/add.js';
/*
let mod = require('../dist/add.js');
let assert = require('assert');

describe('add', function () {
    it('add(3, 4) should be 7', function () {
        assert.equal(mod.add(3, 4), 7);
    });
});
*/

import { add } from '../src/add.js';
import assert from 'assert';

it('add(3, 4) should be 7', () => {
    assert.equal(add(3, 4), 7);
});