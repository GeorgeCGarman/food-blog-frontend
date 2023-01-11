import axios from "axios"

const apiToken =
  "dd220514010f795c36fdddf911179841561645b2ca0bb160874f73bd70eedbbbe873f016a4134f6a771ff42fe2c1a99229a5c958fd45ab0b08622ca6ffb24541b33cbc53477e995343bd75aff56d5cf8abe6341c912b885fb3b112f7dc575f2bf93ff7c279cf68d6d778760b5a783e19064d139e392c17aba27f421e29c1ee3c"

// const baseUrl = "https://strapi-food-blog.herokuapp.com"
const baseUrl = "http://localhost:1337"

const getAll = () => {
  const configuration = {
    method: "get",
    url: `${baseUrl}/api/posts?populate=*`,
    headers: {
      authorization: `bearer ${apiToken}`,
    },
  }
  return axios(configuration).then((result) => result.data.data)
}

const getSingle = (id) => {
  const configuration = {
    method: "get",
    url: `${baseUrl}/api/posts/${id}?populate=*`,
    headers: {
      authorization: `bearer ${apiToken}`,
    },
  }
  return axios(configuration).then((result) => result.data.data.attributes)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getSingle }
