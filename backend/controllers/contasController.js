const knex = require("../database/connection")
const Conta = require("../models/Contas")


class contaController{

  async index(req,res){
    var id = req.params.id
    var conta = await Conta.findAll(id)
    res.json(conta)
  }

  async indexOne(req,res){
    var id = req.params.id;
    var conOne = await Conta.findById(id)
    if (conOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(conOne)
    }
  }

  async create(req,res){
    var{ descConta, tipoConta, valorConta,valorAtualConta,fkContaUser} = req.body;
    console.log('Conta Controller: ', descConta, tipoConta, valorConta,valorAtualConta,fkContaUser)

    if(descConta != undefined || tipoConta != undefined || fkContaUser < 0){
      await Conta.create(descConta, tipoConta, valorConta,valorAtualConta,fkContaUser)
      res.status(200).send("Dados inserido com sucesso")
    }else{
      res.status(400).json({err:"Undefined informations"})
    }

  }

  async update(req,res){

    var {idConta, descConta, tipoConta, valorConta,valorAtualConta,fkContaUser} = req.body;
    // console.log('Conta Controller: ',idConta,idConta, descConta, tipoConta, valorConta,valorAtualConta,fkContaUser)
    if(idConta != undefined && idConta > 0){

      var result = await Conta.update(idConta, descConta, tipoConta, valorConta,valorAtualConta,fkContaUser)
      
      if(result.status){
        res.status(200).send("Dados atualizados com sucesso")
      }else{
        res.status(406).send(result.err)
      }
      
    }else{
      res.status(406).send("ID INVALIDO")
    }

  }

  async delete(req,res){
    var ID= req.body.idConta;
    console.log("Controller: ", ID)

     var result = await Conta.delete(ID)
       
     if(result.stats){
          res.status(200).send("Dados excluidos com sucesso")
        }else{
          res.status(406).send(result.err)
        }
   
  }

}//fim da classe

module.exports = new contaController()