import { Image, Box, Text, Heading, Wrap, WrapItem, Button, IconButton } from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import {useParams, useNavigate} from "react-router-dom"
import axios from 'axios'
import {useEffect, useState} from "react"

function Post(props) {
  let params = useParams()
  let navigate = useNavigate()
  let [post, setPost] = useState()
  useEffect(() => {
    const configuration = {
      method: 'get',
      url: `http://localhost:3005/posts/${params.postId}`
    }
    axios(configuration)
    .then((result) => {
      setPost(result.data)
      console.log(result.data);
    })
  }, [])
  if (!post) return <></>
  return (
    <Box style={{padding: '2em 10em'}}>
      <Heading fontSize='2xl' mb={4}>{new Date(post.date).toDateString() }</Heading>
      <Wrap spacing='10px'>
        <WrapItem >
        {post.images.map((image, index) => {
          return <Image key={index} src={image.url} h='50vh' alt='Food image' /> 
        })}
        </WrapItem> 
      </Wrap>
      <Heading mt={2} fontSize='xl'>{post.location}</Heading>
      <Text mb={4} fontSize='lg'  noOfLines={2}>{post.body}</Text>
      <IconButton icon={<ArrowBackIcon />}  onClick={() => navigate('/')}></IconButton>
    </Box>
  )
}

export default Post