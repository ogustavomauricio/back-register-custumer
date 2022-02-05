const Joi = require('joi');
const {
    createCustomersModel,
    verifyAlreadyCustumer,
    getAllModel,
    deleteCustumerModel,
    verifyIdModel,
    updateCustumerModel,
    getCustumerByIdModel,
} = require('../model/custumersModel');

// const {
//     custumerSchema
// } = require('../validations/validateCustumer')



const custumerSchema= Joi.object({
    name:Joi.string().required(),
    age:Joi.string().required(),
    city:Joi.string().required(),
    state:Joi.string().required(),
});
// FUNÇÃO PARA CRIAR CLIENTE
const createCustomerService = async (custumer) => {
    // const { name, age, city, state } = custumer;
  const {error} = custumerSchema.validate(custumer);
  if (error) return { status: 400, message: error.message }

  const checkCustumer = await verifyAlreadyCustumer(custumer.name);
  if (checkCustumer) return { status: 400, message: 'Cliente já foi cadastrado'}

 const {status, message} = await createCustomersModel(custumer);
 return { status, message };
};

// FUNÇÃO PARA BUSCAR TODOS OS CLIENTES
const getCustumersService = async () => {
    const getAll = await getAllModel();
    // console.log(getAll);
    return getAll;
};

// FUNÇÃO PARA DELETAR CLIENTES
const deleteCustumerService = async (id) => {
    // console.log('SERVICE', id);
  const verifyId = await verifyIdModel(id);
  if (!verifyId) return { status: 400, message: 'Cliente Não Existe'};

   await deleteCustumerModel(id);

  return { status: 200, message: 'Excluido com sucesso'}
};

//REQUISIÇÃO PARA ATUALIZAR CLIENTE
const updateCustumerService = async (id, custumer) => {
    // const { error } = custumerSchema.validate(custumer);
    // if (error) return { status: 400, message: error.message}

    const verifyId = await verifyIdModel(id);
    if (!verifyId) return { status: 400, message: 'Cliente Não Existe'};
  
    const result =  await updateCustumerModel(id, custumer);

    return result
};

// REQUISIÇÃO PARA BUSCAR CLIENTES POR ID
const getCustumerByIdService = async (id) => {
  const getUser = await getCustumerByIdModel(id);

  return getUser;
}
module.exports = {
    createCustomerService,
    getCustumersService,
    deleteCustumerService,
    updateCustumerService,
    getCustumerByIdService
}