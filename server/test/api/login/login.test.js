let chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const request = require('supertest');

const server = require('../../../server');
const Usuario = require('../../../models/usuario');

chai.use(chaiHttp);

var loginTest = Usuario({
  nombre: 'test',
  apellido: 'elmio',
  email: 'test@mail.com',
  password: '123456',
  passwordVerification: '123456',
  role: "USER_ROLE",
});

describe('Login', () => {

  beforeEach((done) => {
    Usuario.deleteMany({}, (err) => {
      done();
    });
  });


  it('Returns a 200 response', (done) => {
    loginTest.save((err, login) => {
      chai.request(server)
        .post('/login')
        .send({
          email: 'testemail@elmio.com',
          password: '123456'
        })
        .end((err, res) => {
          //console.log(login);
          console.log(res.body);

          expect(res).to.have.equal(400);

          const usuario = res[0];
          done();
        })
    });
  });

  loginTest.save((err, login) => {
    chai.request(server)
      .post('/login')
      .send({
        email: 'testemail@elmio.com',
        password: '123456'
      })
      .end((err, res) => {

        expect(res).to.have.equal(400);

        expect(res.body.isLogged).to.have.equal(true);
        done();
      })
  });
});

describe('Logout', () => {

  beforeEach((done) => {
    Usuario.deleteMany({}, (err) => {
      done();
    });
  });

  it('Returns a 200 response', (done) => {
    loginTest.save()
    chai.request(server)
      .post('/logout')
      .send({
        email: 'testemail@elmio.com'
      })
      .then(res => {
        // Now let's check our response
        expect(res).to.have.status(200);
        done();
      })
  });

  it('Check /logout', (done) => {
    loginTest.save()
    chai.request(server)
      .post('/logout')
      .send({
        email: 'testemail@elmio.com'
      })
      .then(res => {
        // Now let's check our response
        expect(res.isLogged).to.have.equal(false);
        done();
      })
  });

});
