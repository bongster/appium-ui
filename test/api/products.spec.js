var assert = require('assert');
var request = require('supertest');
var app = require('../../app');

describe('Product API test', function () {
    it('should return status code 200 when request product list api', function () {
        request(app)
            .get('/api/products')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});
