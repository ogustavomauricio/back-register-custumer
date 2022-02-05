const {connection} = require('./connection');
const { ObjectId } = require('mongodb')


const verifyAlreadyCustumer = async (name) => {
    const conn = await connection();
    const verifyName = await conn.collection('customers').findOne({ name: name });
  return verifyName;
};

const createCustomersModel = async (customer) => {
  const conn = await connection();
  await conn.collection('customers').insertOne({ ...customer });
  
  return { status: 201, message: 'Cliente cadastrado com sucesso!'};
};

const getAllModel = async () => {
    const conn = await connection();
    const verifyName = await conn.collection('customers').find({}).toArray();

    return verifyName;

};

// PARA VERIFICAR SE O ID PASSADO EXISTE NO DB
const verifyIdModel = async (id) => {
  const conn = await connection();
  const verifyId = await conn.collection('customers').findOne({_id: ObjectId(id) });
  // console.log(verifyId);
  return verifyId;


}

const deleteCustumerModel = async (id) => {  
  // console.log('MODEL',id);
  const conn = await connection();
   await conn.collection('customers').deleteOne({ _id: ObjectId(id) });

};
//REQUIÇÃO PARA ATUALIZAR O CLIENTE
const updateCustumerModel = async (id, custumer) => {
  const { name, age, city, state } = custumer;
   const conn = await connection();
  const result = await conn.collection('customers').updateOne({ _id: ObjectId(id) }, { $set: {name, age, city, state}},);

  return result
}

const getCustumerByIdModel = async (id) => {
  const conn = await connection();
 const custumer =  await conn.collection('customers').findOne({ _id: ObjectId(id) });

 return custumer;
}

module.exports = {
    createCustomersModel,
    verifyAlreadyCustumer,
    getAllModel,
    deleteCustumerModel,
    verifyIdModel,
    getCustumerByIdModel,
    updateCustumerModel,
}