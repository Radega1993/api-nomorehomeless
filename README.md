# API NOMOREHOMELESS

API programada completament amb NodeJS. L'objectiu d'aquesta API és la de realitzar una comunicació entre l'aplicació mòbil, la base de dades i realitzar la part computacional al servidor.

La documentació completa de les crides a l'API es troba [AQUÍ](https://github.com/Radega1993/api-nomorehomeless/tree/master/apidoc/Api_nmh.pdf)

## Motivació

En plantejar el projecte, vam veure clarament que pel tipus de projecte i el volum de codi que contindria tot el projecte, la forma més òptima d'aconseguir arribar als nostres objectius era l'estratègia de "Divide y vencerás". Per aquest motiu vam decidir separar el projecte gran en 3 projectes més petits. Una base de dades, una aplicació mòbil i una API.

Per què una API? Una API permet comunicar productes i serveis amb altres, sense necessitat de saber com està implementada. Gràcies a aquesta propietat, el desenvolupament dels projectes mòbil i servidor, eren pràcticament independent i sense gaire necessitat de comunicació.

Finalment, la tecnologia era l'últim punt a decidir, teníem dubtes entre "Java", "Python", "PHP" i "NodeJS". Les 4 tecnologies són molt conegudes i utilitzades, vam plantejar arguments a favor, arguments en contra i preferències.

Java el vàrem descartar de pressa per ser un llenguatge que a cap integrant de l'equip ens apassionava i perquè Java consumeix de mitja molts recursos i el servidor on es desplegarà l'aplicació no té gaires disponibles.

A PHP, tot i la àmplia documentació que hi ha disponible y que ha estat durant molts anys el pilar de la programació backend web, li vàrem trobar l'inconvenient que cap membre del grup tenia una soltesa suficient amb el llenguatge i la corba d'aprenentatge no és gaire suau.

Entre Python i NodeJS va estar el veritable problema de decisió, ja que els 2 complien les nostres necessitats i preferències. Consumien pocs recursos, alguns membres de l'equip tenien soltesa i experiència en els 2 llenguatges, era fàcilment "Dockeritzable" per desplegar en un VPS i el consum de recursos era baix. Per decisió de l'equip es va decidir fer amb NodeJS.

## Necesitats

a primera etapa del projecte, vam ser el recull de requisits funcionals i no funcionals de la nostra aplicació i vam extreure les conclusions següents:
- Necesitavem poder realitzar operacions CRUD als usuaris, categories, productes i events.
- Necesitavem un sistema de login i logout de l'aplicació.
- Necesitavem una operació per poder pujar i descarregar imatges del servidor.
- Necessitàvem que totes aquestes dades s'actualitzessin a la Base de Dades.

## Llibreries utilitzades

Per aquest projecte s'útilitzen les següents dependencies.

- bcrypt: S'utilitza aquesta llibreria per encriptar la password en el registre i comparació de contrasenyes al procés de login.
- body-parser: Middelware utilitzat per recollir les peticions a la API i parsejar les dades.
- chai/chai-http/mocha: Conjunt de dependències utilitzades per realitzar el testing de l'API
- express: Llibreria més utilitzada de NodeJS per realitzar servidors web.
- mongoose/mongoose-type-email/mongoose-unique-validator: Llibreries per crear les comunicaións amb la Base de Dades i realitzar validacions a l'hora de introduir dades.
. underscore: Llibreria que proporciona moltes funcions del core de javascript com map, o foreach. En el nostre cas l'utilitzem per extreure la contrasenya de les sortides de l'API i donar més seguretat donat que la contrasenya no es mostrarà a la sortida, ni encriptada ni en clar.


## Estructura

El repositori te la següent estructura.

- Root
  - apidoc
  - server
    - assets
    - config
    - middlewares
    - models
    - routes
    - test
    - ***Server.js***
  - uploads
    - productos
    - usuarios
  - ***Dockerfile***


