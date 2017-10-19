'use strict';

const assert = require('assert');
const resDoc = require('../task/mongoConnect.js');
const validRes = require('../task/result');


describe('mongoConnect', function () {

    it('object equality', async function () {
        let jValidResult = JSON.stringify(validRes);
        let jValidDoc = await resDoc;
        assert.deepEqual(jValidResult, jValidDoc);
    }).timeout(5000);
});