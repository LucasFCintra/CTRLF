const knex = require("../database/connection")

class Lancamentos {

  async findAll(id) {

    try {
      var result = await knex.select('*')
        .from('lancamentos')
        .where({ fkUserLanc: id, tipoLanc: 'receita' })
        .leftOuterJoin('categorias', function () {
          this
            .on('categorias.idCat', '=', 'lancamentos.fkCatLanc')
        }).leftOuterJoin('contas', function () {
          this
            .on('contas.idConta', '=', 'lancamentos.fkConLanc')
        })
      return result


    } catch (err) {
      console.log(err)
    }
  }
  async findAllDes(id) {

    try {
      var result = await knex.select('*')
        .from('lancamentos')
        .where({ fkUserLanc: id, tipoLanc: 'despesa' })
        .leftOuterJoin('categorias', function () {
          this
            .on('categorias.idCat', '=', 'lancamentos.fkCatLanc')
        }).leftOuterJoin('contas', function () {
          this
            .on('contas.idConta', '=', 'lancamentos.fkConLanc')
        })
      console.log(result)
      //  knex.select(["idLanc","nomeLanc","descLanc","valorLanc","dataLanc","fkUserLanc","fkCatLanc","fkConLanc"]).where({fkUserLanc:id}).table("lancamentos")
      return result


    } catch (err) {
      console.log(err)
    }
  }

  async dashboard(id) {
    var result={};
    console.log(id)
    try {
      var rec = await knex.sum('valorLanc as Receitas')
        .from('lancamentos')
        .where({ fkUserLanc: id, tipoLanc: 'receita' })

      var des = await knex.sum('valorLanc as Despesas')
        .from('lancamentos')
        .where({ fkUserLanc: id, tipoLanc: 'despesa' })

      var ultimosLancRec = await knex.select('*')
        .from('lancamentos')
        .where({ fkUserLanc: id, tipoLanc: 'receita' })
        .limit(5)
        .orderBy('idLanc', 'desc')
        .leftOuterJoin('categorias', function () {
          this
            .on('categorias.idCat', '=', 'lancamentos.fkCatLanc')
        }).leftOuterJoin('contas', function () {
          this
            .on('contas.idConta', '=', 'lancamentos.fkConLanc')
        })
      var ultimosLancDes = await knex.select('*')
        .from('lancamentos')
        .where({ fkUserLanc: id, tipoLanc: 'despesa' })
        .limit(5)
        .orderBy('idLanc', 'desc')
        .leftOuterJoin('categorias', function () {
          this
            .on('categorias.idCat', '=', 'lancamentos.fkCatLanc')
        }).leftOuterJoin('contas', function () {
          this
            .on('contas.idConta', '=', 'lancamentos.fkConLanc')
        })

      var ultimasCat = await knex.select('*')
        .from('categorias')
        .where({ fkUserCat: id })
        .limit(5)
        .orderBy('idCat', 'desc')

      var ultimasCon = await knex.select('*')
        .from('contas')
        .where({ fkContaUser: id })
        .limit(5)
        .orderBy('idConta', 'desc')

      var chartCatJson = await knex.raw('select c.nomeCat as "categoria", SUM(l.valorLanc) as "valor" from lancamentos l      left join categorias c on c.idCat = l.fkCatLanc     where fkUserLanc = 1     group by(fkCatLanc) ')
      var chartCat = chartCatJson[0]
      var dataCat = ''

      for (let i = 0; i < chartCat.length; i++) {
        dataCat += ` ${chartCat[i].categoria},${chartCat[i].valor} \n`
      }
      //  "salário,1\n teste,2,\n teste2,3\n teste4,4"

      // console.log('Bar: \n',dataCat)

      var chartObjJson = await knex.raw('Select nomeObj as nome ,metaObj as meta, valorObj as valor from objetivos')
      var chartObj = chartObjJson[0]
      var dataObj = ''

      for (let i = 0; i < chartObj.length; i++) {
        dataObj += ` ${chartObj[i].nome}:${chartObj[i].meta},${chartObj[i].valor} \n`
      }

      console.log('Bar: \n', dataObj)


      result = {
        receita: rec[0].Receitas,
        despesa: des[0].Despesas,
        ultimosLancRec: ultimosLancRec,
        ultimosLancDes: ultimosLancDes,
        chartCat: dataCat,
        chartObj: dataObj,
        ultimasCat: ultimasCat,
        ultimasCon: ultimasCon

      }

      //  console.log(result)
      //  knex.select(["idLanc","nomeLanc","descLanc","valorLanc","dataLanc","fkUserLanc","fkCatLanc","fkConLanc"]).where({fkUserLanc:id}).table("lancamentos")
      return result
    } catch (err) {
      console.log(err)
    }
  }


