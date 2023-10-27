const knex = require("../database/connection")
const Categoria = require("../models/Categorias")


class categoriasController{

  async index(req,res){
    var fkUserCat = req.params.id;
    // console.log('catController: '+ JSON.stringify(fkUserCat))
    var cat = await Categoria.findAll(fkUserCat)
    res.json(cat)
  }
  
  async dashboard(req,res){
    var fkUserCat = req.params.id;
    // console.log('catController: '+ JSON.stringify(fkUserCat))
    var cat = await Categoria.dashboard(fkUserCat)
    res.json(cat)
  }

  async indexRec(req,res){
    var fkUserCat = req.params.id;
    // console.log('catController: '+ JSON.stringify(fkUserCat))
    var cat = await Categoria.findAllRec(fkUserCat)
    res.json(cat)
  }
  async indexDes(req,res){
    var fkUserCat = req.params.id;
    console.log('catController: '+ JSON.stringify(fkUserCat))
    var cat = await Categoria.findAllDes(fkUserCat)
    res.json(cat)
  }
  async indexOne(req,res){
    var id = req.body;
    var idUser = 1// req.bodyUser;
    console.log('catController: '+ id +' '+idUser)
    var catOne = await Categoria.findById(id,idUser)
    if (catOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(catOne)
    }
  }

  async create(req,res){
    var{nomeCat,descCat,ativoCat,fkUserCat,tipoCat} = req.body;
    // console.log("Controler: ", nomeCat,descCat)
    if(nomeCat != undefined || descCat != undefined){
     var result= await Categoria.create(nomeCat,descCat,ativoCat,fkUserCat,tipoCat)
     console.log(result)

     if(result.status){
      res.status(200).send({msg:result.msg})

     }else
     res.status(418).json({msg:result.msg})


      // return result
    }else{
      res.status(418).json({msg:err})
    }

  }

  async update(req,res){
    console.log('ModelUpdate? '+JSON.stringify(req.body))
    var {idCat,nomeCat,descCat/*,ativoCat,fkUserCat*/} = req.body;
    
    if(idCat != undefined && idCat > 0){

      var result = await Categoria.update(idCat,nomeCat,descCat/*,ativoCat,fkUserCat*/)
      
      if(result.status){
        res.status(200).send("Dados atualizados com sucesso")
      }else{
        res.status(406).send(result.err)
      }
      
    }else{
      res.status(406).send("idCat INVALidCatO")
    }

  }

  async delete(req,res){
    var idCat= req.body.idCat;
    console.log("Controller: ", idCat)

     var result = await Categoria.delete(idCat)
       
     if(result.stats){
          res.status(200).send("Dados excluidos com sucesso")
        }else{
          res.status(406).send(result.err)
        }
   
  }

}//fim da classe

module.exports = new categoriasController()