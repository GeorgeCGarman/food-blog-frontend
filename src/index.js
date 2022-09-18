import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostPreviews from "./PostPreviews"
import Post from "./Post"
import { extendTheme } from "@chakra-ui/react"

// const theme = extendTheme({
//   styles: {
//     global: {
//       // styles for the `body`
//       body: {
//         bg: "rgb(228, 221, 215)",
//       },
//     },
//   },
// })

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PostPreviews />} />
            <Route path=":postId" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
