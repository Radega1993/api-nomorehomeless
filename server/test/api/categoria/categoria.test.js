let chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const request = require('supertest');

const server = require('../../../server');
const Categoria = require('../../../models/categoria');

chai.use(chaiHttp);

var categoriaTest = Categoria({
  nombre: "test",
  descripcion: "categoria de test",
})

//const mongoose = require('mongoose');
//const testMongoUrl = 'mongodb://localhost/test';

describe('Category', () => {

  beforeEach((done) => {
    //mongoose.connection.dropCollection('categorias', done);
    Categoria.deleteMany({}, (err) => {
      done();
    });
  });

 /*
  after((done) => {
    mongoose.connection.close(done);
    //server.close(done);
  })
  */
  it('Returns a 200 response', (done) => {
    chai.request(server)
      .post('/categoria')
      .send(categoriaTest)
      .then(res => {
        // Now let's check our response
        expect(res).to.have.status(200);
        done();
      })
  });

  it('Create a category document in our DB', (done) => {
    chai.request(server)
      .post('/categoria')
      .send(categoriaTest)
      .then(() => {
        return Categoria.find({
          nombre: 'test'
        });
      })
      .then(result => {
        expect(result).to.have.lengthOf(1);

        const category = result[0];
        expect(category.nombre).to.be.equal('test');
        expect(category.descripcion).to.be.equal('categoria de test');
        done();
      })
  });

  it('Find a category document in our DB', (done) => {
    categoriaTest.save()
    chai.request(server)
      .get('/categoria')
      .then(() => {
        return Categoria.find({
          nombre: 'test'
        });
      })
      .then(result => {
        expect(result).to.have.lengthOf(1);

        const category = result[0];
        expect(category.nombre).to.be.equal('test');
        expect(category.descripcion).to.be.equal('categoria de test');
        done();
      })
  });


  it('Modify a category document in our DB', (done) => {


    var categoriaTest2 = Categoria({
      nombre: "test",
      descripcion: "categoria de test",
    })


    categoriaTest2.save((err, categoria) => {
      chai.request(server)
        .put('/categoria/' + categoria.id)
        .send({
          nombre: 'test2',
          descripcion: 'categoria de test modificada',
        })
        .end((err, res) => {

          expect(res).to.have.status(200);



          const category = res.body.categoria;

          expect(category.nombre).to.be.equal('test2');
          expect(category.descripcion).to.be.equal('categoria de test modificada');

          done();
        });
    });
  });




  it('Remove a category document in our DB', (done) => {

    var categoriaTest2 = Categoria({
      nombre: "test",
      descripcion: "categoria de test",
    });

    categoriaTest2.save((err, categoria) => {
      chai.request(server)
        .delete('/categoria/' + categoria.id)
        .end((err, res) => {

          expect(res).to.have.status(200);

          const categoria = res.body.categoria;
          expect(categoria.nombre).to.be.equal('test');
          expect(categoria.descripcion).to.be.equal('categoria de test');

          done();
        })
    });
  });
});
