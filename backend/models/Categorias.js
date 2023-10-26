const knex = require("../database/connection")

class categoriasModel{

  async findAll(id){
    try{
     var result= await knex.select(["idCat","nomeCat","descCat","fkUserCat"]).where({fkUserCat:id}).table("categorias")
    //  console.log('CatModel:'  + JSON.stringify(id) +' | '+result )

     return result
    }catch(err){
      console.log(err)
    }
  }

  async findAllRec(id){
    try{
     var result= await knex.select(["idCat","nomeCat","descCat","fkUserCat"]).where({fkUserCat:id,tipoCat:"receita"}).table("categorias")
    //  console.log('CatModel:'  + JSON.stringify(id) +' | '+result )

     return result
    }catch(err){
      console.log(err)
    }
  } 
  async findAllDes(id){
    try{
     var result= await knex.select(["idCat","nomeCat","descCat","fkUserCat"]).where({fkUserCat:id,tipoCat:"despesa"}).table("categorias")
    //  console.log('CatModel:'  + JSON.stringify(id) +' | '+result )

     return result
    }catch(err){
      console.log(err)
    }
  }



  async findById(id,idUser){
    // console.log('CatModel:'  + id + ' ' + idUser )

    try{
     var result = await knex.select(["idCat","nomeCat","descCat","fkUserCat"])
     .where({idCat:id})
    //  .andWhere({fkUserCat:idUser})
     .table("categorias")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByCat(nomeCat,fkUserCat){

    try{
     var result = await knex.select(["nomeCat","descCat"]).where({nomeCat:nomeCat,fkUserCat:fkUserCat}).table("categorias")
    //  console.log('Find Result:'+JSON.stringify(result))
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(nomeCat,descCat,ativoCat,fkUserCat,tipoCat,fkUserLanc){
    // console.log("Model: ", nomeCat, descCat)

    var result = await this.findByCat(nomeCat,fkUserCat);
    // console.log('Create result ='  + result)
    if(result === false){

    try{
      await knex.insert({nomeCat:nomeCat,descCat:descCat,ativoCat:ativoCat, fkUserCat:fkUserCat,tipoCat:tipoCat,fkUserLanc:fkUserLanc}).table("categorias")
    return {status:true,msg:'Categoria criada com sucesso'}

    }catch(err){
      console.log(err)
    return {status:true,msg:err}
    }

  }else{
    
    return {status:false,err:'Erro: categoria ja criada'}


  }
}
  async update(idCat,nomeCat,descCat/*,ativoCat,fkUserCat*/){

 var id = await this.findById(idCat)
    console.log('Update Controler: '+id)
    if(id != undefined){
      var edit = {};

      if(nomeCat.length > 0){
        if(nomeCat != Categoria.nomeCat){
          var result = await this.findByCat(nomeCat,fkUserCat)
            if(result == false){
              edit.nomeCat = nomeCat
            }else{
              return{status: false, err:"Categoria ja cadastrada"}
            }
        }
      }
      if(descCat.length > 0){
        edit.descCat = descCat
      }
      if(ativoCat.length > 0){
        edit.ativoCat = ativoCat
      } 
    }
 
   try{
        // console.log('Model update id:'+idCat);
        await  knex.update(edit).where({idCat:idCat}).table("categorias")
        return {status:true, msg:'Dados inseridos com sucesso'}
      }catch(err){
        return {status:false,err:err}
      }

 /*   }else{
      return { status: false, err: "A categoria não existe!" }
    }*/

  }

  async delete(idCat){

    var idIsTrue = await this.findById(idCat)

    if(idIsTrue != undefined){
      try{
        await knex.delete().where({idCat:idCat}).table("categorias")
        return {stats: true}
      }catch(err){
        return {stats:false, err:err}
      }
    }


  }
  
} // fim da classe

module.exports = new categoriasModel();