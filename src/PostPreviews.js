import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { background, Box, flexbox, Heading, Text } from "@chakra-ui/react"
import PostPreview from "./PostPreview"

export default function PostPreviews() {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:3005/posts",
    }
    axios(configuration).then((result) => {
      setPosts(result.data)
      console.log(result.data.reverse())
    })
  }, [])

  function orderByDate(post1, post2) {
    const a = new Date(post1)
    const b = new Date(post2)

    if (a.getTime() < b.getTime()) {
      return -1
    }
    if (a.getTime() > b.getTime()) {
      return 1
    }
    if (a.getTime() > b.getTime()) {
      return 0
    }
  }
  return (
    <Box
      mb={4}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {posts.sort(orderByDate).map((post) => {
        return (
          <Box key={post._id} onClick={() => navigate("/" + post._id)}>
            <PostPreview key={post._id} post={post} />
          </Box>
        )
      })}
    </Box>
  )
}
