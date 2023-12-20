const knex = require("../database/connection")
const Receita = require("../models/Lancamentos")
 
class receitaController{

  async index(req,res){
    var id = req.params.id;
    var receita = await Receita.findAll(id)
    // console.log(receita)
    res.json(receita)
  }
   async indexDes(req,res){
    var id = req.params.id;
    var receita = await Receita.findAllDes(id)
    // console.log(receita)
    res.json(receita)
  }
  async dashboard(req,res){
    var id = req.params.id;
    var receita = await Receita.dashboard(id)
    // console.log(receita)
    res.json(receita)
  }

  async indexOne(req,res){
    var id = req.body;
    var desOne = await Receita.findById(id)
    if (desOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(desOne)
    }
  }

  async indexMes(req,res){
    var {idLanc,dtInic,dtFim} = req.body
    var desOne = await Receita.findByMes(idLanc,dtInic,dtFim);
    if (desOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(desOne)
    }
  }

  async create(req,res){
    var{nomeLanc,descLanc,valorLanc,dataLanc,fkCatLanc,fkConLanc,fkUserLanc,tipoLanc} = req.body;
    // console.log(nomeLanc,descLanc,valorLanc,dataLanc,fkCatLanc,fkConLanc,fkUserLanc)

    if(nomeLanc != undefined || descLanc != undefined || valorLanc < 0 || dataLanc != undefined  || fkUserLanc < 0 || fkCatLanc < 0  || fkConLanc < 0){
       await Receita.create(nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc,tipoLanc)
      // res.render("../views/home")
      res.status(200).json({msg:"Dados inserido com sucesso"})
     
    }else{
      res.status(400).json({err:"Undefined informations"})
    } 

  }

  async update(req,res){

    var {idLanc,nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc} = req.body;
    // console.log(idLanc,nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc)

    if(idLanc != undefined && idLanc > 0){

      var result = await Receita.update(idLanc,nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc)
      
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
    var ID= req.params.id;
    // console.log("Controller: ", ID)

     var result = await Receita.delete(ID)
       
     if(result.stats){
          res.status(200).send("Dados excluidos com sucesso")
        }else{
          res.status(406).send(result.err)
        }
   
  }

}//fim da classe

module.exports = new receitaController()