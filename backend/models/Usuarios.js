const { Login } = require("@mui/icons-material");
const knex = require("../database/connection")

class usuariosModel {

  async findAll(id) {
    // console.log('Model: '+id);
    try {
      var result = await knex.select(["idUser", "nomeUser", "emailUser", "senhaUser", "telefoneUser","cepUser","estadoUser","generoUser","cidadeUser"]).table("usuarios").where({ idUser: id })
      return result
    } catch (err) {
      console.log(err)
    }
  }
async login(emailUser,senhaUser){

  try {
    var result = await knex.select(["idUser"]).where({ emailUser:emailUser,senhaUser:senhaUser  }).table("usuarios")
    console.log('Login Modal: ' + JSON.stringify(result))
    
    if (result.length > 0) {
    
     
    
      return result
    } else {
      return -1
    }

  } catch (err) {
    console.log(err)
  }
}
  async findById(id) {

    try {
      var result = await knex.select(["idUser", "nomeUser", "emailUser", "senhaUser", "telefoneUser","cepUser","estadoUser","generoUser","cidadeUser"]).where({ idUser: id }).table("usuarios")
      if (result.length > 0) {
        return result[0]
      } else {
        return undefined
      }

    } catch (err) {
      console.log(err)
    }
  }
  async findByCat(nomeUser) {

    try {
      var result = await knex.select(["idUser", "nomeUser", "emailUser", "senhaUser", "telefoneUser","cepUser","estadoUser","generoUser","cidadeUser"]).where({ nomeUser: nomeUser }).table("usuarios")
      if (result.length > 0) {
        return true
      } else {
        return false
      }

    } catch (err) {
      console.log(err)
    }
  }

  async create(nomeUser,emailUser,senhaUser,telefoneUser,cepUser,estadoUser,generoUser,cidadeUser) {
    // console.log("Model: ", nomeUser, emailUser)
    try {
      await knex.insert({ nomeUser: nomeUser, emailUser: emailUser, senhaUser: senhaUser, telefoneUser: telefoneUser }).table("usuarios")

    } catch (err) {
      console.log(err)
      res.status(406).send(err)
    }

  }

  async update(idUser, nomeUser,emailUser,senhaUser,telefoneUser,cepUser,estadoUser,generoUser,cidadeUser) {

    var id = await this.findById(idUser)
        console.log('updateModel: '+id, idUser)
    if (id != undefined) {
      var edit = {};

      if (nomeUser.length > 0) {
        if (nomeUser != usuariosModel.nomeUser) {
          edit.nomeUser = nomeUser

        }
      }
      if (emailUser.length > 0) {
        edit.emailUser = emailUser
      }
      if (senhaUser.length > 0) {
        edit.senhaUser = senhaUser
      }  if (telefoneUser.length > 0) {
        edit.telefoneUser = telefoneUser
      }
      console.log('updateModel :'+ edit)
      try {
        await knex.update(edit).where({ idUser: idUser}).table("usuarios")
        return { status: true }
      } catch (err) {
        return { status: false, err: err }
      }

    } else {
      return { status: false, err: "A categoria não existe!" }
    }

  }

  async delete(idUser) {
    console.log(idUser)
    var idIsTrue = await this.findById(idUser)

    if (idIsTrue != undefined) {
      try {
        await knex.delete().where({ fkUserLanc: idUser }).table("lancamentos")
        await knex.delete().where({ fkUserObj: idUser }).table("objetivos")
        await knex.delete().where({ fkContaUser: idUser }).table("contas")
        await knex.delete().where({ fkUserCat: idUser }).table("categorias")
        await knex.delete().where({ idUser: idUser }).table("usuarios")
        
        return { stats: true }
      } catch (err) {
        return { stats: false, err: err }
      }
    }


  }

} // fim da classe

module.exports = new usuariosModel();