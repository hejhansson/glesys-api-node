'use strict';

var assert = require('assert');
var sinon = require('sinon');
var Request = require('../lib/request');

describe('request', function () {
    var authOptions = {
        apiKey: 'key',
        apiUser: 'user',
    };

    it('should set apiKey and apiUser', function () {
        var request = new Request(authOptions);

        assert.strictEqual(request.apiKey, authOptions.apiKey);
        assert.strictEqual(request.apiUser, authOptions.apiUser);
    });

    describe('get()', function () {
        it('should set the request method to "GET"', function () {
            var request = new Request({});

            sinon.stub(request, 'request', function (url, options, callback) {
                assert.strictEqual(options.method, 'GET');
            });

            request.get('https://api.glesys.com');
        });

        it('should set the request URL', function () {
            var request = new Request({});

            sinon.stub(request, 'request', function (url, options, callback) {
                assert.strictEqual(url, 'https://api.glesys.com/api/serviceinfo');
            });

            request.get('/api/serviceinfo');
        });

        it('should set the query string', function () {
            var request = new Request({});
            var data = {
                foo: 'bar',
            };

            sinon.stub(request, 'request', function (url, options, callback) {
                assert.strictEqual(options.query, data);
            });

            request.get('/api/serviceinfo', data);
        });
    });

    describe('post()', function () {
        it('should set the request method to "POST"', function () {
            var request = new Request({});

            sinon.stub(request, 'request', function (url, options, callback) {
                assert.strictEqual(options.method, 'POST');
            });

            request.post('https://api.glesys.com');
        });

        it('should set the request URL', function () {
            var request = new Request({});

            sinon.stub(request, 'request', function (url, options, callback) {
                assert.strictEqual(url, 'https://api.glesys.com/api/serviceinfo');
            });

            request.post('/api/serviceinfo');
        });

        it('should set the body', function () {
            var request = new Request({});
            var data = {
                foo: 'bar',
            };

            sinon.stub(request, 'request', function (url, options, callback) {
                assert.strictEqual(options.body, data);
            });

            request.post('/api/serviceinfo', data);
        });
    });
});