- La carpeta ***apidoc*** conté la documentació autogenerada dels diferents serveis que ofereix la API.
- La carpeta ***uploads*** conté les imatges pujades com a perfils de usauris i dels diferents productes.
- La carpeta ***server*** és la carpeta principal del projecte, aquí es troba tot el codi de l'aplicació dividit en diferents carpetes. <u>Assets</u>, directory que conté imatges per defecte que es mostren quan la persona o servei no han pujat imatge. <u>Config</u>, Directori que conté els fitxers de configuració on es declaren les variables d'entorn i rutes cap a la BD. <u>Middlewares</u> Directori on es programen els middlewares propis com per exemple la comprovació de què un usuari estigui loguejat abans de fer diferents operacions. <u>Models</u>, en aquest directori es declaren tots els "Schemas" de dades per la base de dades. <u>Routes</u> Directori que conté separada per rutes, totes les operacións que es poder reealitzar a la API. Finalment, <u> test</u> directori en es troben les proves de testing que es realitzen a l'aplicació.

## Exemple operació i TEST.

L'aplicació està programada seguint sempre la mateixa estructura, a continuació hi ha un fragment de codi d'una operació get i la seva funció de test.

``` javascript
app.post('/usuario', verificaContraseña, (req, res) => {


  let body = req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    apellido: body.apellido,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
    fecha: body.fecha,
    homeless: body.homeless
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: {
          err,
          message: 'Usuario no guardado'
        }
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB
    });
  });

});
```

En aquesta petició ***post*** podem observar con es guarda un usuari a la base de dades. podem veure que conte un middlewares anomenat <u>verificaContraseña</u>, La petició rep un camp més que no es guarda a la BD que és una verificació de contraseña, l'usuari introdueix 2 vegades la contrasenya i aquest middlewares s'encarrega de comprovar que siguin iguals abans d'executar l'operació de creació de l'usuari. Un cop a la funció primer creem un objecte de tipus USUARI amb les dades que ficarem a la BD (noteu que la password s'encripta amb un hash de 10 voltes per donar seguretat abans de realitzar cap altra acció). A continuació s'intenta guardar les dades a la base de dades. Si es produeix algun error, l'API et retorna un error 400 controlat mostrant l'error que s'hi ha produït (com per exemple un camp buit o informació no valida). Si tot ha sigut correcte, l'API retorna un codi 200 amb una sortida com la següent.

``` json
HTTP/1.1 200 OK
{
 "ok": true,
 "usuario": {
   "role": "USER_ROLE",
   "homeless": false,
   "isLogged": false,
   "_id": "5e831411e2c1d331f82c244d",
   "nombre": "testdoc",
   "apellido": "elmio",
   "fecha": "1987-10-19",
   "email": "testdoc@emlio.com",
   "__v": 0
 }
}
```
I el seu test unitari es troba a continuació.
``` javascript
var testName = Usuario({
  nombre: 'test',
  apellido: 'elmio',
  email: 'testemail@elmio.com',
  password: '123456',
  passwordVerification: '123456',
  fecha: "1987-10-19",
  role: "USER_ROLE",
});

describe('Usuario', () => {

  beforeEach((done) => {
    //mongoose.connection.dropCollection('usuarios', done);
    Usuario.deleteMany({}, (err) => {
      done();
    });
  });

  it('Create a user document in our DB', (done) => {
    chai.request(server)
      .post('/usuario')
      .send(testname)
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
});
```

Primer es declara un objecte amb unes dades fictícies, s'elimina tot el que hi hagi anteriorment a la BD de test, s'introdueixen els nous valors i es comprova la seva inserció correcta.

Tota l'API està estructurada d'aquesta mateixa manera seguint les crides POST (afegir), GET (buscar), PUT (modificar), DELETE (eliminar).

## Desplegament

La aplicació esta desplegada a un servidor VPS de un dels integrants del grup.
S'ha desplegat en un contenidor docker amb el següent Dockerfile.

``` bash
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install


EXPOSE 3005
CMD [ "node", "server/server.js" ]
```

I les comandes per arrancar el servei al servidor i estar accessible pel port 80 són les següents:
``` bash
docker build -t api-nmh:v1 .
docker run -p 80:3005 -d -i -t api-nmh:v1
```
