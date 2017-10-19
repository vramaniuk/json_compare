'use strict';

const assert = require('assert');
const ourRes = require('../task/mongoConnect.js');
const validRes = require('../task/result');

// ourRes.then(data=>console.log(data));
describe('mongodb query test is running', function () {

    it('object equality', async function () {
        let JSONValidResult = JSON.stringify(validRes);
        let JSONOurResult = JSON.stringify(await ourRes);
        assert.equal(JSONOurResult, JSONValidResult);
    }).timeout(7000);
});