import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const del = (objects, id) => {

  //const id = objects.find(object => object.name === name).id
  //console.log(name);
  //console.log(id);
  const data = axios.delete(`${baseUrl}/${id}`, { data: objects });
  console.log(data);
  return data.then((response) => response.data)
}

const update = (id, newObject) => {
  const data = axios.put(`${baseUrl}/${id}`, newObject)
  console.log(data);
  return data.then((response) => response.data)
}


export default { 
  getAll: getAll, 
  create: create, 
  del: del,
  update: update 
}