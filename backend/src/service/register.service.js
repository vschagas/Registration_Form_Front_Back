const createModel = require('../model/register.Model')

const create = async (body) => {
  return await createModel.create(body)
}

module.exports = { create }