const Knex = require("knex")({
  dialect: 'mysql',
  client: 'mysql'
})
const { Result } = require("postcss")
const knex = require("../database/connection")

class Objetivos {

  async findAll(id) {

    try {
      var result = await knex.select('*')
        .from('objetivos')
        .where({ fkUserObj: id })
        .leftOuterJoin('categorias', function () {
          this
            .on('categorias.idCat', '=', 'objetivos.fkCatObj')
        })
      return result
    } catch (err) {
      console.log(err)
    }
  }

  async findById(id) {
    // console.log("Model: ", id)
    try {
      var result = await knex.select('*')
        .from('objetivos')
        .where({ fkUserObj: id })
        .leftOuterJoin('categorias', function () {
          this
            .on('categorias.idCat', '=', 'objetivos.fkCatObj')
        })
      if (result.length > 0) {
        return result[0]
      } else {
        return undefined
      }

    } catch (err) {
      console.log(err)
    }
  }
  async findByObjetivos(nomeObj) {

    try {
      var result = await knex.select(["nomeObj", "descObj", "valorObj", "metaObj", "dataObj", "fkUserObj"]).where({ nomeObj: nomeObj }).table("objetivos")
      if (result.length > 0) {
        return true
      } else {
        return false
      }

    } catch (err) {
      console.log(err)
    }
  }

  async create(nomeObj, descObj, valorObj, metaObj, dataObj,fkCatObj, fkUserObj) {
    console.log("Model: ",nomeObj, descObj, valorObj, metaObj, dataObj,fkCatObj, fkUserObj)
    try {
      await knex.insert({ nomeObj: nomeObj, descObj: descObj, valorObj: valorObj, metaObj: metaObj, dataObj : dataObj,fkCatObj:fkCatObj, fkUserObj:fkUserObj }).table("objetivos")

    } catch (err) {
      console.log(err)
      res.status(406).send(err)
    }

  }

  async update(idObj, nomeObj, descObj, valorObj, metaObj, dataObj,fkCatObj, fkUserObj) {
    console.log(idObj,nomeObj,descObj,valorObj,metaObj,dataObj,fkUserObj)
    var id = await this.findById(idObj)
    try {
      console.log(id)
      // if (id != undefined) {
        var edit = {};

        if (nomeObj != undefined) {
          edit.nomeObj = nomeObj

        }

        if (descObj != undefined) {
          edit.descObj = descObj
        }
        if (metaObj != undefined) {
          edit.metaObj = metaObj
        }
        if (dataObj != undefined) {
          edit.dataObj = dataObj
        }
        if (valorObj != undefined) {
          edit.valorObj = valorObj
        }
        if (fkCatObj != undefined) {
          edit.fkCatObj = fkCatObj
        }

        console.log(edit)
        try {
          await knex.update(edit).where({ idObj: idObj }).table("objetivos")
          return { status: true }
        } catch (err) {
          return { status: false, err: err }
        }

      // } else {
      //   return { status: false, err: "O Objetivo não existe!" }
      // }
    } catch (err) {
      return err
    }
  }

  async delete(idObj) { 

  
      try {
        // await knex.delete().where({ fkConLanc: idConta }).table("lancamentos")
        var result = await knex.delete().where({ idObj: idObj }).table("objetivos");
        console.log("Deletion result:", result);
        return { status: true };
      } catch (err) {
        console.error("Deletion error:", err);
        return { status: false, err: err };
      }
  
  }


}

module.exports = new Objetivos();