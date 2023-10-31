const knex = require("../database/connection")

class Conta {

  async findAll(id) {

    try {
      var result = await knex.select(["*"]).table("contas").where({ fkContaUser: id })
      return result
    } catch (err) {
      console.log(err)
    }
  }

  async findById(idConta) {
    // console.log("Model: ", idConta)
    try {
      var result = await knex.select(["*"]).where({ idConta: idConta }).table("contas")
      if (result.length > 0) {
        return result[0]
      } else {
        return undefined
      }

    } catch (err) {
      console.log(err)
    }
  }
  async findByConta(descConta) {

    try {
      var result = await knex.select(["*"]).where({ descConta: descConta }).table("contas")
      if (result.length > 0) {
        return true
      } else {
        return false
      }

    } catch (err) {
      console.log(err)
    }
  }

  async create(descConta, tipoConta, valorConta, valorAtualConta, fkContaUser) {
    // console.log("Model: ", NOME, DESCRICAO)
    try {
      await knex.insert({ descConta: descConta, tipoConta: tipoConta, valorConta: valorConta, valorAtualConta: valorAtualConta, fkContaUser: fkContaUser }).table("contas")

    } catch (err) {
      console.log(err)
      res.status(406).send(err)
    }

  }

  async update(idConta, descConta, tipoConta, valorConta, valorAtualConta) {
console.log(idConta, descConta.length, tipoConta.length, valorConta.length, valorAtualConta.length)
    /*
    var idConta = await this.findById(idConta)

    if (idConta != undefined) {*/ 
     
   console.log((valorConta==undefined),'  ',   (valorConta === ''))
    var edit = {};

      if (descConta.length > 0 ) {
        edit.descConta = descConta
      }
      if (tipoConta.length >0) {
        edit.tipoConta = tipoConta
      }
      if (valorConta.length>0) {
        edit.valorConta = valorConta
      }
      if (valorAtualConta.length>0) {
        edit.valorAtualConta = valorAtualConta
      }
      console.log(edit)
      try {
        await knex.update(edit).where({ idConta: idConta }).table("contas")
        return { status: true }
      } catch (err) {
        return { status: false, err: err }
      }

  /*  } else {
      return { status: false, err: "A Conta não existe!" }
    }*/

  }

  async delete(idConta) {
    var idIsTrue = await this.findById(idConta);
  
    if (idIsTrue != undefined) {
      console.log("Record to delete:", idIsTrue);
  
      try {

        await knex.delete().where({ fkConLanc: idConta }).table("lancamentos")
        var result = await knex.delete().where({ idConta: idConta }).table("contas");
        console.log("Deletion result:", result);
        return { status: true };
      } catch (err) {
        console.error("Deletion error:", err);
        return { status: false, err: err };
      }
    } else {
      console.log("Record with idConta not found.");
      return { status: false, err: "Record not found" };
    }
  }
  
}

module.exports = new Conta();