import { Route, Routes } from "react-router-dom"
import "../../styles/global.scss"
import Layout from "../layout/Layout"
import HomePage from "../../pages/home/HomePage"
import NotFound from "../404/NotFound"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
