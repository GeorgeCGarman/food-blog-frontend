import { Box, Heading, Text } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Box style={{ textAlign: "center", padding: "2em" }}>
        <Heading fontSize="5xl">Katie's Food Blog</Heading>
        <Text fontSize="2xl">Welcome to my food blog! 🍱 🍕 🍰</Text>
      </Box>
      <Outlet />
    </>
  )
}

export default App
