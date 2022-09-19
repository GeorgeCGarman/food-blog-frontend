import { Box, Text, Heading, IconButton } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useParams, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import postService from "./postService"
import { Gallery } from "react-grid-gallery"

const baseUrl = "http://localhost:1337"

function Post() {
  let params = useParams()
  let navigate = useNavigate()
  const [post, setPost] = useState()
  const [images, setImages] = useState()
  useEffect(() => {
    postService.getSingle(params.postId).then((result) => {
      console.log("result :>> ", result)
      const imageData = result.images.data.map((image) => {
        const format = image.attributes.formats.medium
        return {
          src: baseUrl + image.attributes.url,
          width: format.width,
          height: format.height,
        }
      })
      console.log("imageData :>> ", imageData)
      setImages(imageData)
      setPost(result)
    })
  }, [])
  if (!post) return <></>
  return (
    <Box style={{ padding: "2em 5em" }}>
      <Heading fontSize="2xl" mb={4}>
        {new Date(post.date).toDateString()}
      </Heading>
      <Gallery images={images} rowHeight={500} enableImageSelection={false} />
      {/* <Wrap spacing="10px">
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
      </Wrap> */}
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
