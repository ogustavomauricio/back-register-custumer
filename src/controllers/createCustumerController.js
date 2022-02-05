const {
    createCustomerService,
    getCustumersService,
    deleteCustumerService,
    updateCustumerService,
    getCustumerByIdService,
} = require('../service/customerService')

//FUNCAÇÃO PARA CRIAR UM NOVO CUSTUMER
const createCustumerController = async (req, res) => {
    // console.log(req.body);
const {status, message } = await createCustomerService(req.body);

return res.status(status).json(message);
};

//FUNCAÇÃO PARA BUSCAR CUSTUMER
const getCustumersController = async(req, res) => {
    const getAllCustumers = await getCustumersService()
    return res.status(200).json(getAllCustumers)
};

//FUNCAÇÃO PARA DELETAR UM CUSTUMER
const deleteCustomerController = async (req, res) => {
    // console.log('CONTROLLER', req.params);
  const {status, message} = await deleteCustumerService(req.params)

  return res.status(status).json(message)
}

// REQUISIÇÃO PARA BUSCAR CLIENTES POR ID
const getCustumersByIdController = async (req, res) => {
    // console.log('controller', req.params);
  const getUser = await getCustumerByIdService(req.params)

  return res.status(200).json(getUser);
}

//FUNÇÃO PARA ATUALIZAR O CLIENTE
const updateCustomerController = async(req, res) => {
    console.log('UPDATE',req.params, req.body);
    const { id } = req.params;
    
    const updateProduct = await updateCustumerService(id, req.body, {new:true})
    return res.status(200).json(updateProduct);
};

module.exports = {
    createCustumerController,
    getCustumersController,
    deleteCustomerController,
    updateCustomerController,
    getCustumersByIdController
}