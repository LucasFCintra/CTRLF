var express = require("express");
var app = express();
var router = express.Router();

const contaController = require("../controllers/contasController");
const categoriasController = require("../controllers/categoriasController");
const objetivoController = require("../controllers/objetivosController");
const receitaController = require("../controllers/lancamentosController");
const usuariosController = require("../controllers/usuariosController");

/*ROTAS API CATEGORIA */
router.get('/api/categoria/:id',categoriasController.index);
router.get('/api/rec/categoria/:id',categoriasController.indexRec);
router.get('/api/des/categoria/:id',categoriasController.indexDes);
router.get('/api/v2/categoria/',categoriasController.indexOne);
router.post("/api/categoria",categoriasController.create);
router.put("/api/categoria",categoriasController.update);
router.delete("/api/categoria",categoriasController.delete);

/*ROTAS API usuario */
router.get('/api/usuario/:id',usuariosController.index);
router.post('/api/usuario/login',usuariosController.login);
router.post("/api/usuario",usuariosController.create);
router.put("/api/usuario",usuariosController.update);
router.delete("/api/usuario",usuariosController.delete);

/*ROTAS API RECEITA */

router.get('/api/lancamento/:id',receitaController.index);
router.get('/api/v2/lancamento/:id',receitaController.indexOne);
router.post("/api/lancamento",receitaController.create);
router.put("/api/lancamento",receitaController.update);
router.delete("/api/lancamento",receitaController.delete);


/*ROTAS API Conta*/

router.get('/api/objetivo/:id',objetivoController.index);
router.get('/api/v2/objetivo/:id',objetivoController.indexOne);
router.post("/api/objetivo",objetivoController.create);
router.put("/api/objetivo",objetivoController.update);
router.delete("/api/objetivo",objetivoController.delete);

/* ROTAS API BANCO */
router.get('/api/conta/:id',contaController.index);
router.get('/api/v2/conta/:id',contaController.indexOne);
router.post("/api/conta",contaController.create);
router.put("/api/conta", contaController.update);
router.delete("/api/conta",contaController.delete);


module.exports = router;