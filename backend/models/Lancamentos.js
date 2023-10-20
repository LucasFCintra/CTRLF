const knex = require("../database/connection")

class Lancamentos{

  async findAll(id){

    try{
     var result= await  knex.select('*')
     .from('lancamentos')
     .leftOuterJoin('categorias', function() {
       this
         .on('categorias.idCat', '=', 'lancamentos.fkCatLanc')
     }).leftOuterJoin('contas', function() {
      this
        .on('contas.idConta', '=', 'lancamentos.fkConLanc')
    })
     
    //  knex.select(["idLanc","nomeLanc","descLanc","valorLanc","dataLanc","fkUserLanc","fkCatLanc","fkConLanc"]).where({fkUserLanc:id}).table("lancamentos")
      return result
    }catch(err){
      console.log(err)
    }
  }

  async findById(id){
    // console.log("Model Id: ", id)
    try{
     var result = await knex.select('*')
     .from('lancamentos')
     .leftOuterJoin('categorias', function() {
       this
         .on('categorias.idCat', '=', 'lancamentos.fkCatLanc')
     }).leftOuterJoin('contas', function() {
      this
        .on('contas.idConta', '=', 'lancamentos.fkConLanc')
    })
    
    // knex.select(["nomeLanc","descLanc","valorLanc","dataLanc","fkUserLanc","fkCatLanc","fkConLanc"]).where({fkUserLanc:id}).table("lancamentos")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByMes(id){
     try{
     var result = await knex.select(["nomeLanc","descLanc","valorLanc","dataLanc","fkUserLanc","fkCatLanc","fkConLanc"])
     .where({fkUserLanc:id})
     .addWhere(dataLanc, '>=' , dtInic)
     .addWhere(dataLanc, '<=' , dtfim)
     .table("lancamentos")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByLancamentos(nomeLanc){

    try{
     var result = await knex.select(["nomeLanc","descLanc","valorLanc","dataLanc","fkUserLanc","fkCatLanc","fkConLanc"]).where({idLanc:idLanc}).table("lancamentos")
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc){
    // console.log("Model: ", NOME, DESCRICAO)
    try{
   await knex.insert({nomeLanc:nomeLanc,descLanc:descLanc,valorLanc:valorLanc,dataLanc:dataLanc,fkUserLanc:fkUserLanc,fkCatLanc:fkCatLanc,fkConLanc:fkConLanc}).table("lancamentos")
      // .raw(`insert into lancamentos(idLanc,nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc) VALUES(NULL,'${nomeLanc}','${descLanc}','${valorLanc}',${dataLanc},${fkUserLanc},${fkCatLanc},${fkConLanc})`)
      
    }catch(err){
      console.log(err)
    }

  }

  async update(idLanc,nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc){
 
    var id = await this.findById(idLanc)

    if(id != undefined){
      var edit = {};

      if(nomeLanc != undefined){
             edit.nomeLanc = nomeLanc
       }
      
      if(descLanc != undefined){
        edit.descLanc = descLanc
      }
      if(dataLanc != undefined){
        edit.dataLanc = dataLanc
      }   
       if(valorLanc != undefined){
        edit.valorLanc = valorLanc
      }
      if(fkUserLanc != undefined){
        edit.fkUserLanc = fkUserLanc
      }
      if(fkCatLanc != undefined){
         
        edit.fkCatLanc = fkCatLanc
      }
   
      if(fkConLanc != undefined){
        
     
        edit.fkConLanc = fkConLanc
  

    }
  

      try{
        // console.log('Edit update: \n'+edit)
        await  knex.update(edit).where({idLanc:idLanc}).table("lancamentos")
        return {status:true}
      }catch(err){
        return {status:false,err:err}
      }

    }else{
      return { status: false, err: "A Lancamentos não existe!" }
    }

  }

  async delete(idLanc){

    console.log("Model: ", idLanc)
    var idIsTrue = await this.findById(idLanc)
    // console.log(idIsTrue)
    if(idIsTrue != undefined){
      try{
        await knex.delete().where({idLanc:idLanc}).table("lancamentos")
        return {stats: true}
      }catch(err){
        return {stats:false, err:err}
      }
    }


  }

}

module.exports = new Lancamentos();