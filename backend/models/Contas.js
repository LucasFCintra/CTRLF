const knex = require("../database/connection")

class Conta{

  async findAll(){

    try{
     var result= await knex.select(["*"]).table("contas")
      return result
    }catch(err){
      console.log(err)
    }
  }

  async findById(idConta){
    // console.log("Model: ", idConta)
    try{
     var result = await knex.select(["*"]).where({idConta:id}).table("contas")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByConta(descConta){

    try{
     var result = await knex.select(["*"]).where({descConta:descConta}).table("contas")
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(idConta, descConta, tipoConta, valorConta,valorAtualConta,fkContaUser){
    // console.log("Model: ", NOME, DESCRICAO)
    try{
      await knex.insert({descConta:descConta,tipoConta:tipoConta,valorConta:valorConta,valorAtualConta:valorAtualConta,fkUserConta:fkContaUser}).table("contas")

    }catch(err){
      console.log(err)
      res.status(406).send(err)
    }

  }

  async update(idConta, descConta, tipoConta, valorConta,valorAtualConta,fkContaUser){

    var idConta= await this.findById(idConta)

    if(idConta!= undefined){
      var edit = {};

      if(descConta != undefined){
        if(descConta != Conta.descConta){
          var result = await this.findByConta(descConta)
            if(result == false){
              edit.descConta = descConta
            }else{
              return{status: false, err:"Categoria ja cadastrada"}
            }
        }
      }
      if(tipoConta != undefined){
        edit.tipoConta = tipoConta
      }
      if(valorConta != undefined){
        edit.valorConta = valorConta
      }
      if(valorAtualConta != undefined){
        edit.valorAtualConta = valorAtualConta
      }
      if(fkUserConta != undefined){
        edit.fkUserConta = fkContaUser
      }
      try{
        await  knex.update(edit).where({idConta:idConta}).table("contas")
        return {status:true}
      }catch(err){
        return {status:false,err:err}
      }

    }else{
      return { status: false, err: "A Conta não existe!" }
    }

  }

  async delete(idConta){

    console.log("Model: ", idConta)
    var idIsTrue = await this.findById(idConta)
    console.log(idIsTrue)
    if(idIsTrue != undefined){
      try{
        await knex.delete().where({idConta:idConta}).table("contas")
        return {stats: true}
      }catch(err){
        return {stats:false, err:err}
      }
    }


  }

}

module.exports = new Conta();