
import { gucci, prada, zara, vercase, calvin } from "../../icon"

const BannerBottom = () => {
  return (
    <div className="banner-bottom">
        <div className="banner-bottom-container container flex items-center justify-between">
            <img src={vercase} alt="brand" />
            <img src={zara} alt="brand" />
            <img src={gucci} alt="brand" />
            <img src={prada} alt="brand" />
            <img src={calvin} alt="brand" />
        </div>
    </div>
  )
}

export default BannerBottom