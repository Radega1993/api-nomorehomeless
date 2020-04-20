  /*
let chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const request = require('supertest');

const server = require('../../../server');
const Usuario = require('../../../models/usuario');
const Categoria = require('../../../models/categoria');
const Producto = require('../../../models/producto');

chai.use(chaiHttp);

var productoTest = Producto({
  nombre: "hostal de test",
  descripcion: "gran hostal",
  direccion: "C/ test 25",
  horario: "de 8 a 18",
  telefono: "6123456778",
  coord: "",
  observaciones: "test test",
  categoria: null,
  usuario: null,
})

var categoriaTest = Categoria({
  nombre: "test",
  descripcion: "categoria de test",
})

var usuarioTest = Usuario({
  nombre: 'test',
  apellido: 'elmio',
  email: 'testemail@elmio.com',
  password: '123456',
  passwordVerification: '123456',
  role: "USER_ROLE",
});

//const mongoose = require('mongoose');
//const testMongoUrl = 'mongodb://localhost/test';

describe('Producto', () => {
  before((done) => {
    usuarioTest.save();
    categoriaTest.save();
    done();
  })

  beforeEach((done) => {
    //mongoose.connection.dropCollection('categorias', done);
    Producto.deleteMany({}, (err) => {
      done();
    });
  });

  it('Returns a 200 response', (done) => {

    chai.request(server)
      .post('/producto')
      .send(productoTest)
      .then(res => {
        let cat = Categoria.find({
            nombre: 'hostal de test'
          }, '_id')
        let user = () =>{ Usuario.find({
          nombre: 'test'
        }, (err, userForTest) => {
          let userId = userForTest[0].id;
          callback(userId);
        });


        expect(res).to.have.status(200);
        done();
      })
  });

    it('Create a product document in our DB', (done) => {
      chai.request(server)
        .post('/producto')
        .send(productoTest)
        .then(() => {
          return Producto.find({
            nombre: 'hostal de test'
          });
        })
        .then(result => {
          expect(result).to.have.lengthOf(1);

          const product = result[0];
          expect(product.nombre).to.be.equal('hostal de test');
          expect(product.descripcion).to.be.equal('gran hostal');
          done();
        })
    });

    it('Find a product document in our DB', (done) => {
      productoTest.save()
      chai.request(server)
        .get('/producto')
        .then(() => {
          return Categoria.find({
            nombre: 'hostal de test'
          });
        })
        .then(result => {
          expect(result).to.have.lengthOf(1);

          const product = result[0];
          expect(product.nombre).to.be.equal('hostal de test');
          expect(product.descripcion).to.be.equal('gran hostal');
          done();
        })
    });


    it('Modify a product document in our DB', (done) => {


      var productoTest2 = Producto({
        nombre: "hostal de test2",
        descripcion: "gran hostal",
        direccion: "C/ test 25",
        horario: "de 8 a 18",
        telefono: "6123456778",
        categoria: null,
        usuario: null,
      })


      productoTest2.save((err, producto) => {
        chai.request(server)
          .put('/producto/' + producto.id)
          .send({
            nombre: 'hostal de test2',
          })
          .end((err, res) => {

            expect(res).to.have.status(200);



            const product = res.body.producto;

            expect(product.nombre).to.be.equal('hostal de test2');
            expect(product.descripcion).to.be.equal('categoria de test modificada');

            done();
          });
      });
    });




    it('Remove a product document in our DB', (done) => {

      var productoTest2 = Producto({
        nombre: "hostal de test",
        descripcion: "gran hostal",
        direccion: "C/ test 25",
        horario: "de 8 a 18",
        telefono: "6123456778",
        categoria: null,
        usuario: null,
      });

      productoTest2.save((err, producto) => {
        console.log(producto);
        chai.request(server)
          .delete('/producto/' + producto.id)
          .end((err, res) => {

            expect(res).to.have.status(200);

            const product = res.body.producto;
            expect(product.nombre).to.be.equal('hostal de test');
            expect(product.descripcion).to.be.equal('gran hostal');

            done();
          })
      });
    });

});
    */
