import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { background, Box, flexbox, Heading, Text } from "@chakra-ui/react"
import PostPreview from "./PostPreview"
import postService from "./postService"

export default function PostPreviews() {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    postService.getAll().then((result) => {
      setPosts(result)
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