  async findById(id) {
    // console.log("Model Id: ", id)
    try {
      var result = await knex.select('*')
        .from('lancamentos')
        .leftOuterJoin('categorias', function () {
          this
            .on('categorias.idCat', '=', 'lancamentos.fkCatLanc')
        }).leftOuterJoin('contas', function () {
          this
            .on('contas.idConta', '=', 'lancamentos.fkConLanc')
        })

      // knex.select(["nomeLanc","descLanc","valorLanc","dataLanc","fkUserLanc","fkCatLanc","fkConLanc"]).where({fkUserLanc:id}).table("lancamentos")
      if (result.length > 0) {
        return result[0]
      } else {
        return undefined
      }

    } catch (err) {
      console.log(err)
    }
  }
  async findByMes(id) {
    try {
      var result = await knex.select(["nomeLanc", "descLanc", "valorLanc", "dataLanc", "fkUserLanc", "fkCatLanc", "fkConLanc"])
        .where({ fkUserLanc: id })
        .addWhere(dataLanc, '>=', dtInic)
        .addWhere(dataLanc, '<=', dtfim)
        .table("lancamentos")
      if (result.length > 0) {
        return result[0]
      } else {
        return undefined
      }

    } catch (err) {
      console.log(err)
    }
  }
  async findByLancamentos(nomeLanc) {

    try {
      var result = await knex.select(["nomeLanc", "descLanc", "valorLanc", "dataLanc", "fkUserLanc", "fkCatLanc", "fkConLanc"]).where({ idLanc: idLanc }).table("lancamentos")
      if (result.length > 0) {
        return true
      } else {
        return false
      }

    } catch (err) {
      console.log(err)
    }
  }

  async create(nomeLanc, descLanc, valorLanc, dataLanc, fkUserLanc, fkCatLanc, fkConLanc, tipoLanc) {
    console.log("Model: ", fkUserLanc, fkCatLanc, fkConLanc)
    try {
      await knex.insert({ nomeLanc: nomeLanc, descLanc: descLanc, valorLanc: valorLanc, dataLanc: dataLanc, fkUserLanc: fkUserLanc, fkCatLanc: fkCatLanc, fkConLanc: fkConLanc, tipoLanc: tipoLanc }).table("lancamentos")
      // .raw(`insert into lancamentos(idLanc,nomeLanc,descLanc,valorLanc,dataLanc,fkUserLanc,fkCatLanc,fkConLanc) VALUES(NULL,'${nomeLanc}','${descLanc}','${valorLanc}',${dataLanc},${fkUserLanc},${fkCatLanc},${fkConLanc})`)

    } catch (err) {
      console.log(err)
    }

  }

  async update(idLanc, nomeLanc, descLanc, valorLanc, dataLanc, fkUserLanc, fkCatLanc, fkConLanc) {

    var id = await this.findById(idLanc)

    if (id != undefined) {
      var edit = {};

      if (nomeLanc.length > 0) {
        edit.nomeLanc = nomeLanc
      }
      if (descLanc.length > 0) {
        edit.descLanc = descLanc
      }
      if (dataLanc.length > 0) {
        edit.dataLanc = dataLanc
      }
      if (valorLanc.length > 0) {
        edit.valorLanc = valorLanc
      }
      if (fkUserLanc.length > 0) {
        edit.fkUserLanc = fkUserLanc
      }
      if (fkCatLanc.length > 0) {
        edit.fkCatLanc = fkCatLanc
      }
      if (fkConLanc.length > 0) {
        edit.fkConLanc = fkConLanc
      }
      try {
        await knex.update(edit).where({ idLanc: idLanc }).table("lancamentos")
        return { status: true }
      } catch (err) {
        return { status: false, err: err }
      }

    } else {
      return { status: false, err: "A Lancamentos nÃ£o existe!" }
    }

  }

  async delete(idLanc) {

    var idIsTrue = await this.findById(idLanc) 

    if (idIsTrue != undefined) {
      try {
        await knex.delete().where({ idLanc: idLanc }).table("lancamentos")
        return { stats: true }
      } catch (err) {
        return { stats: false, err: err }
      }
    }


  }

}

module.exports = new Lancamentos();