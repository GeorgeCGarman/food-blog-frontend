import { Image, Box, Text, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { useState } from "react"
const baseUrl = "http://localhost:1337"

export default function PostPreview({ post }) {
  const [hover, setHover] = useState(false)
  // style={(hover) => {
  //   return {
  //     backgroundColor: hover ? "red" : "blue"
  //   }
  // }}
  console.log("post :>> ", baseUrl + post.images.data[0].attributes.url)
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        pb={10}
        onMouseEnter={() => {
          setHover(true)
          console.log(hover)
        }}
        onMouseOut={() => {
          setHover(false)
        }}
      >
        <Wrap>
          <WrapItem>
            <Box
              boxSize="xs"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={5}
            >
              <Heading fontSize="5xl">
                {new Date(post.date).toDateString()}
              </Heading>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box boxSize="xl" h="100%" className="content">
              <Image
                src={baseUrl + post.images.data[0].attributes.url}
                alt="Food image"
              />
              <Heading mt={2} fontSize="xl">
                {post.location}
              </Heading>
              <Text fontSize="lg" noOfLines={2}>
                {post.body}
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </>
  )
}
