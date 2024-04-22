import { notfound } from "../icon"

const NotFound = () => {
  return (
    <div className="flex justify-center items-center container" style={{height: "600px"}}>
      <img src={notfound} width={600}></img>
    </div>
  )
}

export default NotFound