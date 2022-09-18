import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { background, Box, flexbox, Heading, Text } from "@chakra-ui/react"
import PostPreview from "./PostPreview"

const apiToken =
  "dd220514010f795c36fdddf911179841561645b2ca0bb160874f73bd70eedbbbe873f016a4134f6a771ff42fe2c1a99229a5c958fd45ab0b08622ca6ffb24541b33cbc53477e995343bd75aff56d5cf8abe6341c912b885fb3b112f7dc575f2bf93ff7c279cf68d6d778760b5a783e19064d139e392c17aba27f421e29c1ee3c"

const baseUrl = "http://localhost:1337"

export default function PostPreviews() {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:1337/api/posts?populate=%2A",
      headers: {
        authorization: `bearer ${apiToken}`,
      },
    }
    axios(configuration).then((result) => {
      const data = result.data.data
      console.log("result :>> ", result)
      console.log("data :>> ", data)
      setPosts(data)
    })
  }, [])

  function orderByDate(post1, post2) {
    const a = new Date(post1)
    const b = new Date(post2)
    return a - b

    // if (a.getTime() < b.getTime()) {
    //   return -1
    // }
    // if (a.getTime() > b.getTime()) {
    //   return 1
    // }
    // if (a.getTime() > b.getTime()) {
    //   return 0
    // }
  }
  return (
    <Box
      mb={4}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {posts.sort(orderByDate).map((post) => {
        return (
          <Box key={post.id} onClick={() => navigate("/" + post.id)}>
            <PostPreview key={post.id} post={post.attributes} />
          </Box>
        )
      })}
    </Box>
  )
}
