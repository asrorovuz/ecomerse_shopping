import { useState } from "react";
import closeIcon from "../../assets/close.svg";

const HeaderTop = () => {

  const [isVisable, setIsVisable] = useState<boolean>(true)

  return (
    isVisable ? 
      <div className="reclame">
        <div className="container flex items-center justify-end w-100">
          <div className="flex items-center justify-between w-70">
            <p>Sign up and get 20% off to your first order. Sign Up Now!</p>
            <img src={closeIcon} alt="close icon" onClick={() => setIsVisable(false)}/>
          </div>
        </div>
      </div> : null
  )
};

export default HeaderTop;
