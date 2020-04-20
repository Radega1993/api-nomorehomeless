let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../../../server');
const request = require('supertest');

chai.use(chaiHttp);

const url= 'http://localhost:3005';

describe('Test /ping', () => {
  it('Return a 200 response', (done) => {
    chai.request(url)
      .get('/ping')
      .end((err, res) => {
        if (err) done(err)
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return Pong!', (done) => {
    chai.request(url)
      .get('/ping')
      .end((err, res) => {
        if (err) done(err)
        expect(res.text).to.be.equal('Pong!');
        done();
      });
  });
});



describe('Test /status', () => {
  it('should return Ok!', (done) => {
    chai.request(url)
      .get('/status')
      .end((err, res) => {
        if (err) done(err)
        expect(res.text).to.be.equal('Ok!');
        done();
      });
  });
});
