const Knex = require("knex")({
  dialect:'mysql',
  client:'mysql'
})
const { Result } = require("postcss")
const knex = require("../database/connection")

class Objetivos{

  async findAll(id){

    try{
      var result= await  knex.select('*')
     .from('objetivos') 
     .where({fkUserObj:id})
     .leftOuterJoin('categorias', function() {
       this
         .on('categorias.idCat', '=', 'objetivos.fkCatObj')
     }) 
     return result
    }catch(err){
      console.log(err)
    }
  }

  async findById(id){
    // console.log("Model: ", id)
    try{
      var result= await  knex.select('*')
      .from('objetivos') 
      .where({fkUserObj:id})
      .leftOuterJoin('categorias', function() {
        this
          .on('categorias.idCat', '=', 'objetivos.fkCatObj')
      }) 
      if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByObjetivos(nomeObj){

    try{
     var result = await knex.select(["nomeObj","descObj","valorObj","metaObj","dataObj","fkUserObj"]).where({nomeObj:nomeObj}).table("objetivos")
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(nomeObj,descObj,valorObj,metaObj,dataObj,fkUserObj){
    // console.log("Model: ", NOME, DESCRICAO)
    try{
      await knex.insert({nomeObj:nomeObj,descObj:descObj,valorObj:valorObj,metaObj:metaObj,dataObj,fkUserObj:dataObj,fkUserObj}).table("objetivos")

    }catch(err){
      console.log(err)
      res.status(406).send(err)
    }

  }

  async update(idObj,nomeObj,descObj,valorObj,metaObj,dataObj,fkUserObj){
    console.log(idObj,nomeObj,descObj,valorObj,metaObj,dataObj,fkUserObj)
    var id = await this.findById(idObj)

    if(id != undefined){
      var edit = {};

      if(nomeObj.length > 0){
        if(nomeObj != Objetivos.nomeObj){
          var result = await this.findByObjetivos(nomeObj)
            if(result == false){
              edit.nomeObj = nomeObj
            }else{
              return{status: false, err:"Objetivos ja cadastrada"}
            }
        }
      }
      if(descObj.length > 0){
        edit.descObj = descObj
      }
      if(metaObj.length > 0){
        edit.metaObj = metaObj
      }
      if(dataObj.length > 0){ 
        edit.dataObj = dataObj
      }
      if(valorObj.length > 0){  
        edit.valorObj = valorObj
      }

      console.log(edit)
      try{
        await  knex.update(edit).where({idObj:idObj}).table("objetivos")
        return {status:true}
      }catch(err){
        return {status:false,err:err}
      }

    }else{
      return { status: false, err: "A Objetivos não existe!" }
    }

  }
  async delete(idObj) {
    var idIsTrue = await this.findById(idObj);
  
    if (idIsTrue != undefined) {
      console.log("Record to delete:", idIsTrue);
  
      try {
        // await knex.delete().where({ fkConLanc: idConta }).table("lancamentos")
        var result = await knex.delete().where({ idObj: idObj }).table("objetivos");
        console.log("Deletion result:", result);
        return { status: true };
      } catch (err) {
        console.error("Deletion error:", err);
        return { status: false, err: err };
      }
    } else {
      console.log("Record with idObj not found.");
      return { status: false, err: "Record not found" };
    }
  }
  

}

module.exports = new Objetivos();