import {
  Image,
  Box,
  Text,
  Heading,
  Wrap,
  WrapItem,
  Button,
  IconButton,
} from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import postService from "./postService"

const apiToken =
  "dd220514010f795c36fdddf911179841561645b2ca0bb160874f73bd70eedbbbe873f016a4134f6a771ff42fe2c1a99229a5c958fd45ab0b08622ca6ffb24541b33cbc53477e995343bd75aff56d5cf8abe6341c912b885fb3b112f7dc575f2bf93ff7c279cf68d6d778760b5a783e19064d139e392c17aba27f421e29c1ee3c"

const baseUrl = "http://localhost:1337"

function Post() {
  let params = useParams()
  let navigate = useNavigate()
  let [post, setPost] = useState()
  useEffect(() => {
    postService.getSingle(params.postId).then((result) => {
      console.log("result :>> ", result)
      setPost(result)
    })
  }, [])
  if (!post) return <></>
  return (
    <Box style={{ padding: "2em 10em" }}>
      <Heading fontSize="2xl" mb={4}>
        {new Date(post.date).toDateString()}
      </Heading>
      <Wrap spacing="10px">
        <WrapItem>
          {post.images.data.map((image, index) => {
            console.log("image.attributes: " + image.attributes)
            return (
              <Image
                key={index}
                src={baseUrl + image.attributes.url}
                h="50vh"
                alt="Food image"
              />
            )
          })}
        </WrapItem>
      </Wrap>
      <Heading mt={2} fontSize="xl">
        {post.location}
      </Heading>
      <Text mb={4} fontSize="lg" noOfLines={2}>
        {post.body}
      </Text>
      <IconButton
        icon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
      ></IconButton>
    </Box>
  )
}

export default Post
