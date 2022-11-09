const  createService  = require("../service/register.service");

const create = async (req, res) => {
	const created = await createService.create(req.body)



	return res.status(200).json(created);
}

module.exports = { create };