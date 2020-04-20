let chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const request = require('supertest');

const server = require('../../../server');
const Usuario = require('../../../models/usuario');

chai.use(chaiHttp);

var testName = Usuario({
  nombre: 'test',
  apellido: 'elmio',
  email: 'testemail@elmio.com',
  password: '123456',
  passwordVerification: '123456',
  role: "USER_ROLE",
});

//const mongoose = require('mongoose');
//const testMongoUrl = 'mongodb://localhost/test';

describe('Usuario', () => {

  beforeEach((done) => {
    //mongoose.connection.dropCollection('usuarios', done);
    Usuario.deleteMany({}, (err) => {
      done();
    });
  });
  /*
  afterEach((done) => {
    mongoose.connection.dropCollection('usuarios', done);
  });


  after((done) => {
    mongoose.connection.close(done);
    //server.close(done);
  })
 */

  it('Returns a 200 response', (done) => {
    chai.request(server)
      .post('/usuario')
      .send(testName)
      .then(res => {
        // Now let's check our response
        expect(res).to.have.status(200);
        done();
      })
  });

  it('Create a user document in our DB', (done) => {
    chai.request(server)
      .post('/usuario')
      .send({
        nombre: 'test',
        apellido: 'elmio',
        email: 'testemail@elmio.com',
        password: '123456',
        passwordVerification: '123456',
        role: "USER_ROLE",
      })
      .then(() => {
        return Usuario.find({
          email: 'testemail@elmio.com'
        });
      })
      .then(result => {
        expect(result).to.have.lengthOf(1);

        const usuario = result[0];
        expect(usuario.nombre).to.be.equal('test');
        expect(usuario.apellido).to.be.equal('elmio');
        expect(usuario.email).to.be.equal('testemail@elmio.com');
        expect(usuario.role).to.be.equal('USER_ROLE');
        done();
      })
  });

  it('Find a user document in our DB', (done) => {
    testName.save()
    chai.request(server)
      .get('/usuario')
      .then(() => {
        return Usuario.find({
          email: 'testemail@elmio.com'
        });
      })
      .then(result => {
        expect(result).to.have.lengthOf(1);

        const usuario = result[0];
        expect(usuario.nombre).to.be.equal('test');
        expect(usuario.apellido).to.be.equal('elmio');
        expect(usuario.email).to.be.equal('testemail@elmio.com');
        expect(usuario.role).to.be.equal('USER_ROLE');
        done();
      })
  });


  it('Modify a user document in our DB', (done) => {


    var testName2 = Usuario({
      nombre: 'test',
      apellido: 'elmio',
      email: 'testemail@elmio.com',
      password: '123456',
      passwordVerification: '123456',
      role: "USER_ROLE",
    });

    testName2.save((err, usuario) => {
      chai.request(server)
        .put('/usuario/' + usuario.id)
        .send({
          nombre: 'test2',
          apellido: 'elmio2',
        })
        .end((err, res) => {

          expect(res).to.have.status(200);



          const usuario = res.body.usuario;

          expect(usuario.nombre).to.be.equal('test2');
          expect(usuario.apellido).to.be.equal('elmio2');
          expect(usuario.email).to.be.equal('testemail@elmio.com');
          expect(usuario.role).to.be.equal('USER_ROLE');

          done();
        });
    });
  });



  it('Remove a user document in our DB', (done) => {

    var testName2 = Usuario({
      nombre: 'test',
      apellido: 'elmio',
      email: 'testemail@elmio.com',
      password: '123456',
      passwordVerification: '123456',
      role: "USER_ROLE",
    });

    testName2.save((err, usuario) => {
      chai.request(server)
        .delete('/usuario/' + usuario.id)
        .end((err, res) => {
          expect(res).to.have.status(200);
          const usuario = res.body.usuario;

          expect(usuario.nombre).to.be.equal('test');
          expect(usuario.apellido).to.be.equal('elmio');
          expect(usuario.email).to.be.equal('testemail@elmio.com');
          expect(usuario.role).to.be.equal('USER_ROLE');

          done();
        })
    });
  });
});
