'use strict';

const assert = require('assert');
const tasks = require('../task/mongoConnect.js');


describe('mongoConnect', function() {

    it('object equality', function () {
        assert.deepEqual([{name: 'tutorials point'}, {name: 'Iron man'}], tasks);

    });
});