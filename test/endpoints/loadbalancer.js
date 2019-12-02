'use strict';

const assert = require('assert');
const sinon = require('sinon');

const LoadBalancer = require('../../lib/endpoints/loadbalancer');
const Request = require('../../lib/request');

describe('endpoints/loadbalancer', () => {
    describe('addBackEnd', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/addbackend');
            });

            loadBalancer.addBackEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.addBackEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('addCertificate', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/addcertificate');
            });

            loadBalancer.addCertificate();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.addCertificate(expected);

            assert.ok(stub.called);
        });
    });

    describe('addFrontEnd', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/addfrontend');
            });

            loadBalancer.addFrontEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.addFrontEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('addTarget', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/addtarget');
            });

            loadBalancer.addTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.addTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('addToBlacklist', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/addtoblacklist');
            });

            loadBalancer.addToBlacklist();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
                prefix: 'a',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.addToBlacklist(expected);

            assert.ok(stub.called);
        });
    });

    describe('create', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/create');
            });

            loadBalancer.create();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                name: 'example',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.create(expected);

            assert.ok(stub.called);
        });
    });

    describe('destroy', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/destroy');
            });

            loadBalancer.destroy();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.destroy(expected);

            assert.ok(stub.called);
        });
    });

    describe('details', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/details');
            });

            loadBalancer.details();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.details(expected);

            assert.ok(stub.called);
        });
    });

    describe('disableTarget', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/disabletarget');
            });

            loadBalancer.disableTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.disableTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('edit', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/edit');
            });

            loadBalancer.edit();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.edit(expected);

            assert.ok(stub.called);
        });
    });

    describe('editBackEnd', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/editbackend');
            });

            loadBalancer.editBackEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.editBackEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('editFrontEnd', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/editfrontend');
            });

            loadBalancer.editFrontEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.editFrontEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('editTarget', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/edittarget');
            });

            loadBalancer.editTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.editTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('enableTarget', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/enabletarget');
            });

            loadBalancer.enableTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.enableTarget(expected);

            assert.ok(stub.called);
        });
    });

    describe('errors', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/errors');
            });

            loadBalancer.errors();

            assert.ok(stub.called);
        });

        it('should set the query string', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'get').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.errors(expected);

            assert.ok(stub.called);
        });
    });

    describe('list', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'get').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/list');
            });

            loadBalancer.list();

            assert.ok(stub.called);
        });
    });

    describe('listCertificate', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/listcertificate');
            });

            loadBalancer.listCertificate();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.listCertificate(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeBackEnd', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/removebackend');
            });

            loadBalancer.removeBackEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.removeBackEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeCertificate', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/removecertificate');
            });

            loadBalancer.removeCertificate();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.removeCertificate(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeFromBlacklist', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/removefromblacklist');
            });

            loadBalancer.removeFromBlacklist();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
                prefix: 'a',
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.removeFromBlacklist(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeFrontEnd', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/removefrontend');
            });

            loadBalancer.removeFrontEnd();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.removeFrontEnd(expected);

            assert.ok(stub.called);
        });
    });

    describe('removeTarget', () => {
        it('should set the request URL', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const stub = sinon.stub(request, 'post').callsFake((url) => {
                assert.strictEqual(url, '/loadbalancer/removetarget');
            });

            loadBalancer.removeTarget();

            assert.ok(stub.called);
        });

        it('should set the request body', () => {
            const request = new Request();
            const loadBalancer = new LoadBalancer(request);
            const expected = {
                loadbalancerid: 1,
            };

            const stub = sinon.stub(request, 'post').callsFake((url, data) => {
                assert.deepStrictEqual(data, expected);
            });

            loadBalancer.removeTarget(expected);

            assert.ok(stub.called);
        });
    });
});
