'use strict';

const assert = require('assert');
const tasks = require('../task/index');


describe('01-strings-tasks', function() {

    it('concatenateStrings should return concatenation of two strings', function() {
        assert.equal('aabb', tasks.concatenateStrings('aa','bb'));
        assert.equal('aa', tasks.concatenateStrings('aa',''));
        assert.equal('bb', tasks.concatenateStrings('','bb'));
    });