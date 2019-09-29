/// <reference path="../../../definitions/mocha.d.ts"/>
/// <reference path="../../../definitions/node.d.ts"/>
/// <reference path="../../../definitions/Q.d.ts"/>

import Q = require('q');
import assert = require('assert');
var psm = require('../../../Tests/lib/psRunner');
import path = require('path');
var psr = null;

describe('ServiceFabricUpdateManifests Suite', function () {
    this.timeout(parseInt(process.env.TASK_TEST_TIMEOUT) || 20000);

    before((done) => {
        if (psm.testSupported()) {
            psr = new psm.PSRunner();
            psr.start();
        }

        done();
    });

    after(function () {
        if (psr) {
            psr.kill();
        }
    });

    if (psm.testSupported()) {
        it('(Update-ApplicationVersions) service changed zipped', (done) => {
            psr.run(path.join(__dirname, 'Update-ApplicationVersions.ServiceChanged.Zipped.ps1'), done);
        })
    }
});